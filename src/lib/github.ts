export type GitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  topics: string[]
  stargazers_count: number
  languages: string[]
  updated_at: string
}

async function fetchReadmeExcerpt(repoFullName: string, headers: Record<string, string>): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoFullName}/readme`, {
      headers: { ...headers, Accept: 'application/vnd.github.v3.raw' },
      next: { revalidate: 18000 }
    })
    if (!res.ok) return null
    
    const text = await res.text()
    
    // Strip markdown formatting to get a clean plain text excerpt
    let cleanText = text
      .replace(/<!--[\s\S]*?-->/g, '') // remove HTML comments
      .replace(/<[^>]+>/g, '') // remove HTML tags
      .replace(/```[\s\S]*?```/g, '') // remove code blocks
      .replace(/`([^`]+)`/g, '$1') // inline code
      .replace(/!\[.*?\]\(.*?\)/g, '') // images
      .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // links
      .replace(/^[#*-=]+\s*(.*)$/gm, '$1') // headers and lists
      .replace(/\r?\n|\r/g, ' ') // new lines to space
      .replace(/\s+/g, ' ') // collapse multi-spaces
      .trim()

    if (cleanText.length === 0) return null
    if (cleanText.length > 180) {
      // Find the last space before the 180 limit so we don't cut off a word mid-sentence
      const limitText = cleanText.substring(0, 180)
      const lastSpace = limitText.lastIndexOf(' ')
      return limitText.substring(0, lastSpace > 0 ? lastSpace : 180) + '...'
    }
    return cleanText
  } catch {
    return null
  }
}

async function fetchRepoLanguages(repoFullName: string, headers: Record<string, string>): Promise<string[]> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoFullName}/languages`, {
      headers,
      next: { revalidate: 18000 }
    })
    if (!res.ok) return []
    const data = await res.json()
    // Returns an object like { "TypeScript": 1234, "HTML": 123 }, sorted by bytes by default
    // We take the top 4 languages to avoid overflowing the UI
    return Object.keys(data).slice(0, 4)
  } catch {
    return []
  }
}

export async function fetchGitHubRepos(username = 'Shinigami2018'): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN
  const extraReposStr = process.env.GITHUB_EXTRA_REPOS ?? ''

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
  }
  
  if (token && token !== "YOUR_GITHUB_TOKEN_HERE") {
    headers.Authorization = `Bearer ${token}`
  }

  try {
    // 1. Fetch user's own repos
    const userReposPromise = fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      headers,
      next: { revalidate: 18000 }, // Cache for 5 hours
    }).then(async res => {
      if (!res.ok) {
        console.error('Failed to fetch user repos:', res.status, await res.text())
        return []
      }
      return res.json()
    })

    // 2. Fetch specific external repos
    const extraRepoNames = extraReposStr
      .split(',')
      .map(s => {
        let clean = s.trim()
        if (clean.startsWith('https://github.com/')) {
          clean = clean.replace('https://github.com/', '')
        }
        // Remove trailing slashes if any
        clean = clean.replace(/\/$/, '')
        return clean
      })
      .filter(Boolean)
      
    const extraReposPromises = extraRepoNames.map(repoFullName => 
      fetch(`https://api.github.com/repos/${repoFullName}`, {
        headers,
        next: { revalidate: 18000 },
      }).then(res => res.ok ? res.json() : null) // Silently ignore failed individual lookups
    )

    const [userRepos, ...extraRepos] = await Promise.all([userReposPromise, ...extraReposPromises])
    
    // Filter user repos (no forks, no profile readme, no private repos)
    const filteredUserRepos = (userRepos as any[]).filter((repo: any) => !repo.fork && !repo.private && repo.name !== username)
    // Filter out nulls and private extra repos
    const validExtraRepos = extraRepos.filter((repo: any) => repo && !repo.private)

    // Combine both sets
    const allRepos = [...filteredUserRepos, ...validExtraRepos]

    // Deduplicate by repository ID (in case an external repo overlaps)
    const uniqueMap = new Map()
    for (const repo of allRepos) {
      if (!uniqueMap.has(repo.id)) {
        uniqueMap.set(repo.id, repo)
      }
    }

    // Sort combined list by most recently updated
    const sorted = Array.from(uniqueMap.values()).sort((a, b) => {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    })

    const top6 = sorted.slice(0, 6)

    // Fetch READMEs and Languages for the top 6 repos concurrently
    const finalRepos = await Promise.all(
      top6.map(async (repo: any) => {
        const [readmeExcerpt, languages] = await Promise.all([
          fetchReadmeExcerpt(repo.full_name, headers),
          fetchRepoLanguages(repo.full_name, headers)
        ])
        
        return {
          ...repo,
          description: readmeExcerpt || repo.description, // fallback to repo description if readme fails
          languages: languages.length > 0 ? languages : (repo.language ? [repo.language] : [])
        } as GitHubRepo
      })
    )

    return finalRepos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

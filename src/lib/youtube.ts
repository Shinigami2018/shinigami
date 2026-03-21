export type YouTubeVideo = {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  duration: string | null
}

// Converts ISO 8601 duration (e.g. "PT14M22S") to "14:22" format
function formatDuration(iso: string): string {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return ''
  const h = parseInt(match[1] ?? '0')
  const m = parseInt(match[2] ?? '0')
  const s = parseInt(match[3] ?? '0')
  const mm = String(m).padStart(h > 0 ? 2 : 1, '0')
  const ss = String(s).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

export async function fetchLatestVideos(maxResults = 4): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelHandle = process.env.YOUTUBE_CHANNEL_HANDLE ?? 'samonhunt2018'

  if (!apiKey) return []

  try {
    // Step 1 — resolve channel handle to channel ID
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${channelHandle}&key=${apiKey}`,
      { next: { revalidate: 18000 } } // cache for 5 hours
    )
    const channelData = await channelRes.json()
    const uploadsPlaylistId =
      channelData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads

    if (!uploadsPlaylistId) return []

    // Step 2 — fetch latest uploads from the playlist
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`,
      { next: { revalidate: 18000 } }
    )
    const playlistData = await playlistRes.json()
    const items = playlistData?.items ?? []

    // Step 3 — fetch durations via the videos endpoint
    const videoIds: string[] = items.map(
      (item: { snippet: { resourceId: { videoId: string } } }) =>
        item.snippet.resourceId.videoId
    )

    const detailsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(',')}&key=${apiKey}`,
      { next: { revalidate: 18000 } }
    )
    const detailsData = await detailsRes.json()
    const durationsMap: Record<string, string> = {}
    for (const v of detailsData?.items ?? []) {
      durationsMap[v.id] = formatDuration(v.contentDetails.duration)
    }

    return items.map(
      (item: {
        snippet: {
          resourceId: { videoId: string }
          title: string
          description: string
          publishedAt: string
          thumbnails: { maxres?: { url: string }; high?: { url: string }; medium?: { url: string } }
        }
      }) => {
        const videoId = item.snippet.resourceId.videoId
        return {
          id: videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail:
            item.snippet.thumbnails?.maxres?.url ??
            item.snippet.thumbnails?.high?.url ??
            item.snippet.thumbnails?.medium?.url ??
            '',
          publishedAt: item.snippet.publishedAt,
          duration: durationsMap[videoId] ?? null,
        }
      }
    )
  } catch {
    return []
  }
}

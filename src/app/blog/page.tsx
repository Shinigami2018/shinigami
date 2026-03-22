import { client } from '@/sanity/lib/client'
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { fetchLatestVideos, type YouTubeVideo } from '@/lib/youtube'
import Link from 'next/link'

export const revalidate = 3600

type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string | null
  excerpt: string | null
  tags: string[] | null
  coverImage: { asset: unknown; alt: string | null; hotspot: unknown } | null
}

function formatDate(dateStr: string) {
  return new Date(dateStr)
    .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
    .toUpperCase()
    .replace(',', '')
    .replace(' ', '_')
    .replace(' ', '_')
}

function formatVideoDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

export default async function Blog() {
  const [posts, videos] = await Promise.all([
    client.fetch(ALL_POSTS_QUERY) as Promise<Post[]>,
    fetchLatestVideos(8),
  ])

  return (
    <div className="flex flex-col gap-16 font-sans animate-in fade-in duration-700">
      {/* Header */}
      <header className="border-b border-archive-border pb-6 pt-4">
        <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-archive-cyan/50"></div>
            CONTENT_FEED // BLOG_&amp;_MEDIA
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">INSIGHTS_&amp;_PUBLICATIONS</h1>
        <p className="text-archive-mute mt-5 max-w-xl text-sm md:text-base leading-relaxed">
           Media stream. Accessing archived visual data and neural-encoded technical documentation from the deep-core repository.
        </p>
      </header>

      {/* Dashboard Layout: Side-by-Side on XL screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">
        
        {/* ── Left Column: Articles ───────────────────────────────────────────────── */}
        <section className="flex flex-col">
          <div className="flex items-center justify-between mb-8 border-b border-archive-border pb-4">
             <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-cyan)" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                ARTICLES_&amp;_RESOURCES
             </h2>
             <span className="font-mono text-[11px] text-archive-mute uppercase tracking-widest hidden sm:inline">
               ENTRIES: {posts.length.toString().padStart(3, '0')}
             </span>
          </div>

          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 border border-dashed border-archive-border text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-mute)" strokeWidth="1.5" className="mb-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              <p className="font-mono text-xs text-archive-mute uppercase tracking-widest mb-2">NO_DATA_FOUND</p>
              <p className="text-archive-mute text-sm">No posts have been published yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-0 border-y border-archive-border">
              {posts.map((post, index) => (
                <article
                  key={post._id}
                  className={`grid grid-cols-1 sm:grid-cols-12 gap-4 py-8 ${index < posts.length - 1 ? 'border-b border-archive-border' : ''} hover:bg-archive-gray/30 transition-colors group px-4 -mx-4`}
                >
                  {/* Left meta column */}
                  <div className="sm:col-span-3 flex flex-col gap-3">
                    {post.coverImage?.asset ? (
                      <Link href={`/blog/${post.slug.current}`} className="hidden sm:block h-32 w-full overflow-hidden border border-archive-border group-hover:border-archive-cyan/40 transition-colors relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={urlFor(post.coverImage).width(400).height(400).fit('crop').url()}
                          alt={post.coverImage.alt ?? post.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                        />
                      </Link>
                    ) : null}
                    <div className="flex flex-col font-mono text-xs mt-1 space-y-1">
                      <span className="text-archive-cyan group-hover:text-white transition-colors">
                        {post.publishedAt ? formatDate(post.publishedAt) : 'UNPUBLISHED'}
                      </span>
                      {post.tags && post.tags.length > 0 ? (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[10px] font-mono text-archive-mute border border-archive-border px-1.5 py-0.5 uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Right content column */}
                  <div className="sm:col-span-9">
                    <Link href={`/blog/${post.slug.current}`} className="block">
                      <h3 className="text-lg font-bold uppercase tracking-wide mb-3 group-hover:text-archive-cyan transition-colors cursor-pointer leading-snug">
                        {post.title.replace(/ /g, '_').toUpperCase()}
                      </h3>
                    </Link>
                    <p className="text-archive-mute text-sm leading-relaxed mb-4 max-w-3xl line-clamp-3">
                      {post.excerpt ?? ''}
                    </p>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="font-mono text-xs text-archive-cyan uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors w-fit"
                    >
                      READ_ENTRY <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ── Right Column: YouTube Videos ─────────────────────────────────────────── */}
        <section className="flex flex-col">
          <div className="flex items-center justify-between mb-8 border-b border-archive-border pb-4">
            <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-archive-cyan flex items-center justify-center">
                <div className="w-2 h-2 bg-archive-cyan rounded-full animate-pulse"></div>
              </div>
              VISUAL_LOGS
            </h2>
            <a
              href={`https://www.youtube.com/@samonhunt2018`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-archive-mute uppercase tracking-widest hidden sm:flex items-center gap-2 hover:text-archive-cyan transition-colors"
            >
              CHANNEL <span>→</span>
            </a>
          </div>

          {videos.length === 0 ? (
            /* No API key yet — show a clean placeholder */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-archive-gray/20 relative overflow-hidden mb-3 border border-archive-border border-dashed flex items-center justify-center">
                    <div className="text-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-mute)" strokeWidth="1.5" className="mx-auto mb-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      <p className="font-mono text-[9px] text-archive-mute uppercase tracking-widest">API_KEY_REQUIRED</p>
                    </div>
                  </div>
                  <div className="h-3 w-3/4 bg-archive-gray/20 mb-1"></div>
                  <div className="h-2 w-1/2 bg-archive-gray/10"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {videos.map((video: YouTubeVideo) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer block"
                >
                  <div className="aspect-video bg-archive-border relative overflow-hidden mb-3 border border-archive-border group-hover:border-archive-cyan/40 transition-colors">
                    {video.thumbnail && (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                      />
                    )}
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded border border-archive-cyan/50 bg-archive-black/50 backdrop-blur-md flex items-center justify-center group-hover:bg-archive-cyan/20 transition-all group-hover:scale-110">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-archive-cyan)" stroke="var(--color-archive-cyan)" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                    </div>
                    {/* Duration badge */}
                    {video.duration && (
                      <div className="absolute bottom-3 left-3 bg-black/80 font-mono text-[11px] text-white px-2 py-1 border border-archive-border">
                        {video.duration}
                      </div>
                    )}
                    {/* Date badge */}
                    <div className="absolute top-3 right-3 bg-black/70 font-mono text-[10px] text-archive-mute px-2 py-1">
                      {formatVideoDate(video.publishedAt)}
                    </div>
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wide group-hover:text-archive-cyan transition-colors line-clamp-2 leading-relaxed">
                    {video.title}
                  </h3>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

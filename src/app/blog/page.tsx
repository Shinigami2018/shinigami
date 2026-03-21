import { client } from '@/sanity/lib/client'
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

export const revalidate = 3600 // Revalidate every hour

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

export default async function Blog() {
  const posts: Post[] = await client.fetch(ALL_POSTS_QUERY)

  return (
    <div className="flex flex-col gap-16 font-sans animate-in fade-in duration-700">
      {/* Header */}
      <header className="border-b border-archive-border pb-6 pt-4">
        <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-archive-cyan/50"></div>
            CONTENT_FEED // BLOG_&amp;_ARTICLES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">INSIGHTS_&amp;_PUBLICATIONS</h1>
        <p className="text-archive-mute mt-5 max-w-xl text-sm md:text-base leading-relaxed">
           Decentralized media stream. Accessing archived neural-encoded technical documentation from the deep-core repository.
        </p>
      </header>

      {/* Articles List */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8 border-b border-archive-border pb-4">
           <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-cyan)" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              ARTICLES_&amp;_RESOURCES
           </h2>
           <span className="font-mono text-[11px] text-archive-mute uppercase tracking-widest">
             ENTRIES: {posts.length.toString().padStart(3, '0')}
           </span>
        </div>

        {posts.length === 0 ? (
          // Empty state — no posts published yet
          <div className="flex flex-col items-center justify-center py-24 border border-dashed border-archive-border text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-mute)" strokeWidth="1.5" className="mb-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <p className="font-mono text-xs text-archive-mute uppercase tracking-widest mb-2">NO_DATA_FOUND</p>
            <p className="text-archive-mute text-sm">No posts have been published yet. Use the <span className="text-archive-cyan">/studio</span> to create your first entry.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-0 border-y border-archive-border">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-8 ${index < posts.length - 1 ? 'border-b border-archive-border' : ''} hover:bg-archive-gray/30 transition-colors group px-4 -mx-4`}
              >
                {/* Left meta column */}
                <div className="md:col-span-3 flex flex-col gap-3">
                  {/* Cover image thumbnail */}
                  {post.coverImage?.asset ? (
                    <div className="hidden md:block h-20 w-full overflow-hidden border border-archive-border group-hover:border-archive-cyan/40 transition-colors relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={urlFor(post.coverImage).width(200).height(80).fit('crop').url()}
                        alt={post.coverImage.alt ?? post.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col font-mono text-xs mt-1 space-y-1">
                    <span className="text-archive-cyan group-hover:text-white transition-colors">
                      {post.publishedAt ? formatDate(post.publishedAt) : 'UNPUBLISHED'}
                    </span>
                    {post.tags && post.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] font-mono text-archive-mute border border-archive-border px-1.5 py-0.5 uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Right content column */}
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-archive-cyan transition-colors">
                    {post.title.replace(/ /g, '_').toUpperCase()}
                  </h3>
                  <p className="text-archive-mute text-sm leading-relaxed mb-4 max-w-3xl">
                    {post.excerpt ?? ''}
                  </p>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="font-mono text-xs text-archive-cyan uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors w-fit"
                  >
                    READ ARTICLE <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

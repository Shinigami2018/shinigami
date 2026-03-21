import { client } from '@/sanity/lib/client'
import { ALL_STORIES_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

export const revalidate = 3600

type Story = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string | null
  excerpt: string | null
  genre: string | null
  coverImage: { asset: unknown; alt: string | null; hotspot: unknown } | null
}

const GENRE_LABELS: Record<string, string> = {
  'sci-fi': 'SCI-FI',
  'fantasy': 'FANTASY',
  'thriller': 'THRILLER',
  'horror': 'HORROR',
  'mystery': 'MYSTERY',
  'literary': 'LITERARY',
  'slice-of-life': 'SLICE OF LIFE',
  'other': 'OTHER',
}

function formatDate(dateStr: string) {
  return new Date(dateStr)
    .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
    .toUpperCase()
    .replace(',', '')
    .replace(' ', '_')
    .replace(' ', '_')
}

export default async function Stories() {
  const stories: Story[] = await client.fetch(ALL_STORIES_QUERY)

  return (
    <div className="flex flex-col gap-16 font-sans animate-in fade-in duration-700">
      {/* Header */}
      <header className="border-b border-archive-border pb-6 pt-4">
        <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-3 flex items-center gap-3">
          <div className="h-px w-12 bg-archive-cyan/50"></div>
          RESTRICTED_FEED // FICTION_ARCHIVE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">WRITTEN_WORKS</h1>
        <p className="text-archive-mute mt-5 max-w-xl text-sm md:text-base leading-relaxed">
          Original fiction, short stories, and long-form narratives from the personal archive.
        </p>
      </header>

      {/* Stories List */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8 border-b border-archive-border pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-cyan)" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            FICTION_CATALOG
          </h2>
          <span className="font-mono text-[11px] text-archive-mute uppercase tracking-widest">
            ENTRIES: {stories.length.toString().padStart(3, '0')}
          </span>
        </div>

        {stories.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 border border-dashed border-archive-border text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-archive-mute)" strokeWidth="1.5" className="mb-5">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <p className="font-mono text-xs text-archive-mute uppercase tracking-widest mb-2">NO_DATA_FOUND</p>
            <p className="text-archive-mute text-sm">No stories have been published yet. Use the <span className="text-archive-cyan">/studio</span> to write your first story.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-0 border-y border-archive-border">
            {stories.map((story, index) => (
              <article
                key={story._id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-8 ${index < stories.length - 1 ? 'border-b border-archive-border' : ''} hover:bg-archive-gray/30 transition-colors group px-4 -mx-4`}
              >
                {/* Left column — image + meta */}
                <div className="md:col-span-3 flex flex-col gap-3">
                  {story.coverImage?.asset ? (
                    <Link href={`/stories/${story.slug.current}`} className="hidden md:block h-44 w-full overflow-hidden border border-archive-border group-hover:border-archive-cyan/40 transition-colors relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={urlFor(story.coverImage).width(400).height(176).fit('crop').url()}
                        alt={story.coverImage.alt ?? story.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                      />
                    </Link>
                  ) : null}
                  <div className="flex flex-col font-mono text-xs mt-1 space-y-1">
                    <span className="text-archive-cyan group-hover:text-white transition-colors">
                      {story.publishedAt ? formatDate(story.publishedAt) : 'UNPUBLISHED'}
                    </span>
                    {story.genre ? (
                      <span className="text-[10px] font-mono text-archive-mute border border-archive-border px-1.5 py-0.5 uppercase tracking-wider w-fit">
                        {GENRE_LABELS[story.genre] ?? story.genre.toUpperCase()}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Right column — content */}
                <div className="md:col-span-9">
                  <Link href={`/stories/${story.slug.current}`} className="block">
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-archive-cyan transition-colors cursor-pointer">
                      {story.title.replace(/ /g, '_').toUpperCase()}
                    </h3>
                  </Link>
                  <p className="text-archive-mute text-sm leading-relaxed mb-4 max-w-3xl">
                    {story.excerpt ?? ''}
                  </p>
                  <Link
                    href={`/stories/${story.slug.current}`}
                    className="font-mono text-xs text-archive-cyan uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors w-fit"
                  >
                    READ STORY <span>→</span>
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

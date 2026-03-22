import { client } from '@/sanity/lib/client'
import { POST_BY_SLUG_QUERY, ALL_POST_SLUGS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { PortableTextComponents } from '@portabletext/react'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

// Pre-render all post slugs at build time
export async function generateStaticParams() {
  const slugs = await client.fetch(ALL_POST_SLUGS_QUERY)
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }))
}

// Custom Portable Text components styled with the Neural Archive cyberpunk aesthetic
const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-archive-text/90 text-base leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold uppercase tracking-wide mt-12 mb-4 text-white border-l-2 border-archive-cyan pl-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold uppercase tracking-wide mt-10 mb-3 text-archive-cyan">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-archive-cyan/50 pl-6 my-8 text-archive-mute italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-2 mb-6 pl-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 pl-4 marker:text-archive-cyan marker:font-mono">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-archive-text/90 text-base flex items-start gap-3">
        <span className="text-archive-cyan font-mono mt-1 flex-shrink-0">›</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-white font-bold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-archive-cyan/80 not-italic">{children}</em>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-archive-gray/40 text-archive-cyan border border-archive-border px-1.5 py-0.5 rounded-sm">{children}</code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-archive-cyan underline underline-offset-4 hover:text-white transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(value).width(900).fit('max').url()}
            alt={value.alt ?? ''}
            className="w-full border border-archive-border opacity-90"
          />
          {value.caption && (
            <figcaption className="font-mono text-[11px] text-archive-mute uppercase tracking-widest mt-3 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

function formatDateLong(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug })

  if (!post) notFound()

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-700">
      {/* Back Navigation */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-archive-mute uppercase tracking-widest hover:text-archive-cyan transition-colors mb-10"
      >
        <span>←</span> BACK_TO_ARCHIVE
      </Link>

      {/* Post Header */}
      <header className="mb-12 border-b border-archive-border pb-10">
        <div className="font-mono text-xs text-archive-cyan uppercase tracking-widest mb-4 flex items-center gap-3">
          <div className="h-px w-12 bg-archive-cyan/50"></div>
          THE_VAULT // PUBLICATION
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {post.publishedAt && (
            <span className="font-mono text-xs text-archive-mute">
              {formatDateLong(post.publishedAt)}
            </span>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-archive-cyan border border-archive-cyan/30 px-2 py-0.5 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Excerpt / lead */}
        {post.excerpt && (
          <p className="text-archive-mute text-base leading-relaxed border-l-2 border-archive-border pl-4">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* Cover Image */}
      {post.coverImage?.asset && (
        <div className="mb-12 border border-archive-border overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(post.coverImage).width(900).height(450).fit('crop').url()}
            alt={post.coverImage.alt ?? post.title}
            className="w-full object-cover opacity-80"
          />
        </div>
      )}

      {/* Body */}
      <article className="prose-none">
        {post.body ? (
          <PortableText value={post.body} components={ptComponents} />
        ) : (
          <p className="text-archive-mute font-mono text-sm">// CONTENT_NOT_FOUND</p>
        )}
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-archive-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-archive-cyan uppercase tracking-widest hover:text-white transition-colors"
        >
          <span>←</span> RETURN_TO_ARCHIVE
        </Link>
      </footer>
    </div>
  )
}

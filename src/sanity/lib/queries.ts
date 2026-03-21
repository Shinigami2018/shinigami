import { defineQuery } from 'next-sanity'

// Fetches all published posts for the blog listing page
export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    tags,
    coverImage {
      asset,
      alt,
      hotspot
    }
  }
`)

// Fetches a single post by slug for the detail page
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    tags,
    coverImage {
      asset,
      alt,
      hotspot
    },
    body
  }
`)

// Fetches all slugs for generateStaticParams
export const ALL_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`)

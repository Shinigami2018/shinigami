import { defineQuery } from 'next-sanity'

// ─── Blog Post Queries ──────────────────────────────────────────────────────

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

// ─── Story Queries ───────────────────────────────────────────────────────────

// Fetches all stories for the stories listing page
export const ALL_STORIES_QUERY = defineQuery(`
  *[_type == "story"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    genre,
    coverImage {
      asset,
      alt,
      hotspot
    }
  }
`)

// Fetches a single story by slug for the detail page
export const STORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "story" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    genre,
    coverImage {
      asset,
      alt,
      hotspot
    },
    body
  }
`)

// Fetches all story slugs for generateStaticParams
export const ALL_STORY_SLUGS_QUERY = defineQuery(`
  *[_type == "story" && defined(slug.current)] {
    "slug": slug.current
  }
`)

// ─── Gallery Queries ─────────────────────────────────────────────────────────

// Fetches all gallery images
export const ALL_GALLERY_IMAGES_QUERY = defineQuery(`
  *[_type == "galleryImage" && defined(image.asset)] | order(publishedAt desc) {
    _id,
    title,
    tag,
    "album": album->title,
    publishedAt,
    layoutStyle,
    image {
      asset,
      alt,
      hotspot
    }
  }
`)

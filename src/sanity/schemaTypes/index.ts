import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './post'
import { storyType } from './story'
import { galleryImageType } from './galleryImage'
import { galleryAlbumType } from './galleryAlbum'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, storyType, galleryAlbumType, galleryImageType],
}

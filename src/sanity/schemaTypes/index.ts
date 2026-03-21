import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './post'
import { storyType } from './story'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, storyType],
}

import { defineField, defineType } from 'sanity'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Used as the display name on the gallery card',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows user to pick focal point
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        }
      ]
    }),
    defineField({
      name: 'album',
      title: 'Album',
      type: 'reference',
      to: [{ type: 'galleryAlbum' }],
      description: 'Group this image into a specific album for gallery filtering. You can create a new album directly from here.',
    }),
    defineField({
      name: 'tag',
      title: 'Tag (Optional)',
      type: 'string',
      description: 'e.g. 3D_RENDER, PHOTOGRAPHY, 4K_MOCKUP',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'layoutStyle',
      title: 'Layout Style',
      type: 'string',
      description: 'Determines how wide the image spans on the gallery grid',
      options: {
        list: [
          { title: 'Normal Square (1 column)', value: 'normal' },
          { title: 'Wide Landscape (2 columns)', value: 'wide' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
      media: 'image',
    },
  },
})

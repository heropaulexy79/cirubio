import { defineField, defineType } from 'sanity'

export const productsPageSchema = defineType({
  name: 'productsPage',
  title: 'Products Page Header',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Premium Circular Ingredients & Fertilisers',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'Upcycled from organic waste, engineered for high nutritional density, soil regeneration, and industrial applications.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Featured Product Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Homepage Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Innovating Sustainable Protein Solutions',
    }),
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      initialValue: 'Transforming Organic Waste into Premium Resources',
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-headline / Description',
      type: 'text',
      initialValue: 'Empowering a circular economy through cutting-edge insect biotechnology and sustainable resource recovery.',
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'Explore Products',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary Button Link',
      type: 'string',
      initialValue: '/products',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Our Technology',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary Button Link',
      type: 'string',
      initialValue: '/technology',
    }),
  ],
})

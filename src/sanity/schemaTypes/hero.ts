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
      initialValue: 'Advancing Africa\'s transition to a bio-circular economy',
    }),
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      initialValue: 'Advancing Africa\'s transition to a bio-circular economy',
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-headline / Description',
      type: 'text',
      initialValue: 'Transforming organic waste into sustainable resources that power agriculture, strengthen food systems, and accelerate climate action across Africa.',
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'Explore our solution',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary Button Link',
      type: 'string',
      initialValue: '/services',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Partner With Us',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
  ],
})

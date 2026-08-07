import { defineField, defineType } from 'sanity'

export const servicesPageSchema = defineType({
  name: 'servicesPage',
  title: 'Services Page Header',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Circular Bio-Manufacturing & Waste Upcycling',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'End-to-end sustainable waste management, turn-key bio-refining partnerships, and digital carbon traceability.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Facility Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

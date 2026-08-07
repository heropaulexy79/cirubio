import { defineField, defineType } from 'sanity'

export const sustainabilitySchema = defineType({
  name: 'sustainability',
  title: 'Sustainability Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Driving Africa\'s Bio-Circular Economy',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'Our sustainable practices divert organic waste from landfills, reducing greenhouse gas emissions and returning nutrients to the soil.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'impactTitle',
      title: 'Impact Overview Title',
      type: 'string',
      initialValue: 'Measurable Environmental Impact',
    }),
    defineField({
      name: 'impactDescription',
      title: 'Impact Overview Description',
      type: 'text',
      initialValue: 'By transforming organic waste into protein ingredients and bio-fertilizer, we eliminate methane emissions and replenish agricultural land.',
    }),
    defineField({
      name: 'esgCommitment',
      title: 'ESG Commitment Statement',
      type: 'text',
      initialValue: 'Grub Bio is committed to helping partner industries achieve measurable ESG goals through verifiable carbon offsets and circular waste upcycling.',
    }),
  ],
})

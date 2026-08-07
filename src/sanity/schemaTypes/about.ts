import { defineField, defineType } from 'sanity'

export const aboutSchema = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Pioneering Circular Bioeconomy Solutions',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'At Grub.bio, we harness insect biotechnology to redefine waste management and create sustainable value.',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      initialValue: 'Our Mission',
    }),
    defineField({
      name: 'missionText',
      title: 'Mission Text',
      type: 'text',
      initialValue: 'To divert organic waste from landfills and convert it into high-value protein and organic fertilizer through innovative bio-conversion.',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
      initialValue: 'Our Vision',
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Text',
      type: 'text',
      initialValue: 'A zero-waste world where biotechnology drives sustainable food systems and resource regeneration.',
    }),
    defineField({
      name: 'founderQuote',
      title: 'Founder Quote',
      type: 'text',
      initialValue: 'Nature has spent millions of years perfecting waste recycling; our technology simply scales that natural intelligence for modern industry.',
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
      initialValue: 'Grub.bio Leadership',
    }),
    defineField({
      name: 'founderTitle',
      title: 'Founder / Executive Title',
      type: 'string',
      initialValue: 'Founder & CEO',
    }),
  ],
})

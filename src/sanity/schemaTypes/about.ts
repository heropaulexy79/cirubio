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
      initialValue: 'Building Circular Solutions for Africa\'s Future',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'Grub Bio is a technology-enabled (B2B SaaS), bio-manufacturing company transforming organic waste into high-value resources through advanced Black Soldier Fly biotechnology, data-driven operations, and digital sustainability solutions.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Cover Image',
      type: 'image',
      options: { hotspot: true },
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
      initialValue: 'To transform organic waste into high-value, sustainable resources through innovative biotechnology, powering climate-smart agriculture and advancing Africa\'s bio-circular economy.',
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
      initialValue: 'To lead Africa\'s transition toward zero-waste food systems, enabling industries to operate sustainably while creating long-term environmental and economic value.',
    }),
    defineField({
      name: 'founderTitle',
      title: 'Founder Section Title',
      type: 'string',
      initialValue: 'A New Approach to Growth and Sustainability',
    }),
    defineField({
      name: 'founderQuote',
      title: 'Founder Message Text',
      type: 'text',
      initialValue: 'Africa\'s future depends on our ability to rethink organic waste—not as a burden, but as a valuable resource. At Grub Bio, we believe that the solutions to some of our greatest challenges in food security, agriculture, and climate resilience already exist within the resources we discard every day.',
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Name & Role',
      type: 'string',
      initialValue: 'Oladipo Williams, Founder & CEO',
    }),
    defineField({
      name: 'founderImage',
      title: 'Founder Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

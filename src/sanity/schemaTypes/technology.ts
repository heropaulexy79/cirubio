import { defineField, defineType } from 'sanity'

export const technologySchema = defineType({
  name: 'technology',
  title: 'Our Technology Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Biotechnology & Data-Driven Bio-Refining',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'Harnessing Black Soldier Fly larvae bioconversion combined with IoT monitoring and proprietary SaaS analytics for high-efficiency resource recovery.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Process Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'processTitle',
      title: 'Bioconversion Process Title',
      type: 'string',
      initialValue: 'Precision Insect Biotechnology',
    }),
    defineField({
      name: 'processDescription',
      title: 'Process Description',
      type: 'text',
      initialValue: 'Our climate-controlled bioconversion modules convert organic waste into high-grade insect meal and organic frass fertilizer with minimal energy footprint.',
    }),
    defineField({
      name: 'saasTitle',
      title: 'Digital SaaS & Traceability Title',
      type: 'string',
      initialValue: 'Digital Sustainability Platform',
    }),
    defineField({
      name: 'saasDescription',
      title: 'SaaS Platform Description',
      type: 'text',
      initialValue: 'Our digital platform tracks waste inputs, carbon diversion metrics, and product quality in real-time for transparent supply chain ESG reporting.',
    }),
  ],
})

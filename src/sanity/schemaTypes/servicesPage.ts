import { defineField, defineType } from 'sanity'

export const servicesPageSchema = defineType({
  name: 'servicesPage',
  title: 'Services Page Content',
  type: 'document',
  fields: [
    // Hero Section
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
      title: 'Hero Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Circular Bio-Manufacturing Section
    defineField({
      name: 'bioManufacturingTitle',
      title: 'Bio-Manufacturing Title',
      type: 'string',
      initialValue: 'Circular Bio-Manufacturing Model',
    }),
    defineField({
      name: 'bioManufacturingDescription',
      title: 'Bio-Manufacturing Description',
      type: 'text',
      initialValue: 'We design, build, and operate automated modular bioconversion hubs directly integrated into agricultural and food processing facilities.',
    }),
    defineField({
      name: 'bioManufacturingFeatures',
      title: 'Bio-Manufacturing Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bioManufacturingImage',
      title: 'Bio-Manufacturing Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Waste Management Solutions Section
    defineField({
      name: 'wasteSolutionsTitle',
      title: 'Waste Management Title',
      type: 'string',
      initialValue: 'Industrial Organic Waste Upcycling',
    }),
    defineField({
      name: 'wasteSolutionsDescription',
      title: 'Waste Management Description',
      type: 'text',
      initialValue: 'Providing commercial and industrial partners with zero-waste landfill diversion solutions, reducing disposal fees and carbon footprint.',
    }),
    defineField({
      name: 'wasteSolutionsBenefits',
      title: 'Waste Management Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'wasteSolutionsImage',
      title: 'Waste Management Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Who We Serve Section
    defineField({
      name: 'whoWeServeTitle',
      title: 'Who We Serve Title',
      type: 'string',
      initialValue: 'Transforming Waste Across Sectors',
    }),
    defineField({
      name: 'whoWeServeDescription',
      title: 'Who We Serve Description',
      type: 'text',
      initialValue: 'Partnering with food processors, agricultural producers, feed mills, and municipal waste authorities across Africa.',
    }),

    // Partnerships Section
    defineField({
      name: 'partnershipsTitle',
      title: 'Partnerships & Collaboration Title',
      type: 'string',
      initialValue: 'Strategic Bioconversion Partnerships',
    }),
    defineField({
      name: 'partnershipsDescription',
      title: 'Partnerships Description',
      type: 'text',
      initialValue: 'Collaborate with Grub Bio to co-locate bioconversion infrastructure, achieve zero-waste certifications, and generate verified carbon credits.',
    }),
    defineField({
      name: 'partnershipsImage',
      title: 'Partnerships Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

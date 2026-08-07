import { defineField, defineType } from 'sanity'

export const servicesPageSchema = defineType({
  name: 'servicesPage',
  title: 'Services Page (Full Content)',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Enabling Circular Value Across Agriculture, Industry, and Communities',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'Grub Bio delivers integrated solutions that transform organic waste into valuable resources while helping organisations achieve their sustainability, operational, and climate objectives. Through our bio-manufacturing solution, we create circular systems that connect waste recovery, resource efficiency, and sustainable production.',
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
      initialValue: 'Turning Organic Waste into Valuable Resources',
    }),
    defineField({
      name: 'bioManufacturingDescription',
      title: 'Bio-Manufacturing Description Paragraph 1',
      type: 'text',
      initialValue: 'Our circular bio-manufacturing model transforms organic waste streams into sustainable proteins, functional oils, and organic fertilisers through innovative Black Soldier Fly technology.',
    }),
    defineField({
      name: 'bioManufacturingSubdescription',
      title: 'Bio-Manufacturing Description Paragraph 2',
      type: 'text',
      initialValue: 'By recovering nutrients from low value waste streams, we produce sustainable proteins, functional oils, and organic fertilisers that support agriculture, industry, and environmental sustainability. This closed-loop approach enables the continuous circulation of resources while reducing waste and maximising value creation.',
    }),
    defineField({
      name: 'bioManufacturingBenefits',
      title: 'Bio-Manufacturing Benefits Text',
      type: 'text',
      initialValue: 'Our solution helps organisations and municipalities convert waste from a disposal challenge into a valuable resource stream. By supporting circular economy objectives, reducing landfill dependency, and lowering environmental impact, we create measurable sustainability outcomes while contributing to more resilient agricultural and industrial value chains.',
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
      initialValue: 'Sustainable Waste Upcycling Solutions',
    }),
    defineField({
      name: 'wasteSolutionsDescription',
      title: 'Waste Management Description',
      type: 'text',
      initialValue: 'We partner with food processors, agricultural operations, and commercial entities to divert organic waste from landfills and convert it into high-value bio-based products.',
    }),
    defineField({
      name: 'wasteSolutionsBenefits',
      title: 'Waste Management Benefits List',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Zero-landfill organic waste diversion',
        'Verifiable carbon footprint reduction & ESG compliance',
        'Cost-effective waste handling & processing',
        'Closed-loop resource upcycling for industrial facilities'
      ],
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
      initialValue: 'Serving Agriculture, Industry & Municipalities',
    }),
    defineField({
      name: 'whoWeServeDescription',
      title: 'Who We Serve Description',
      type: 'text',
      initialValue: 'Empowering food processors, livestock producers, feed manufacturers, and municipal waste managers across Africa with circular biotechnology.',
    }),

    // Partnerships Section
    defineField({
      name: 'partnershipsTitle',
      title: 'Partnerships & Collaboration Title',
      type: 'string',
      initialValue: 'Partner with Grub Bio for Circular Growth',
    }),
    defineField({
      name: 'partnershipsDescription',
      title: 'Partnerships Description',
      type: 'text',
      initialValue: 'We collaborate with corporate partners, development agencies, research institutions, and governments to build scalable bio-refining hubs across Africa.',
    }),
    defineField({
      name: 'partnershipsImage',
      title: 'Partnerships Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

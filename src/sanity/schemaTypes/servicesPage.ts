import { defineField, defineType } from 'sanity'

export const servicesPageSchema = defineType({
  name: 'servicesPage',
  title: 'Services Page (Full Content)',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'bioManufacturing', title: 'Circular Bio-Manufacturing' },
    { name: 'wasteSolutions', title: 'Waste Management Solutions' },
    { name: 'whoWeServe', title: 'Who We Serve' },
    { name: 'cta', title: 'Mid CTA' },
    { name: 'partnerships', title: 'Partnerships & Collaboration' },
    { name: 'finalCta', title: 'Final CTA' },
    { name: 'social', title: 'Stay Connected' },
  ],
  fields: [
    // --- Hero Section ---
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      group: 'hero',
      initialValue: 'Our Services',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      initialValue: 'Enabling Circular Value Across Agriculture, Industry, and Communities',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      group: 'hero',
      initialValue: 'Grub Bio delivers integrated solutions that transform organic waste into valuable resources while helping organisations achieve their sustainability, operational, and climate objectives. Through our bio-manufacturing solution, we create circular systems that connect waste recovery, resource efficiency, and sustainable production.',
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'Hero Video URL',
      type: 'url',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Poster / Fallback Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // --- Circular Bio-Manufacturing Section ---
    defineField({
      name: 'bioManufacturingTitle',
      title: 'Bio-Manufacturing Title',
      type: 'string',
      group: 'bioManufacturing',
      initialValue: 'Turning Organic Waste into Valuable Resources',
    }),
    defineField({
      name: 'bioManufacturingDescription',
      title: 'Description Paragraph 1',
      type: 'text',
      group: 'bioManufacturing',
      initialValue: 'Our circular bio-manufacturing model transforms organic waste streams into sustainable proteins, functional oils, and organic fertilisers through innovative Black Soldier Fly technology.',
    }),
    defineField({
      name: 'bioManufacturingSubdescription',
      title: 'Description Paragraph 2',
      type: 'text',
      group: 'bioManufacturing',
      initialValue: 'By recovering nutrients from low value waste streams, we produce sustainable proteins, functional oils, and organic fertilisers that support agriculture, industry, and environmental sustainability. This closed-loop approach enables the continuous circulation of resources while reducing waste and maximising value creation.',
    }),
    defineField({
      name: 'bioManufacturingBenefits',
      title: 'Benefits Paragraph',
      type: 'text',
      group: 'bioManufacturing',
      initialValue: 'Our solution helps organisations and municipalities convert waste from a disposal challenge into a valuable resource stream. By supporting circular economy objectives, reducing landfill dependency, and lowering environmental impact, we create measurable sustainability outcomes while contributing to more resilient agricultural and industrial value chains.',
    }),
    defineField({
      name: 'bioManufacturingImage',
      title: 'Bio-Manufacturing Image',
      type: 'image',
      group: 'bioManufacturing',
      options: { hotspot: true },
    }),

    // --- Waste Management Solutions Section ---
    defineField({
      name: 'wasteSolutionsTitle',
      title: 'Waste Management Title',
      type: 'string',
      group: 'wasteSolutions',
      initialValue: 'Sustainable Waste Upcycling Solutions',
    }),
    defineField({
      name: 'wasteSolutionsDescription',
      title: 'Waste Management Description',
      type: 'text',
      group: 'wasteSolutions',
      initialValue: 'We partner with food processors, agricultural operations, and commercial entities to divert organic waste from landfills and convert it into high-value bio-based products.',
    }),
    defineField({
      name: 'wasteSolutionsBenefits',
      title: 'Waste Management Benefits List',
      type: 'array',
      group: 'wasteSolutions',
      of: [{ type: 'string' }],
      initialValue: [
        'Zero-landfill organic waste diversion',
        'Verifiable carbon footprint reduction & ESG compliance',
        'Cost-effective waste handling & processing',
        'Closed-loop resource upcycling for industrial facilities',
      ],
    }),
    defineField({
      name: 'wasteSolutionsImage',
      title: 'Waste Management Image',
      type: 'image',
      group: 'wasteSolutions',
      options: { hotspot: true },
    }),

    // --- Who We Serve Section ---
    defineField({
      name: 'whoWeServeBadge',
      title: 'Badge Label',
      type: 'string',
      group: 'whoWeServe',
      initialValue: 'Who We Serve',
    }),
    defineField({
      name: 'whoWeServeTitle',
      title: 'Section Title',
      type: 'string',
      group: 'whoWeServe',
      initialValue: 'Creating Value Across the Circular Economy',
    }),
    defineField({
      name: 'whoWeServeDescription',
      title: 'Section Subtitle',
      type: 'text',
      group: 'whoWeServe',
      initialValue: 'Empowering food processors, livestock producers, feed manufacturers, and municipal waste managers across Africa with circular biotechnology.',
    }),
    defineField({
      name: 'whoWeServeCards',
      title: 'Audience Cards',
      type: 'array',
      group: 'whoWeServe',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Target Group', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icon (Optional)', type: 'image' }),
          ],
        },
      ],
    }),

    // --- Services Mid CTA ---
    defineField({
      name: 'ctaTitle',
      title: 'Mid CTA Title',
      type: 'string',
      group: 'cta',
      initialValue: 'Accelerate your transition to a circular business model',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Mid CTA Description',
      type: 'text',
      group: 'cta',
      initialValue: 'Discover how Grub Bio can help your organization convert organic waste into value while achieving sustainability and ESG goals.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Partner With Us',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'Button Link',
      type: 'string',
      group: 'cta',
      initialValue: '/contact',
    }),

    // --- Partnerships & Collaboration Section ---
    defineField({
      name: 'partnershipsBadge',
      title: 'Partnerships Badge',
      type: 'string',
      group: 'partnerships',
      initialValue: 'Partnerships & Collaboration',
    }),
    defineField({
      name: 'partnershipsTitle',
      title: 'Partnerships Title',
      type: 'string',
      group: 'partnerships',
      initialValue: 'Building Collaborative Ecosystems',
    }),
    defineField({
      name: 'partnershipsDescription',
      title: 'Partnerships Description',
      type: 'text',
      group: 'partnerships',
      initialValue: 'We believe systemic transformation requires collaboration across industries, governments, research institutions, and communities. Grub Bio works closely with strategic partners to develop scalable circular economy solutions.',
    }),
    defineField({
      name: 'partnershipsPoints',
      title: 'Key Partnership Areas',
      type: 'array',
      group: 'partnerships',
      of: [{ type: 'string' }],
      initialValue: [
        'Commercial offtake agreements for insect protein and organic fertiliser',
        'Municipal and commercial organic waste collection contracts',
        'Joint research and biotechnology advancement programs',
        'Carbon credit and verified emissions reduction partnerships',
      ],
    }),
    defineField({
      name: 'partnershipsImage',
      title: 'Partnerships Image',
      type: 'image',
      group: 'partnerships',
      options: { hotspot: true },
    }),

    // --- Final CTA ---
    defineField({
      name: 'finalCtaTitle',
      title: 'Final CTA Title',
      type: 'string',
      group: 'finalCta',
      initialValue: 'Ready to Transform Your Organic Waste?',
    }),
    defineField({
      name: 'finalCtaDescription',
      title: 'Final CTA Description',
      type: 'text',
      group: 'finalCta',
      initialValue: 'Contact our sustainability team to discuss how we can partner with your business or municipality.',
    }),
    defineField({
      name: 'finalCtaButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'finalCta',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'finalCtaButtonLink',
      title: 'Button Link',
      type: 'string',
      group: 'finalCta',
      initialValue: '/contact',
    }),
  ],
})

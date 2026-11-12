import { defineField, defineType } from 'sanity'

export const homePageSchema = defineType({
  name: 'homePage',
  title: 'Homepage Sections',
  type: 'document',
  groups: [
    { name: 'intro', title: 'About / Intro' },
    { name: 'wasteValue', title: 'Value Proposition' },
    { name: 'features', title: 'Impact Pillars' },
    { name: 'products', title: 'Products Section' },
    { name: 'services', title: 'Services Section' },
    { name: 'data', title: 'Technology Dashboard' },
    { name: 'impact', title: 'Impact Metrics' },
  ],
  fields: [
    // --- 1. Intro / About Us Section ---
    defineField({
      name: 'introBadge',
      title: 'Badge Label',
      type: 'string',
      group: 'intro',
      initialValue: 'About Us',
    }),
    defineField({
      name: 'introHeadline',
      title: 'Headline',
      type: 'text',
      rows: 3,
      group: 'intro',
      initialValue: 'Driving Innovation at the Intersection of Organic Waste Management, Sustainable Agriculture and Climate Resilience',
    }),
    defineField({
      name: 'introDescription',
      title: 'Description',
      type: 'text',
      rows: 5,
      group: 'intro',
      initialValue: 'We are building a new generation of bio-refineries that combine Black Soldier Fly biotechnology, automated production systems, and real-time environmental intelligence to upcycle organic waste into high-value resources for agriculture and industry. Our goal is to unlock the value trapped in organic waste while supporting sustainable agriculture, reducing carbon emissions, providing transparent ESG insights, and fostering a truly circular economy across Africa.',
    }),
    defineField({
      name: 'introButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'intro',
      initialValue: 'Discover our story',
    }),
    defineField({
      name: 'introButtonLink',
      title: 'Button Link',
      type: 'string',
      group: 'intro',
      initialValue: '/about',
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Section Image',
      type: 'image',
      group: 'intro',
      options: { hotspot: true },
    }),

    // --- 2. Value Proposition Section ---
    defineField({
      name: 'wasteBadge',
      title: 'Badge Label',
      type: 'string',
      group: 'wasteValue',
      initialValue: 'Value Proposition',
    }),
    defineField({
      name: 'wasteHeadline',
      title: 'Headline',
      type: 'string',
      group: 'wasteValue',
      initialValue: 'Turning Waste into Value',
    }),
    defineField({
      name: 'wasteDescription',
      title: 'Description',
      type: 'text',
      rows: 5,
      group: 'wasteValue',
      initialValue: 'Grub Bio leverages Black Soldier Fly biotechnology, circular bio-manufacturing, and digital sustainability intelligence to upcycle organic waste into high-value alternative proteins, organic fertilisers, and functional oils for agriculture, aquaculture, livestock production, and industrial applications. Through our integrated SaaS platform, we provide stakeholders with real-time environmental intelligence, enabling transparent tracking of waste diversion, carbon-emission avoidance, resource recovery, and ESG performance.',
    }),
    defineField({
      name: 'wasteIcon',
      title: 'Icon / Illustration',
      type: 'image',
      group: 'wasteValue',
      options: { hotspot: true },
    }),

    // --- 3. Impact Pillars (Features) Section ---
    defineField({
      name: 'featuresLabel',
      title: 'Section Label',
      type: 'string',
      group: 'features',
      initialValue: 'Our Impact Pillars',
    }),
    defineField({
      name: 'featuresTitle',
      title: 'Section Title',
      type: 'string',
      group: 'features',
      initialValue: 'How we create change',
    }),
    defineField({
      name: 'featuresDescription',
      title: 'Section Subtitle',
      type: 'string',
      group: 'features',
      initialValue: 'Four pillars driving sustainable transformation',
    }),
    defineField({
      name: 'pillars',
      title: 'Impact Pillars List',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Pillar Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icon (SVG / Image)', type: 'image' }),
          ],
        },
      ],
    }),

    // --- 4. Products Section Header ---
    defineField({
      name: 'productsLabel',
      title: 'Section Label',
      type: 'string',
      group: 'products',
      initialValue: 'Products',
    }),
    defineField({
      name: 'productsTitle',
      title: 'Section Title',
      type: 'string',
      group: 'products',
      initialValue: 'What we produce',
    }),
    defineField({
      name: 'productsDescription',
      title: 'Section Subtitle',
      type: 'string',
      group: 'products',
      initialValue: 'Sustainable outputs from our circular process',
    }),

    // --- 5. Services Section ---
    defineField({
      name: 'servicesLabel',
      title: 'Section Label',
      type: 'string',
      group: 'services',
      initialValue: 'Our Services',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Section Title',
      type: 'string',
      group: 'services',
      initialValue: 'What we deliver',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Section Subtitle',
      type: 'string',
      group: 'services',
      initialValue: 'Four integrated solutions for sustainable transformation',
    }),
    defineField({
      name: 'servicesCards',
      title: 'Featured Services Cards',
      type: 'array',
      group: 'services',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Service Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'image', title: 'Service Image', type: 'image', options: { hotspot: true } }),
          ],
        },
      ],
    }),

    // --- 6. Technology Dashboard Section ---
    defineField({
      name: 'dataBadge',
      title: 'Badge Label',
      type: 'string',
      group: 'data',
      initialValue: 'Technology Dashboard',
    }),
    defineField({
      name: 'dataHeadline',
      title: 'Headline',
      type: 'string',
      group: 'data',
      initialValue: 'Data-driven sustainability',
    }),
    defineField({
      name: 'dataDescription',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'data',
      initialValue: 'Access real-time insights into waste diverted, carbon-emission avoidance, contributions to SDGs, resource recovery and circular economy performance through our Digital Sustainability Platform.',
    }),
    defineField({
      name: 'dataButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'data',
      initialValue: 'Explore our technologies',
    }),
    defineField({
      name: 'dataButtonLink',
      title: 'Button Link',
      type: 'string',
      group: 'data',
      initialValue: '/technology',
    }),
    defineField({
      name: 'dataImage',
      title: 'Dashboard Preview Image',
      type: 'image',
      group: 'data',
      options: { hotspot: true },
    }),

    // --- 7. Impact Metrics Section Header ---
    defineField({
      name: 'metricsBadge',
      title: 'Badge Label',
      type: 'string',
      group: 'impact',
      initialValue: 'Impact',
    }),
    defineField({
      name: 'metricsHeadline',
      title: 'Headline',
      type: 'string',
      group: 'impact',
      initialValue: 'Measurable outcomes from our work',
    }),
    defineField({
      name: 'metricsDescription',
      title: 'Description',
      type: 'text',
      rows: 2,
      group: 'impact',
      initialValue: 'Real data demonstrating the scale of our contribution to Africa\'s circular bio-economy.',
    }),
  ],
})


import { defineField, defineType } from 'sanity'

export const productsPageSchema = defineType({
  name: 'productsPage',
  title: 'Products Page (Full Content)',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Sustainable Solutions from Circular Bio-Manufacturing',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'Through innovative Black Soldier Fly technology, Grub Bio transforms organic waste into high-value products that support sustainable agriculture, animal nutrition, and industrial applications.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Protein Products Section Header
    defineField({
      name: 'proteinSectionTitle',
      title: 'Protein Products Header Title',
      type: 'string',
      initialValue: 'Black Soldier Fly Larvae Meal',
    }),
    defineField({
      name: 'proteinSectionSubheadline',
      title: 'Protein Products Sub-headline',
      type: 'text',
      initialValue: 'A sustainable, locally produced protein ingredient designed to support the growing demand for high-performance animal nutrition.',
    }),

    // Card 1: Full-Fat BSF Meal
    defineField({
      name: 'fullFatTitle',
      title: 'Full-Fat Meal Title',
      type: 'string',
      initialValue: 'Full-Fat BSF Larvae Meal',
    }),
    defineField({
      name: 'fullFatDescription',
      title: 'Full-Fat Meal Description',
      type: 'text',
      initialValue: 'A nutrient-dense protein and energy source for poultry, aquaculture, and livestock feed formulations.',
    }),
    defineField({
      name: 'fullFatBenefits',
      title: 'Full-Fat Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'High-quality protein with natural energy-rich lipids',
        'Supports growth performance and feed efficiency',
        'Sustainable alternative to imported protein ingredients',
        'Produced through a resource-efficient circular process'
      ],
    }),
    defineField({
      name: 'fullFatImage',
      title: 'Full-Fat Meal Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Card 2: Defatted BSF Meal
    defineField({
      name: 'defattedTitle',
      title: 'Defatted Meal Title',
      type: 'string',
      initialValue: 'Defatted BSF Larvae Meal',
    }),
    defineField({
      name: 'defattedDescription',
      title: 'Defatted Meal Description',
      type: 'text',
      initialValue: 'A concentrated protein ingredient developed for advanced feed formulations requiring higher protein inclusion levels.',
    }),
    defineField({
      name: 'defattedBenefits',
      title: 'Defatted Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'High protein concentration for optimized feed performance',
        'Excellent digestibility and nutrient availability',
        'Suitable for poultry, aquaculture, and livestock applications',
        'Helps reduce dependence on conventional protein sources'
      ],
    }),
    defineField({
      name: 'defattedImage',
      title: 'Defatted Meal Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Functional Lipids Section Header
    defineField({
      name: 'lipidsTitle',
      title: 'Functional Lipids Header Title',
      type: 'string',
      initialValue: 'BSF Oil',
    }),
    defineField({
      name: 'lipidsDescription',
      title: 'Functional Lipids Sub-headline',
      type: 'text',
      initialValue: 'A renewable lipid source with applications across animal nutrition and industrial value chains.',
    }),
    defineField({
      name: 'lipidsBenefits',
      title: 'Functional Lipids Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Improved energy utilization',
        'Supports gut health and animal resilience',
        'Enhances feed formulation flexibility',
        'Sustainable alternative to conventional feed oils'
      ],
    }),
    defineField({
      name: 'lipidsImage',
      title: 'Functional Lipids Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Organic Fertilizer Section Header
    defineField({
      name: 'fertilizerTitle',
      title: 'Organic Bio-Fertiliser Title',
      type: 'string',
      initialValue: 'Bio-Fertiliser (Frass)',
    }),
    defineField({
      name: 'fertilizerDescription',
      title: 'Organic Bio-Fertiliser Sub-headline',
      type: 'text',
      initialValue: 'A sustainable soil enhancement solution produced through natural bioconversion.',
    }),
    defineField({
      name: 'fertilizerBenefits',
      title: 'Organic Bio-Fertiliser Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Rich in organic matter and essential nutrients',
        'Improves soil structure and water retention',
        'Enhances microbial activity for healthier crops',
        '100% natural and eco-friendly soil conditioner'
      ],
    }),
    defineField({
      name: 'fertilizerImage',
      title: 'Organic Bio-Fertiliser Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

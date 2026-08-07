import { defineField, defineType } from 'sanity'

export const productsPageSchema = defineType({
  name: 'productsPage',
  title: 'Products Page Content',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Premium Circular Ingredients & Fertilisers',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      initialValue: 'Upcycled from organic waste, engineered for high nutritional density, soil regeneration, and industrial applications.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Protein Products Section
    defineField({
      name: 'proteinSectionTitle',
      title: 'Protein Section Title',
      type: 'string',
      initialValue: 'Black Soldier Fly Larvae Meal',
    }),
    defineField({
      name: 'proteinSectionSubheadline',
      title: 'Protein Section Sub-headline',
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
    }),
    defineField({
      name: 'defattedImage',
      title: 'Defatted Meal Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Functional Lipids Section
    defineField({
      name: 'lipidsTitle',
      title: 'Functional Lipids Title',
      type: 'string',
      initialValue: 'Functional Insect Crude Oil',
    }),
    defineField({
      name: 'lipidsDescription',
      title: 'Functional Lipids Description',
      type: 'text',
      initialValue: 'A high-energy lipid ingredient rich in lauric acid, offering antimicrobial properties and boosting gut health in young animal feed.',
    }),
    defineField({
      name: 'lipidsBenefits',
      title: 'Functional Lipids Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'lipidsImage',
      title: 'Functional Lipids Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // Organic Fertilizer Section
    defineField({
      name: 'fertilizerTitle',
      title: 'Organic Fertilizer Title',
      type: 'string',
      initialValue: 'Organic Bio-Fertiliser (Frass)',
    }),
    defineField({
      name: 'fertilizerDescription',
      title: 'Organic Fertilizer Description',
      type: 'text',
      initialValue: 'A natural, nutrient-rich soil amendment derived from digested organic waste, containing chitin to boost plant immunity and soil microbiome.',
    }),
    defineField({
      name: 'fertilizerBenefits',
      title: 'Organic Fertilizer Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'fertilizerImage',
      title: 'Organic Fertilizer Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

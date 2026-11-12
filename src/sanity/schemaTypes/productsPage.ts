import { defineField, defineType } from 'sanity'

export const productsPageSchema = defineType({
  name: 'productsPage',
  title: 'Products Page (Full Content)',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'protein', title: 'Protein Products' },
    { name: 'lipids', title: 'Functional Lipids' },
    { name: 'fertilizer', title: 'Organic Fertilizer' },
    { name: 'cta', title: 'Call to Action' },
    { name: 'faq', title: 'FAQs' },
    { name: 'contactCta', title: 'Contact CTA' },
  ],
  fields: [
    // --- Hero Section ---
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      group: 'hero',
      initialValue: 'Our Products',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      initialValue: 'Sustainable Solutions from Circular Bio-Manufacturing',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      group: 'hero',
      initialValue: 'Through innovative Black Soldier Fly technology, Grub Bio transforms organic waste into high-value products that support sustainable agriculture, animal nutrition, and industrial applications.',
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'Hero Video URL',
      type: 'url',
      group: 'hero',
      description: 'Direct MP4 link for hero background video.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Poster / Fallback Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // --- Protein Products Section ---
    defineField({
      name: 'proteinBadge',
      title: 'Protein Section Badge',
      type: 'string',
      group: 'protein',
      initialValue: 'Protein Products',
    }),
    defineField({
      name: 'proteinSectionTitle',
      title: 'Protein Section Title',
      type: 'string',
      group: 'protein',
      initialValue: 'Black Soldier Fly Larvae Meal',
    }),
    defineField({
      name: 'proteinSectionSubheadline',
      title: 'Protein Section Description',
      type: 'text',
      group: 'protein',
      initialValue: 'A sustainable, locally produced protein ingredient designed to support the growing demand for high-performance animal nutrition.',
    }),

    // Full-Fat BSF Meal
    defineField({
      name: 'fullFatTitle',
      title: 'Full-Fat Meal Title',
      type: 'string',
      group: 'protein',
      initialValue: 'Full-Fat BSF Larvae Meal',
    }),
    defineField({
      name: 'fullFatDescription',
      title: 'Full-Fat Meal Description',
      type: 'text',
      group: 'protein',
      initialValue: 'A nutrient-dense protein and energy source for poultry, aquaculture, and livestock feed formulations.',
    }),
    defineField({
      name: 'fullFatBenefits',
      title: 'Full-Fat Key Benefits',
      type: 'array',
      group: 'protein',
      of: [{ type: 'string' }],
      initialValue: [
        'High-quality protein with natural energy-rich lipids',
        'Supports growth performance and feed efficiency',
        'Sustainable alternative to imported protein ingredients',
        'Produced through a resource-efficient circular process',
      ],
    }),
    defineField({
      name: 'fullFatImage',
      title: 'Full-Fat Meal Image',
      type: 'image',
      group: 'protein',
      options: { hotspot: true },
    }),

    // Defatted BSF Meal
    defineField({
      name: 'defattedTitle',
      title: 'Defatted Meal Title',
      type: 'string',
      group: 'protein',
      initialValue: 'Defatted BSF Larvae Meal',
    }),
    defineField({
      name: 'defattedDescription',
      title: 'Defatted Meal Description',
      type: 'text',
      group: 'protein',
      initialValue: 'A concentrated protein ingredient developed for advanced feed formulations requiring higher protein inclusion levels.',
    }),
    defineField({
      name: 'defattedBenefits',
      title: 'Defatted Key Benefits',
      type: 'array',
      group: 'protein',
      of: [{ type: 'string' }],
      initialValue: [
        'High protein concentration for optimized feed performance',
        'Excellent digestibility and nutrient availability',
        'Suitable for poultry, aquaculture, and livestock applications',
        'Helps reduce dependence on conventional protein sources',
      ],
    }),
    defineField({
      name: 'defattedImage',
      title: 'Defatted Meal Image',
      type: 'image',
      group: 'protein',
      options: { hotspot: true },
    }),

    // --- Functional Lipids Section ---
    defineField({
      name: 'lipidsBadge',
      title: 'Lipids Badge',
      type: 'string',
      group: 'lipids',
      initialValue: 'Functional Lipids',
    }),
    defineField({
      name: 'lipidsTitle',
      title: 'Lipids Section Title',
      type: 'string',
      group: 'lipids',
      initialValue: 'BSF Oil',
    }),
    defineField({
      name: 'lipidsDescription',
      title: 'Lipids Section Description',
      type: 'text',
      group: 'lipids',
      initialValue: 'A renewable lipid source with applications across animal nutrition and industrial value chains.',
    }),
    defineField({
      name: 'lipidsBenefits',
      title: 'Functional Lipids Key Benefits',
      type: 'array',
      group: 'lipids',
      of: [{ type: 'string' }],
      initialValue: [
        'Improved energy utilization',
        'Supports gut health and animal resilience',
        'Enhances feed formulation flexibility',
        'Sustainable alternative to conventional feed oils',
      ],
    }),
    defineField({
      name: 'lipidsImage',
      title: 'Functional Lipids Image',
      type: 'image',
      group: 'lipids',
      options: { hotspot: true },
    }),
    defineField({
      name: 'lipidsFeatureTitle',
      title: 'Lipids Detail Headline',
      type: 'string',
      group: 'lipids',
      initialValue: 'Functional Lipids for Animal Nutrition',
    }),
    defineField({
      name: 'lipidsFeatureDescription',
      title: 'Lipids Detail Description',
      type: 'text',
      rows: 3,
      group: 'lipids',
      initialValue: 'Derived from Black Soldier Fly larvae, our lipids provide an energy-dense source of fatty acids with high lauric acid content, known for supporting gut health and metabolic efficiency in animals.',
    }),

    // --- Organic Fertilizer Section ---
    defineField({
      name: 'fertilizerBadge',
      title: 'Fertilizer Badge',
      type: 'string',
      group: 'fertilizer',
      initialValue: 'Organic Fertilizer',
    }),
    defineField({
      name: 'fertilizerTitle',
      title: 'Organic Bio-Fertiliser Title',
      type: 'string',
      group: 'fertilizer',
      initialValue: 'BSF Frass',
    }),
    defineField({
      name: 'fertilizerDescription',
      title: 'Organic Bio-Fertiliser Description',
      type: 'text',
      group: 'fertilizer',
      initialValue: 'A nutrient-rich organic fertiliser produced through the natural bioconversion process of Black Soldier Fly larvae.',
    }),
    defineField({
      name: 'fertilizerBenefits',
      title: 'Organic Bio-Fertiliser Key Benefits',
      type: 'array',
      group: 'fertilizer',
      of: [{ type: 'string' }],
      initialValue: [
        'Rich in organic matter and essential nutrients',
        'Improves soil structure and water retention',
        'Enhances microbial activity for healthier crops',
        '100% natural and eco-friendly soil conditioner',
      ],
    }),
    defineField({
      name: 'fertilizerImage',
      title: 'Organic Bio-Fertiliser Image',
      type: 'image',
      group: 'fertilizer',
      options: { hotspot: true },
    }),

    // --- Products CTA ---
    defineField({
      name: 'ctaBadge',
      title: 'CTA Badge',
      type: 'string',
      group: 'cta',
      initialValue: 'Partner With Us',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'cta',
      initialValue: 'Ready to Source Sustainable Insect Products?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      group: 'cta',
      initialValue: 'Contact our product specialist team to request product specifications, pricing, and sample batches for testing.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Contact Sales',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      group: 'cta',
      initialValue: '/contact',
    }),

    // --- FAQ Section ---
    defineField({
      name: 'faqTitle',
      title: 'FAQ Section Title',
      type: 'string',
      group: 'faq',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs List',
      type: 'array',
      group: 'faq',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),

    // --- Contact Us Section ---
    defineField({
      name: 'contactTitle',
      title: 'Contact Us Section Title',
      type: 'string',
      group: 'contactCta',
      initialValue: 'Get In Touch',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Us Section Description',
      type: 'text',
      group: 'contactCta',
      initialValue: 'We are eager to partner with feed producers, farmers, and distributors.',
    }),
    defineField({
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
      group: 'contactCta',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'contactButtonLink',
      title: 'Contact Button Link',
      type: 'string',
      group: 'contactCta',
      initialValue: '/contact',
    }),
  ],
})

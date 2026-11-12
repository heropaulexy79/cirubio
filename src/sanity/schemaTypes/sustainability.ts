import { defineField, defineType } from 'sanity'

export const sustainabilitySchema = defineType({
  name: 'sustainability',
  title: 'Sustainability Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Intro' },
    { name: 'circular', title: 'Circular Impact' },
    { name: 'climate', title: 'Climate Action' },
    { name: 'sdgs', title: 'SDGs' },
    { name: 'building', title: 'Building Impact' },
    { name: 'stayConnected', title: 'Stay Connected' },
  ],
  fields: [
    // --- Hero ---
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      group: 'hero',
      initialValue: 'Sustainability',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      initialValue: "Driving Measurable\nImpact Through Circular\nInnovation",
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'text',
      group: 'hero',
      initialValue: 'At Grub Bio, sustainability is embedded in every stage of our operations. Our technology enabled, bio-manufacturing solution transforms organic waste into valuable resources while generating measurable environmental, social, and economic benefits. By combining biotechnology, circular production systems, and digital sustainability intelligence, we help build more resilient food systems and a more sustainable future for Africa.',
    }),
    defineField({
      name: 'heroVideoUrl',
      title: 'Hero Video URL',
      type: 'url',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Cover / Poster Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // --- Intro ---
    defineField({
      name: 'introBadge',
      title: 'Intro Badge',
      type: 'string',
      group: 'intro',
      initialValue: 'ESG Leadership & Strategy',
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
      group: 'intro',
      initialValue: "Sustainability\nBacked by Data",
    }),
    defineField({
      name: 'introParagraph1',
      title: 'Intro Paragraph 1',
      type: 'text',
      group: 'intro',
      initialValue: 'We believe that sustainability should be measurable, transparent, and actionable. Our technology-enabled approach combines circular bio-manufacturing with real-time sustainability monitoring, allowing us to quantify sustainability outcomes across our operations and partnerships.',
    }),
    defineField({
      name: 'introParagraph2',
      title: 'Intro Paragraph 2',
      type: 'text',
      group: 'intro',
      initialValue: 'From carbon-emission avoidance and organic waste diversion to resource recovery and soil regeneration, we provide verifiable environmental data that supports corporate sustainability reporting, regulatory compliance, and climate action goals.',
    }),

    // --- Circular Economy Impact ---
    defineField({
      name: 'circularBadge',
      title: 'Circular Badge',
      type: 'string',
      group: 'circular',
      initialValue: 'Circular Economy Impact',
    }),
    defineField({
      name: 'circularTitle',
      title: 'Circular Title',
      type: 'string',
      group: 'circular',
      initialValue: "Transforming Waste\ninto Opportunity",
    }),
    defineField({
      name: 'circularParagraph1',
      title: 'Circular Paragraph 1',
      type: 'text',
      group: 'circular',
      initialValue: 'Organic waste is one of Africa’s most underutilised resources. Instead of allowing valuable nutrients to end up in landfills, we divert and upcycle organic waste into sustainable protein ingredients, functional oils, and organic fertilisers.',
    }),
    defineField({
      name: 'circularParagraph2',
      title: 'Circular Paragraph 2',
      type: 'text',
      group: 'circular',
      initialValue: 'Our technology enabled, bioconversion model helps businesses and communities reduce waste, improve resource efficiency, and accelerate the transition to a bio-circular economy.',
    }),
    defineField({
      name: 'circularBenefits',
      title: 'Circular Approach Points',
      type: 'array',
      group: 'circular',
      of: [{ type: 'string' }],
      initialValue: [
        'Recover organic waste from agricultural, industrial, and municipal sources',
        'Upcycle waste into valuable agricultural and industrial inputs',
        'Return nutrients back into productive use',
        'Reduce landfill dependency and environmental impact',
      ],
    }),
    defineField({
      name: 'circularImage',
      title: 'Circular Impact Image',
      type: 'image',
      group: 'circular',
      options: { hotspot: true },
    }),

    // --- Climate Action ---
    defineField({
      name: 'climateBadge',
      title: 'Climate Badge',
      type: 'string',
      group: 'climate',
      initialValue: 'Climate-Smart Agriculture',
    }),
    defineField({
      name: 'climateTitle',
      title: 'Climate Title',
      type: 'string',
      group: 'climate',
      initialValue: "Supporting Climate\nAction Through Bio-\nManufacturing",
    }),
    defineField({
      name: 'climateParagraph1',
      title: 'Climate Paragraph 1',
      type: 'text',
      group: 'climate',
      initialValue: 'Our solutions contribute to climate resilience by reducing emissions associated with organic waste decomposition and by providing sustainable alternatives to resource-intensive agricultural inputs.',
    }),
    defineField({
      name: 'climateParagraph2',
      title: 'Climate Paragraph 2',
      type: 'text',
      group: 'climate',
      initialValue: 'Through waste diversion and nutrient recovery, we help avoid methane emissions that would otherwise occur when organic waste is disposed of in landfills or unmanaged environments. Our products also support regenerative agricultural practices that improve soil health and reduce dependence on carbon-intensive inputs.',
    }),
    defineField({
      name: 'climatePoints',
      title: 'Climate Benefits',
      type: 'array',
      group: 'climate',
      of: [{ type: 'string' }],
      initialValue: [
        'Methane-emission avoidance through organic waste recovery',
        'Reduced reliance on imported protein ingredients',
        'Lower environmental footprint compared to conventional feed sources',
        'Improved soil health and regenerative agriculture outcomes',
        'Support for carbon-emission avoidance and resource efficiency',
      ],
    }),
    defineField({
      name: 'climateImage',
      title: 'Climate Action Image',
      type: 'image',
      group: 'climate',
      options: { hotspot: true },
    }),

    // --- SDG Section ---
    defineField({
      name: 'sdgBadge',
      title: 'SDG Badge',
      type: 'string',
      group: 'sdgs',
      initialValue: 'UN Sustainable Development Goals',
    }),
    defineField({
      name: 'sdgTitle',
      title: 'SDG Title',
      type: 'string',
      group: 'sdgs',
      initialValue: 'Advancing Global Goals Through Local Action',
    }),
    defineField({
      name: 'sdgDescription',
      title: 'SDG Description',
      type: 'text',
      group: 'sdgs',
      initialValue: 'Grub Bio directly supports key UN SDGs, creating measurable social, economic, and environmental impacts that drive inclusive circular growth.',
    }),
    defineField({
      name: 'sdgItems',
      title: 'SDG Details Cards',
      type: 'array',
      group: 'sdgs',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'SDG Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'image', title: 'SDG Icon / Badge', type: 'image' }),
          ],
        },
      ],
    }),

    // --- Building Impact ---
    defineField({
      name: 'buildingBadge',
      title: 'Building Impact Badge',
      type: 'string',
      group: 'building',
      initialValue: 'Long-term Impact',
    }),
    defineField({
      name: 'buildingTitle',
      title: 'Building Impact Title',
      type: 'string',
      group: 'building',
      initialValue: "Building Impact\nBeyond Products",
    }),
    defineField({
      name: 'buildingParagraph1',
      title: 'Building Paragraph',
      type: 'text',
      group: 'building',
      initialValue: 'Every tonne of organic waste recovered, every kilogram of sustainable protein produced, and every sustainability metric tracked contributes to a broader vision: building a resilient, low-carbon, and resource-efficient future for Africa through the principles of the bio-circular economy.',
    }),
    defineField({
      name: 'buildingButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'building',
      initialValue: 'Partner With Us to Drive Circular Impact',
    }),
    defineField({
      name: 'buildingButtonLink',
      title: 'Button Link',
      type: 'string',
      group: 'building',
      initialValue: '/contact',
    }),
    defineField({
      name: 'buildingImage',
      title: 'Building Impact Image',
      type: 'image',
      group: 'building',
      options: { hotspot: true },
    }),

    // --- Stay Connected ---
    defineField({
      name: 'stayConnectedTitle',
      title: 'Stay Connected Title',
      type: 'string',
      group: 'stayConnected',
      initialValue: "Stay connected with\nGrub Bio",
    }),
    defineField({
      name: 'stayConnectedDescription',
      title: 'Stay Connected Description',
      type: 'text',
      group: 'stayConnected',
      initialValue: "Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio's latest developments.",
    }),
  ],
})

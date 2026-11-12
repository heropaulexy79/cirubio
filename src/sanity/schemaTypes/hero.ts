import { defineField, defineType } from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Homepage Hero & Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'slides',
      title: 'Hero Slides',
      type: 'array',
      description: 'Add and reorder slides for the homepage hero carousel.',
      of: [
        {
          type: 'object',
          name: 'heroSlide',
          title: 'Hero Slide',
          fields: [
            defineField({
              name: 'title',
              title: 'Slide Headline',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subtext',
              title: 'Slide Subtext',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'videoUrl',
              title: 'Background Video URL',
              type: 'url',
              description: 'Direct MP4 video URL (e.g. from Cloudflare R2, CDN, or hosting).',
            }),
            defineField({
              name: 'fallbackImage',
              title: 'Fallback Poster Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'buttons',
              title: 'Slide Buttons',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'slideButton',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Button Label',
                      type: 'string',
                    }),
                    defineField({
                      name: 'href',
                      title: 'Button Link',
                      type: 'string',
                    }),
                    defineField({
                      name: 'variant',
                      title: 'Button Variant',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Solid Green', value: 'solid' },
                          { title: 'Outline White', value: 'outline' },
                        ],
                      },
                      initialValue: 'solid',
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtext',
            },
          },
        },
      ],
    }),
    // Backward-compatible individual slide 1 fields
    defineField({
      name: 'badgeText',
      title: 'Badge Text (Legacy)',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'headline',
      title: 'Main Headline (Legacy)',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-headline (Legacy)',
      type: 'text',
      hidden: true,
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text (Legacy)',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link (Legacy)',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text (Legacy)',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link (Legacy)',
      type: 'string',
      hidden: true,
    }),
  ],
})

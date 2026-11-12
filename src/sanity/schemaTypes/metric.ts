import { defineField, defineType } from 'sanity'

export const metricSchema = defineType({
  name: 'metric',
  title: 'Impact Metrics',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Metric Number / Value (e.g. 0.5, 90, 1000, 0)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix (e.g. T, %, x, +)',
      type: 'string',
    }),
    defineField({
      name: 'label',
      title: 'Metric Description / Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Secondary Subtext (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})

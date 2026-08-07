import { defineField, defineType } from 'sanity'

export const metricSchema = defineType({
  name: 'metric',
  title: 'Impact Metrics',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Metric Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Metric Value (e.g. 85%, 10K+)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext / Description',
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

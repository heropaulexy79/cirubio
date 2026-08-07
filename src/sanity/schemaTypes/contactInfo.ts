import { defineField, defineType } from 'sanity'

export const contactInfoSchema = defineType({
  name: 'contactInfo',
  title: 'Contact Details',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@grub.bio',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+1 (555) 019-2834',
    }),
    defineField({
      name: 'address',
      title: 'Office / Facility Address',
      type: 'text',
      initialValue: '100 BioTech Avenue, Innovation District, CA 94107',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      initialValue: 'Monday – Friday, 8:00 AM – 6:00 PM PST',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
    }),
  ],
})

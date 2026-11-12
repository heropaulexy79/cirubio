import { defineField, defineType } from 'sanity'

export const contactInfoSchema = defineType({
  name: 'contactInfo',
  title: 'Contact Page & Details',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'form', title: 'Contact Form Section' },
    { name: 'details', title: 'Direct Contact Details' },
    { name: 'help', title: 'How Can We Help' },
    { name: 'faq', title: 'Contact FAQs' },
  ],
  fields: [
    // --- Hero ---
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      group: 'hero',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      initialValue: "Let's Build a Circular Future Together",
    }),
    defineField({
      name: 'heroSubheadline1',
      title: 'Sub-headline Paragraph 1',
      type: 'text',
      group: 'hero',
      initialValue: "Whether you're looking to manage organic waste, source sustainable products, explore partnership opportunities, or learn more about our technology platform, we'd love to hear from you.",
    }),
    defineField({
      name: 'heroSubheadline2',
      title: 'Sub-headline Paragraph 2',
      type: 'text',
      group: 'hero',
      initialValue: 'Our team is ready to help you discover how Grub Bio can support your sustainability, circular economy, and climate objectives.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // --- Contact Form Section ---
    defineField({
      name: 'formBadge',
      title: 'Form Badge',
      type: 'string',
      group: 'form',
      initialValue: 'Contact Form',
    }),
    defineField({
      name: 'formTitle',
      title: 'Form Section Title',
      type: 'string',
      group: 'form',
      initialValue: 'Send Us a Message',
    }),
    defineField({
      name: 'formDescription',
      title: 'Form Description',
      type: 'text',
      group: 'form',
      initialValue: 'Have a question or project in mind? Complete the form below and a member of our team will get back to you as soon as possible.',
    }),
    defineField({
      name: 'formImage',
      title: 'Contact Form Side Image',
      type: 'image',
      group: 'form',
      options: { hotspot: true },
    }),

    // --- Direct Details ---
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'details',
      initialValue: 'info@grub.bio',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'details',
      initialValue: '+234 (0) 800 000 0000',
    }),
    defineField({
      name: 'address',
      title: 'Office / Facility Address',
      type: 'text',
      group: 'details',
      initialValue: 'Lagos, Nigeria & Regional Bio-Refining Hubs Across Africa',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      group: 'details',
      initialValue: 'Monday – Friday, 8:00 AM – 6:00 PM (WAT)',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'details',
      initialValue: 'https://www.linkedin.com/company/grub-bio',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
      group: 'details',
      initialValue: 'https://x.com/grub_bio',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'details',
      initialValue: 'https://www.instagram.com/grub.bio/',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'details',
      initialValue: 'https://www.facebook.com/share/1BbmfRzVxY/',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      group: 'details',
    }),

    // --- How Can We Help ---
    defineField({
      name: 'helpTitle',
      title: 'Help Section Title',
      type: 'string',
      group: 'help',
      initialValue: 'How Can We Help?',
    }),
    defineField({
      name: 'helpCards',
      title: 'Help Topic Cards',
      type: 'array',
      group: 'help',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Topic Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icon (Optional Image)', type: 'image' }),
          ],
        },
      ],
    }),

    // --- FAQs ---
    defineField({
      name: 'faqTitle',
      title: 'FAQ Title',
      type: 'string',
      group: 'faq',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
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
  ],
})

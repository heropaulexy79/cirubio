import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Grub.bio',
    }),
    defineField({
      name: 'tagline',
      title: 'Site Tagline',
      type: 'string',
      initialValue: 'Circular Economy & Insect Biotechnology',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Bio / Description',
      type: 'text',
      initialValue: 'Grub.bio transforms organic waste into sustainable protein and bio-fertilizer using innovative insect technology.',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 Grub.bio. All rights reserved.',
    }),
    defineField({
      name: 'announcementBanner',
      title: 'Top Announcement Banner (Optional)',
      type: 'string',
    }),
  ],
})

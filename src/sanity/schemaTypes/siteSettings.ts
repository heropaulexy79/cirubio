import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Global Footer',
  type: 'document',
  groups: [
    { name: 'general', title: 'General & Branding' },
    { name: 'newsletter', title: 'Newsletter Section' },
    { name: 'footer', title: 'Footer' },
    { name: 'socials', title: 'Social Links' },
  ],
  fields: [
    // --- General ---
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'general',
      initialValue: 'Grub Bio',
    }),
    defineField({
      name: 'tagline',
      title: 'Site Tagline',
      type: 'string',
      group: 'general',
      initialValue: 'Advancing Africa’s transition to a bio-circular economy',
    }),
    defineField({
      name: 'logo',
      title: 'Primary Logo',
      type: 'image',
      group: 'general',
    }),
    defineField({
      name: 'announcementBanner',
      title: 'Top Announcement Banner (Optional)',
      type: 'string',
      group: 'general',
    }),

    // --- Newsletter Section ---
    defineField({
      name: 'newsletterHeading',
      title: 'Newsletter Heading',
      type: 'string',
      group: 'newsletter',
      initialValue: 'Stay connected with Grub Bio',
    }),
    defineField({
      name: 'newsletterSubtext',
      title: 'Newsletter Subtext',
      type: 'text',
      rows: 3,
      group: 'newsletter',
      initialValue: "Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio's latest developments.",
    }),
    defineField({
      name: 'newsletterCommunityText',
      title: 'Newsletter Community Note',
      type: 'string',
      group: 'newsletter',
      initialValue: 'Join our community building a more resilient and sustainable future for Africa',
    }),

    // --- Footer ---
    defineField({
      name: 'footerText',
      title: 'Footer Bio / Newsletter Intro',
      type: 'text',
      rows: 2,
      group: 'footer',
      initialValue: 'Get the latest news and updates from Grub Bio.',
    }),
    defineField({
      name: 'newsletterPrivacyNote',
      title: 'Footer Privacy Notice',
      type: 'string',
      group: 'footer',
      initialValue: 'By subscribing you agree to our Privacy Policy and consent to receive updates from Grub Bio.',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      group: 'footer',
      initialValue: '© 2026 Grub Bio. All rights reserved.',
    }),
    defineField({
      name: 'privacyPolicyUrl',
      title: 'Privacy Policy URL',
      type: 'string',
      group: 'footer',
      initialValue: '#',
    }),
    defineField({
      name: 'termsUrl',
      title: 'Terms of Service URL',
      type: 'string',
      group: 'footer',
      initialValue: '#',
    }),
    defineField({
      name: 'cookiesUrl',
      title: 'Cookies Settings URL',
      type: 'string',
      group: 'footer',
      initialValue: '#',
    }),

    // --- Social Links ---
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'socials',
      initialValue: 'https://www.facebook.com/share/1BbmfRzVxY/',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'socials',
      initialValue: 'https://www.instagram.com/grub.bio/',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
      group: 'socials',
      initialValue: 'https://x.com/grub_bio',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'socials',
      initialValue: 'https://www.linkedin.com/company/grub-bio',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      group: 'socials',
    }),
  ],
})

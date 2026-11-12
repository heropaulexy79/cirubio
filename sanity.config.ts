import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'cirubio-cms',
  title: 'Grub Bio CMS Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            S.listItem()
              .title('🏠 Homepage Hero & Slider')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('🏡 Homepage Sections (Intro, Pillars, Tech)')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('ℹ️ About Us Page')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('📦 Products Page (Full Content)')
              .child(S.document().schemaType('productsPage').documentId('productsPage')),
            S.listItem()
              .title('🛠️ Services Page (Full Content)')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
            S.listItem()
              .title('🌱 Sustainability Page')
              .child(S.document().schemaType('sustainability').documentId('sustainability')),
            S.listItem()
              .title('💻 Our Technology Page')
              .child(S.document().schemaType('technology').documentId('technology')),
            S.listItem()
              .title('📞 Contact Page & Details')
              .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
            S.listItem()
              .title('⚙️ Site Settings, Footer & Socials')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('product').title('🗂️ Products Catalog (Cards)'),
            S.documentTypeListItem('service').title('🗂️ Services List'),
            S.documentTypeListItem('metric').title('📊 Impact Metrics'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})

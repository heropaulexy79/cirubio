import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'cirubio-cms',
  title: 'Cirubio CMS Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            S.listItem()
              .title('Homepage Hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('About Page')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Sustainability Page')
              .child(S.document().schemaType('sustainability').documentId('sustainability')),
            S.listItem()
              .title('Our Technology Page')
              .child(S.document().schemaType('technology').documentId('technology')),
            S.listItem()
              .title('Products Page Header')
              .child(S.document().schemaType('productsPage').documentId('productsPage')),
            S.listItem()
              .title('Services Page Header')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
            S.listItem()
              .title('Contact Details')
              .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
            S.listItem()
              .title('Site Settings & Footer')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('product').title('Products Catalog'),
            S.documentTypeListItem('service').title('Services List'),
            S.documentTypeListItem('metric').title('Impact Metrics'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})


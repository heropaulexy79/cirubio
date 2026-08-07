import { productSchema } from './product'
import { serviceSchema } from './service'
import { metricSchema } from './metric'
import { heroSchema } from './hero'
import { aboutSchema } from './about'
import { contactInfoSchema } from './contactInfo'
import { siteSettingsSchema } from './siteSettings'

export const schemaTypes = [
  heroSchema,
  aboutSchema,
  contactInfoSchema,
  siteSettingsSchema,
  productSchema,
  serviceSchema,
  metricSchema,
]


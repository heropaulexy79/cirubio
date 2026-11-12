import { productSchema } from './product'
import { serviceSchema } from './service'
import { metricSchema } from './metric'
import { heroSchema } from './hero'
import { homePageSchema } from './homePage'
import { aboutSchema } from './about'
import { contactInfoSchema } from './contactInfo'
import { siteSettingsSchema } from './siteSettings'
import { sustainabilitySchema } from './sustainability'
import { technologySchema } from './technology'
import { productsPageSchema } from './productsPage'
import { servicesPageSchema } from './servicesPage'

export const schemaTypes = [
  heroSchema,
  homePageSchema,
  aboutSchema,
  sustainabilitySchema,
  technologySchema,
  productsPageSchema,
  servicesPageSchema,
  contactInfoSchema,
  siteSettingsSchema,
  productSchema,
  serviceSchema,
  metricSchema,
]

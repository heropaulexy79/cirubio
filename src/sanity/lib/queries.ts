export const PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  title,
  "slug": slug.current,
  category,
  shortDescription,
  image,
  features,
  isFeatured
}`

export const SERVICES_QUERY = `*[_type == "service"]{
  _id,
  title,
  "slug": slug.current,
  tagline,
  description,
  iconName,
  highlights
}`

export const METRICS_QUERY = `*[_type == "metric"] | order(order asc){
  _id,
  label,
  value,
  subtext
}`

export const HERO_QUERY = `*[_type == "hero"][0]{
  badgeText,
  headline,
  subheadline,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink
}`

export const ABOUT_QUERY = `*[_type == "about"][0]{
  heroHeadline,
  heroSubheadline,
  missionTitle,
  missionText,
  visionTitle,
  visionText,
  founderQuote,
  founderName,
  founderTitle
}`

export const CONTACT_INFO_QUERY = `*[_type == "contactInfo"][0]{
  email,
  phone,
  address,
  workingHours,
  linkedinUrl,
  twitterUrl
}`

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  footerText,
  copyrightText,
  announcementBanner
}`

export const SUSTAINABILITY_QUERY = `*[_type == "sustainability"][0]{
  heroHeadline,
  heroSubheadline,
  heroImage,
  impactTitle,
  impactDescription,
  esgCommitment
}`

export const TECHNOLOGY_QUERY = `*[_type == "technology"][0]{
  heroHeadline,
  heroSubheadline,
  heroImage,
  processTitle,
  processDescription,
  saasTitle,
  saasDescription
}`

export const PRODUCTS_PAGE_QUERY = `*[_type == "productsPage"][0]{
  heroHeadline,
  heroSubheadline,
  heroImage,
  proteinSectionTitle,
  proteinSectionSubheadline,
  fullFatTitle,
  fullFatDescription,
  fullFatBenefits,
  fullFatImage,
  defattedTitle,
  defattedDescription,
  defattedBenefits,
  defattedImage,
  lipidsTitle,
  lipidsDescription,
  lipidsBenefits,
  lipidsImage,
  fertilizerTitle,
  fertilizerDescription,
  fertilizerBenefits,
  fertilizerImage
}`

export const SERVICES_PAGE_QUERY = `*[_type == "servicesPage"][0]{
  heroHeadline,
  heroSubheadline,
  heroImage,
  bioManufacturingTitle,
  bioManufacturingDescription,
  bioManufacturingFeatures,
  bioManufacturingImage,
  wasteSolutionsTitle,
  wasteSolutionsDescription,
  wasteSolutionsBenefits,
  wasteSolutionsImage,
  whoWeServeTitle,
  whoWeServeDescription,
  partnershipsTitle,
  partnershipsDescription,
  partnershipsImage
}`




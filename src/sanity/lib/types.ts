export interface SanityImageAssetRef {
  _type?: string
  asset?: {
    _ref?: string
    _type?: string
    url?: string
  }
  hotspot?: unknown
  crop?: unknown
}

export type SanityImageField = SanityImageAssetRef | string | null | undefined

export interface HeroSlideButton {
  text?: string
  href?: string
  variant?: 'solid' | 'outline' | string
}

export interface HeroSlide {
  title?: string
  subtext?: string
  videoUrl?: string
  fallbackImage?: SanityImageField
  buttons?: HeroSlideButton[]
}

export interface HeroDoc {
  slides?: HeroSlide[]
  badgeText?: string
  headline?: string
  subheadline?: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export interface PillarItem {
  title?: string
  description?: string
  icon?: SanityImageField
}

export interface ServiceCardItem {
  title?: string
  description?: string
  image?: SanityImageField
}

export interface HomePageDoc {
  introBadge?: string
  introHeadline?: string
  introDescription?: string
  introButtonText?: string
  introButtonLink?: string
  introImage?: SanityImageField
  wasteBadge?: string
  wasteHeadline?: string
  wasteDescription?: string
  wasteIcon?: SanityImageField
  featuresLabel?: string
  featuresTitle?: string
  featuresDescription?: string
  pillars?: PillarItem[]
  productsLabel?: string
  productsTitle?: string
  productsDescription?: string
  servicesLabel?: string
  servicesTitle?: string
  servicesDescription?: string
  servicesCards?: ServiceCardItem[]
  dataBadge?: string
  dataHeadline?: string
  dataDescription?: string
  dataButtonText?: string
  dataButtonLink?: string
  dataImage?: SanityImageField
  metricsBadge?: string
  metricsHeadline?: string
  metricsDescription?: string
}

export interface SdgGoalBadge {
  title?: string
  image?: SanityImageField
}

export interface AboutDoc {
  heroBadge?: string
  heroHeadline?: string
  heroSubheadline?: string
  heroImage?: SanityImageField
  introParagraph1?: string
  introParagraph2?: string
  bioTitle?: string
  bioIcon?: SanityImageField
  bioFacilityImage?: SanityImageField
  challengeTitle?: string
  challengeText1?: string
  challengeText2?: string
  solutionTitle?: string
  solutionText1?: string
  solutionText2?: string
  missionVisionBadge?: string
  missionVisionHeadline?: string
  missionTitle?: string
  missionText?: string
  visionTitle?: string
  visionText?: string
  founderTitle?: string
  founderQuote?: string
  founderName?: string
  founderImage?: SanityImageField
  circularBadge?: string
  circularTitle?: string
  circularDescription?: string
  circularImage?: SanityImageField
  circularFeatures?: string[]
  recoveryBadge?: string
  recoveryTitle?: string
  recoveryIcon?: SanityImageField
  recoveryImage?: SanityImageField
  recoveryIntro1?: string
  recoveryIntro2?: string
  recoveryPoints?: string[]
  recoveryConclusion?: string
  sdgBadge?: string
  sdgTitle?: string
  sdgDescription?: string
  sdgs?: SdgGoalBadge[]
}

export interface FaqItemDoc {
  question?: string
  answer?: string
}

export interface ProductsPageDoc {
  heroBadge?: string
  heroHeadline?: string
  heroSubheadline?: string
  heroVideoUrl?: string
  heroImage?: SanityImageField
  proteinBadge?: string
  proteinSectionTitle?: string
  proteinSectionSubheadline?: string
  fullFatTitle?: string
  fullFatDescription?: string
  fullFatBenefits?: string[]
  fullFatImage?: SanityImageField
  defattedTitle?: string
  defattedDescription?: string
  defattedBenefits?: string[]
  defattedImage?: SanityImageField
  lipidsBadge?: string
  lipidsTitle?: string
  lipidsDescription?: string
  lipidsFeatureTitle?: string
  lipidsFeatureDescription?: string
  lipidsBenefits?: string[]
  lipidsImage?: SanityImageField
  fertilizerBadge?: string
  fertilizerTitle?: string
  fertilizerDescription?: string
  fertilizerBenefits?: string[]
  fertilizerImage?: SanityImageField
  ctaBadge?: string
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  faqTitle?: string
  faqs?: FaqItemDoc[]
  contactTitle?: string
  contactDescription?: string
  contactButtonText?: string
  contactButtonLink?: string
}

export interface WhoWeServeCardDoc {
  title?: string
  description?: string
  icon?: SanityImageField
}

export interface ServicesPageDoc {
  heroBadge?: string
  heroHeadline?: string
  heroSubheadline?: string
  heroVideoUrl?: string
  heroImage?: SanityImageField
  bioManufacturingTitle?: string
  bioManufacturingDescription?: string
  bioManufacturingSubdescription?: string
  bioManufacturingBenefits?: string
  bioManufacturingImage?: SanityImageField
  wasteSolutionsTitle?: string
  wasteSolutionsDescription?: string
  wasteSolutionsBenefits?: string[]
  wasteSolutionsImage?: SanityImageField
  whoWeServeBadge?: string
  whoWeServeTitle?: string
  whoWeServeDescription?: string
  whoWeServeCards?: WhoWeServeCardDoc[]
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  partnershipsBadge?: string
  partnershipsTitle?: string
  partnershipsDescription?: string
  partnershipsPoints?: string[]
  partnershipsImage?: SanityImageField
  finalCtaTitle?: string
  finalCtaDescription?: string
  finalCtaButtonText?: string
  finalCtaButtonLink?: string
}

export interface SdgItemDoc {
  title?: string
  description?: string
  image?: SanityImageField
}

export interface SustainabilityDoc {
  heroBadge?: string
  heroHeadline?: string
  heroSubheadline?: string
  heroVideoUrl?: string
  heroImage?: SanityImageField
  introBadge?: string
  introTitle?: string
  introParagraph1?: string
  introParagraph2?: string
  circularBadge?: string
  circularTitle?: string
  circularParagraph1?: string
  circularParagraph2?: string
  circularBenefits?: string[]
  circularImage?: SanityImageField
  climateBadge?: string
  climateTitle?: string
  climateParagraph1?: string
  climateParagraph2?: string
  climatePoints?: string[]
  climateImage?: SanityImageField
  sdgBadge?: string
  sdgTitle?: string
  sdgDescription?: string
  sdgItems?: SdgItemDoc[]
  buildingBadge?: string
  buildingTitle?: string
  buildingParagraph1?: string
  buildingButtonText?: string
  buildingButtonLink?: string
  buildingImage?: SanityImageField
  stayConnectedTitle?: string
  stayConnectedDescription?: string
}

export interface TechnologyDoc {
  heroBadge?: string
  heroHeadline?: string
  heroSubheadline?: string
  heroImage?: SanityImageField
  rearingBadge?: string
  rearingTitle?: string
  rearingParagraph1?: string
  rearingParagraph2?: string
  rearingCapabilities?: string[]
  rearingImage?: SanityImageField
  dashboardBadge?: string
  dashboardTitle?: string
  dashboardParagraph1?: string
  dashboardParagraph2?: string
  dashboardFeatures?: string[]
  dashboardImage?: SanityImageField
  esgBadge?: string
  esgTitle?: string
  esgParagraph1?: string
  esgParagraph2?: string
  esgCapabilities?: string[]
  esgImage?: SanityImageField
  partnerBadge?: string
  partnerTitle?: string
  partnerParagraph1?: string
  partnerParagraph2?: string
  partnerDemoText?: string
  partnerDemoLink?: string
  partnerSubtitle?: string
  partnerLoginText?: string
  partnerLoginLink?: string
}

export interface HelpCardDoc {
  title?: string
  description?: string
  icon?: SanityImageField
}

export interface ContactInfoDoc {
  heroBadge?: string
  heroHeadline?: string
  heroSubheadline1?: string
  heroSubheadline2?: string
  heroImage?: SanityImageField
  formBadge?: string
  formTitle?: string
  formDescription?: string
  formImage?: SanityImageField
  email?: string
  phone?: string
  address?: string
  workingHours?: string
  linkedinUrl?: string
  twitterUrl?: string
  instagramUrl?: string
  facebookUrl?: string
  youtubeUrl?: string
  helpTitle?: string
  helpCards?: HelpCardDoc[]
  faqTitle?: string
  faqs?: FaqItemDoc[]
}

export interface SiteSettingsDoc {
  siteName?: string
  tagline?: string
  logo?: SanityImageField
  footerText?: string
  newsletterPrivacyNote?: string
  copyrightText?: string
  privacyPolicyUrl?: string
  termsUrl?: string
  cookiesUrl?: string
  announcementBanner?: string
  newsletterHeading?: string
  newsletterSubtext?: string
  newsletterCommunityText?: string
  facebookUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  youtubeUrl?: string
}

export interface ProductDoc {
  _id?: string
  title?: string
  slug?: string
  category?: string
  shortDescription?: string
  image?: SanityImageField
  features?: string[]
  isFeatured?: boolean
}

export interface ServiceDoc {
  _id?: string
  title?: string
  slug?: string
  tagline?: string
  description?: string
  image?: SanityImageField
  iconName?: string
  highlights?: string[]
}

export interface MetricDoc {
  _id?: string
  label?: string
  value?: string
  suffix?: string
  subtext?: string
}


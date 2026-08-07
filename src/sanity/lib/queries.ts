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

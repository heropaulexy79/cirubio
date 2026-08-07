import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-project-id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source)
}

export async function fetchSanityData<T>(query: string, fallbackData: T): Promise<T> {
  // If no real project ID is set, return default fallback data immediately
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId === 'placeholder-project-id') {
    return fallbackData
  }

  try {
    const data = await sanityClient.fetch<T>(query, {}, { next: { revalidate: 0 } })
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return fallbackData
    }
    return data
  } catch (error) {
    console.warn('Sanity fetch fallback active:', error)
    return fallbackData
  }
}

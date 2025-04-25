"use server"

import { cache } from "react"
import { revalidatePath } from "next/cache"

// Cache the fetch request to prevent redundant calls
export const getProperties = cache(async (page = 1, filters = {}) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    ...(filters as Record<string, string>),
  })

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/properties?${queryParams}`, {
    // Next.js 15 no longer caches fetch requests by default
    // We need to explicitly set the cache option if we want caching
    next: {
      revalidate: 60, // Cache for 60 seconds
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch properties")
  }

  return response.json()
})

export async function likeProperty(id: number) {
  // In a real app, this would update a database
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Revalidate the properties data
  revalidatePath("/")

  return { success: true }
}

export async function searchProperties(formData: FormData) {
  const location = formData.get("location") as string
  const propertyType = formData.get("propertyType") as string
  const priceRange = formData.get("priceRange") as string

  // Parse price range
  let minPrice, maxPrice
  if (priceRange) {
    const [min, max] = priceRange.split("-")
    minPrice = min
    maxPrice = max
  }

  // Build filters object
  const filters: Record<string, string> = {}
  if (location) filters.location = location
  if (propertyType) filters.type = propertyType
  if (minPrice) filters.minPrice = minPrice
  if (maxPrice) filters.maxPrice = maxPrice

  // In a real app, this would redirect to search results
  // For now, we'll just revalidate the home page
  revalidatePath("/")

  return { success: true, filters }
}

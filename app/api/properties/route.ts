import { type NextRequest, NextResponse } from "next/server"

// Simulated database of properties
const properties = Array(30)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    title: "Horizon Estate",
    location:
      i % 3 === 0
        ? "123 Coastal Drive, Beachside"
        : i % 3 === 1
          ? "456 Mountain View, Highland"
          : "789 Downtown Ave, City Center",
    type: i % 3 === 0 ? "Beachfront apartment" : i % 3 === 1 ? "Mountain villa" : "Downtown apartment",
    price: 150000 + i * 25000,
    beds: 2 + (i % 3),
    baths: 1 + (i % 2),
    sqft: 1200 + i * 100,
    likes: Math.floor(Math.random() * 20),
    views: Math.floor(Math.random() * 100) + 50,
    image: i % 3 === 0 ? "/images/property-1.jpg" : i % 3 === 1 ? "/images/property-2.jpg" : "/images/property-3.jpg",
  }))

export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "12")
  const location = searchParams.get("location")
  const type = searchParams.get("type")
  const minPrice = searchParams.get("minPrice") ? Number.parseInt(searchParams.get("minPrice")!) : undefined
  const maxPrice = searchParams.get("maxPrice") ? Number.parseInt(searchParams.get("maxPrice")!) : undefined

  // Filter properties based on query parameters
  let filteredProperties = [...properties]

  if (location) {
    filteredProperties = filteredProperties.filter((p) => p.location.toLowerCase().includes(location.toLowerCase()))
  }

  if (type) {
    filteredProperties = filteredProperties.filter((p) => p.type.toLowerCase().includes(type.toLowerCase()))
  }

  if (minPrice !== undefined) {
    filteredProperties = filteredProperties.filter((p) => p.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filteredProperties = filteredProperties.filter((p) => p.price <= maxPrice)
  }

  // Paginate results
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProperties.length / limit)

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Return response with appropriate cache headers
  return NextResponse.json(
    {
      properties: paginatedProperties,
      totalPages,
      currentPage: page,
      totalProperties: filteredProperties.length,
    },
    {
      headers: {
        // Next.js 15 updated caching semantics - explicitly set cache control
        "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
      },
    },
  )
}

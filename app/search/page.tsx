import { Suspense } from "react"
import { use } from "react"
import { getProperties } from "@/app/actions"
import { PropertyGrid } from "@/components/property-grid"
import { SearchBar } from "@/components/search-bar"
import { PropertySkeleton } from "@/components/property-skeleton"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Extract search parameters
  const location = searchParams.location as string | undefined
  const type = searchParams.type as string | undefined
  const minPrice = searchParams.minPrice as string | undefined
  const maxPrice = searchParams.maxPrice as string | undefined
  const page = searchParams.page ? Number.parseInt(searchParams.page as string) : 1

  // Build filters object
  const filters: Record<string, string> = {}
  if (location) filters.location = location
  if (type) filters.type = type
  if (minPrice) filters.minPrice = minPrice
  if (maxPrice) filters.maxPrice = maxPrice

  // Use the `use` hook to handle the Promise
  const propertiesData = use(getProperties(page, filters))

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Search Results</h1>
          <SearchBar />
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              {propertiesData.totalProperties} properties found
              {location ? ` in "${location}"` : ""}
            </h2>
          </div>

          <Suspense fallback={<PropertySkeleton count={12} />}>
            <PropertyGrid initialProperties={propertiesData.properties} />
          </Suspense>

          {/* Pagination */}
          {propertiesData.totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                {Array.from({ length: propertiesData.totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <a
                    key={pageNum}
                    href={`/search?${new URLSearchParams({
                      ...filters,
                      page: pageNum.toString(),
                    })}`}
                    className={`px-4 py-2 rounded ${
                      pageNum === page ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

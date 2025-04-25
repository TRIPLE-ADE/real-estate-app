import { Suspense } from "react"
import { cache } from "react"
import { PropertyGrid } from "@/components/property-grid"
import { SearchBar } from "@/components/search-bar"
import { PropertyCategories } from "@/components/property-categories"
import { PropertySkeleton } from "@/components/property-skeleton"
import { PageTransition, FadeIn, SlideUp, ScrollAnimation } from "@/components/animations/motion"

// Cache the fetch request to prevent redundant calls
const fetchProperties = cache(async (page = 1) => {
  // In a real app, this would be an API call
  // Using a delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    properties: Array(12)
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
        isLiked: false,
        image:
          i % 3 === 0 ? "/images/property-1.jpg" : i % 3 === 1 ? "/images/property-2.jpg" : "/images/property-3.jpg",
      })),
    totalPages: 3,
  }
})

export default async function Home() {
  const { properties } = await fetchProperties()

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url(/images/hero-bg.jpg)",
              backgroundPosition: "center 40%",
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0"></div>
          </div>

          <div className="container mx-auto px-4 z-10 text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">FIND YOUR HOME AWAY FROM HOME</h1>
            </FadeIn>

            <SlideUp delay={0.4}>
              <SearchBar />
            </SlideUp>
          </div>
        </section>

        {/* Property Categories */}
        <ScrollAnimation>
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <PropertyCategories />
            </div>
          </section>
        </ScrollAnimation>

        {/* Property Listings */}
        <section className="pt-8 bg-gray-50 pb-20">
          <div className="container mx-auto px-4">
            <Suspense fallback={<PropertySkeleton count={12} />}>
              <ScrollAnimation>
                <PropertyGrid initialProperties={properties} />
              </ScrollAnimation>
            </Suspense>

            <ScrollAnimation>
              <div className="mt-12 text-center">
                <button className="px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Explore more homes for sale
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}

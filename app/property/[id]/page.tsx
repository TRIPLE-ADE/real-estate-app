import { notFound } from "next/navigation"
import { cache } from "react"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyDescription } from "@/components/property-description"
import { PropertyFeatures } from "@/components/property-features"
import { PropertyPricing } from "@/components/property-pricing"
import { PropertyRules } from "@/components/property-rules"
import { PropertyRatings } from "@/components/property-ratings"
import { PropertyReviews } from "@/components/property-reviews"
import { PropertyLocation } from "@/components/property-location"
import { PropertyHost } from "@/components/property-host"
import { PropertySafety } from "@/components/property-safety"
import { PropertyCancellation } from "@/components/property-cancellation"
import { ShareButton } from "@/components/share-button"
import { InterestedButton } from "@/components/interested-button"
import { PageTransition, FadeIn, SlideUp, SlideInRight, ScrollAnimation } from "@/components/animations/motion"

// Cache the fetch request to prevent redundant calls
const getProperty = cache(async (id: string) => {
  // In a real app, this would be an API call
  // Using a delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Simulate property data
  const propertyId = Number.parseInt(id)
  if (isNaN(propertyId) || propertyId < 1 || propertyId > 30) {
    return null
  }

  return {
    id: propertyId,
    title: "Harrow Estate, Offa, Kwara State, Nigeria",
    location: "Offa, Kwara State",
    type: "4-Bedroom apartment",
    price: 165000,
    priceUnit: "week",
    beds: 4,
    baths: 3,
    sqft: 1800,
    reviews: 5,
    reviewsCount: 5,
    ratings: {
      overall: 4.8,
      cleanliness: 5.0,
      accuracy: 4.7,
      communication: 4.8,
      location: 4.6,
      value: 4.9,
    },
    description:
      "This apartment is located in Offa, Kwara State with a capacity of 4 bedrooms. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    longDescription:
      "This apartment is located in Offa, Kwara State with a capacity of 4 bedrooms. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    features: [
      { name: "Wi-Fi", icon: "wifi" },
      { name: "TV", icon: "tv" },
      { name: "Parking within premises", icon: "parking" },
      { name: "Air condition", icon: "air-condition" },
      { name: "Fire alarm", icon: "fire-alarm" },
      { name: "Fire extinguisher", icon: "fire-extinguisher" },
      { name: "24hrs Electricity", icon: "electricity" },
      { name: "Security Cameras", icon: "security" },
    ],
    additionalFeatures: [
      "48 hrs cleaning",
      "24 / 7 light with Backup Generator (AC works at all times)",
      "Fast Unlimited internet",
      "Smart TV",
      "Fridge",
      "Decoder subscription",
      "Clean treated water",
      "Fresh towels & tissue paper",
    ],
    kitchen: [
      "Microwave",
      "Blender",
      "Electric Kettle",
      "Gas cooker with cookware and silverware",
      "Glass Tumblers and wine glasses",
    ],
    additionalInformation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut vestibulum augue. Integer maximus aliquam tortor sit amet aliquet. Pellentesque scelerisque elit quam, nec ultrices purus sodales id. Aliquam euismod sem lorem, et porttitor velit eleifend et. Etiam venenatis sem vestibulum ipsum pellentesque, ultrices dictum lacus faucibus. Nunc molestie tortor ac nulla tincidunt, et commodo urna condimentum. In cursus justo ut augue aliquam consequat. Nulla congue ullamcorper justo. Pellentesque fermentum massa nunc, vel sodales risus placerat eget. In ullamcorper, tortor quis rhoncus porttitor, sem sem iaculis dui, non euismod nibh quam eget turpis. Donec mollis sapien non quam ultrices, vitae porttitor erat consectetur. Nullam consequat commodo quam sit amet vestibulum. Cras maximus efficitur sapien. Aliquam imperdiet ex eu mi accumsan, in rhoncus quam varius. Nulla venenatis tristique posuere. Morbi at quam a lectus vulputate gravida.",
    notes: ["Note 1", "Note 2"],
    pricing: {
      price: 165000,
      discount: 0,
      cleaningFee: 50000,
      serviceFee: 25000,
      total: 255000,
    },
    checkIn: {
      from: "12:00 PM",
      to: "12:00 AM",
    },
    checkOut: {
      time: "12:00 PM",
    },
    rules: [
      { title: "Check-in", description: "Between 1:00 PM - 12 AM" },
      { title: "Check-out", description: "Before 12:00 PM" },
      { title: "Guests", description: "3 guests max" },
      { title: "Pets", description: "No loud partying is allowed" },
    ],
    host: {
      name: "Jarus Noma",
      image: "/images/host.jpg",
      joinedDate: "2 months ago",
      responseRate: "92%",
      responseTime: "within one hour",
      about:
        "Jarus Noma (lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat).",
      verified: true,
      superhost: true,
      identityVerified: true,
      bornIn: "the 90s",
      speaks: ["English", "Yoruba and Hausa"],
    },
    reviewsList: [
      {
        id: 1,
        name: "John",
        image: "/images/reviewer-1.jpg",
        date: "3 weeks ago",
        rating: 5,
        stay: "Stayed 1 week",
        joinedDate: "Recently joined",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...",
      },
      {
        id: 2,
        name: "John",
        image: "/images/reviewer-2.jpg",
        date: "3 weeks ago",
        rating: 3,
        stay: "Stayed 1 week",
        joinedDate: "Joined 2 months ago",
        comment: "Lorem ipsum dolor sit amet, consectetur.",
      },
      {
        id: 3,
        name: "John",
        image: "/images/reviewer-3.jpg",
        date: "3 weeks ago",
        rating: 4,
        stay: "Stayed 1 week",
        joinedDate: "Joined 5 years ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
      {
        id: 4,
        name: "John",
        image: "/images/reviewer-4.jpg",
        date: "3 weeks ago",
        rating: 2,
        stay: "Stayed 1 week",
        joinedDate: "Recently joined",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...",
      },
    ],
    images: [
      "/images/property-1.jpg",
      "/images/property-2.jpg",
      "/images/property-3.jpg",
      "/images/property-4.jpg",
      "/images/property-5.jpg",
    ],
    safety: {
      securityCameras: "not reported",
      smokeAlarm: "not reported",
    },
    cancellation: "Flexible",
  }
})

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id)

  if (!property) {
    notFound()
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-white pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Property Header */}
          <FadeIn>
            <div className="py-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{property.title}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center mb-2 sm:mb-0">
                  <p className="text-gray-700">{property.type}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <ShareButton />
                  <InterestedButton />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.585l-7.07 3.707 1.35-7.857L.587 7.292l7.886-1.146L10 0l2.527 6.146 7.886 1.146-5.693 5.543 1.35 7.857z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-gray-700">{property.reviews} reviews</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Property Gallery */}
          <SlideUp delay={0.2}>
            <PropertyGallery images={property.images} />
          </SlideUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              {/* Property Description */}
              <ScrollAnimation>
                <PropertyDescription
                  description={property.description}
                  longDescription={property.longDescription}
                  location={property.location}
                  beds={property.beds}
                  additionalFeatures={property.additionalFeatures}
                  kitchen={property.kitchen}
                  additionalInformation={property.additionalInformation}
                  notes={property.notes}
                />
              </ScrollAnimation>

              {/* Property Features */}
              <ScrollAnimation>
                <PropertyFeatures features={property.features} />
              </ScrollAnimation>

              {/* Property Rules */}
              <ScrollAnimation>
                <PropertyRules rules={property.rules} />
              </ScrollAnimation>

              {/* Property Ratings & Reviews */}
              <ScrollAnimation>
                <PropertyRatings ratings={property.ratings} />
              </ScrollAnimation>

              <ScrollAnimation>
                <PropertyReviews reviews={property.reviewsList} />
              </ScrollAnimation>

              {/* Property Location */}
              <ScrollAnimation>
                <PropertyLocation location={property.title} />
              </ScrollAnimation>

              {/* Property Host */}
              <ScrollAnimation>
                <PropertyHost host={property.host} />
              </ScrollAnimation>

              {/* Property Safety & Cancellation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <ScrollAnimation>
                  <PropertySafety safety={property.safety} />
                </ScrollAnimation>

                <ScrollAnimation>
                  <PropertyCancellation policy={property.cancellation} />
                </ScrollAnimation>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Property Pricing */}
              <SlideInRight delay={0.3} className="sticky top-6">
                <PropertyPricing
                  price={property.price}
                  priceUnit={property.priceUnit}
                  pricing={property.pricing}
                  checkIn={property.checkIn}
                  checkOut={property.checkOut}
                />
              </SlideInRight>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

import Image from "next/image"
import { StaggerChildren, StaggerItem } from "@/components/animations/motion"

interface Review {
  id: number
  name: string
  image: string
  date: string
  rating: number
  stay: string
  joinedDate: string
  comment: string
}

interface PropertyReviewsProps {
  reviews: Review[]
}

export function PropertyReviews({ reviews }: PropertyReviewsProps) {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 15.585l-7.07 3.707 1.35-7.857L.587 7.292l7.886-1.146L10 0l2.527 6.146 7.886 1.146-5.693 5.543 1.35 7.857z"
            clipRule="evenodd"
          />
        </svg>
      ))
  }

  return (
    <div className="mb-6">
      <StaggerChildren staggerDelay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews &&
            reviews.map((review) => (
              <StaggerItem key={review.id}>
                <div className="border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={review.image || "/placeholder.svg?height=48&width=48"}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.joinedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-600">• {review.date}</span>
                    <span className="text-sm text-gray-600 ml-2">• {review.stay}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </StaggerItem>
            ))}
        </div>
      </StaggerChildren>
      <button className="text-gray-600 font-medium mt-6 hover:underline transition-colors duration-300">
        View more reviews
      </button>
    </div>
  )
}

interface Ratings {
  overall: number
  cleanliness: number
  accuracy: number
  communication: number
  location: number
  value: number
}

interface PropertyRatingsProps {
  ratings: Ratings
}

export function PropertyRatings({ ratings }: PropertyRatingsProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Ratings and Reviews</h2>

      <div className="flex items-center mb-6">
        <div className="flex items-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 15.585l-7.07 3.707 1.35-7.857L.587 7.292l7.886-1.146L10 0l2.527 6.146 7.886 1.146-5.693 5.543 1.35 7.857z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-lg font-semibold">{ratings.overall}</span>
        <span className="text-gray-600 ml-2">Overall rating</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Cleanliness</span>
          <div className="flex items-center">
            <span className="mr-2">{ratings.cleanliness}</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: `${(ratings.cleanliness / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700">Accuracy</span>
          <div className="flex items-center">
            <span className="mr-2">{ratings.accuracy}</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: `${(ratings.accuracy / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700">Communication</span>
          <div className="flex items-center">
            <span className="mr-2">{ratings.communication}</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: `${(ratings.communication / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700">Location</span>
          <div className="flex items-center">
            <span className="mr-2">{ratings.location}</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: `${(ratings.location / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700">Value</span>
          <div className="flex items-center">
            <span className="mr-2">{ratings.value}</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: `${(ratings.value / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Rating distribution</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-2 mr-2">5</span>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-2 mr-2">4</span>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: "20%" }}></div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-2 mr-2">3</span>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: "5%" }}></div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-2 mr-2">2</span>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: "3%" }}></div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-2 mr-2">1</span>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: "2%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

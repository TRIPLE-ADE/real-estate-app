import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Calendar } from "lucide-react"

interface Host {
  name: string
  image: string
  joinedDate: string
  responseRate: string
  responseTime: string
  about: string
  verified: boolean
  superhost: boolean
  identityVerified: boolean
  bornIn: string
  speaks: string[]
}

interface PropertyHostProps {
  host: Host
}

export function PropertyHost({ host }: PropertyHostProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Host Details</h2>
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
              <Image
                src={host.image || "/placeholder.svg?height=64&width=64"}
                alt={host.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div>
              <h3 className="font-medium">{host.name}</h3>
              <p className="text-sm text-gray-600">Verified</p>
              <div className="flex items-center mt-1">
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
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-sm">Identity verified</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-sm">Joined {host.joinedDate}</span>
            </div>
          </div>
          <button className="text-gray-600 font-medium mt-4 hover:underline">Show more</button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">About Host</h2>
          <p className="text-gray-700 mb-4">{host.about}</p>
          <div className="space-y-3 mb-4">
            <div>
              <span className="font-medium">Born in:</span> {host.bornIn}
            </div>
            <div>
              <span className="font-medium">Speaks:</span> {host.speaks.join(", ")}
            </div>
            <div>
              <span className="font-medium">Response rate:</span> {host.responseRate}
            </div>
            <div>
              <span className="font-medium">Response time:</span> {host.responseTime}
            </div>
          </div>
          <Button className="w-full">Chat Host</Button>
        </div>
      </div>
    </div>
  )
}

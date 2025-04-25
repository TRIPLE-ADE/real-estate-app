import Image from "next/image"

interface PropertyLocationProps {
  location: string
}

export function PropertyLocation({ location }: PropertyLocationProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Home location</h2>
      <p className="text-gray-700 mb-4">Exact location given after booking (Google maps location)</p>
      <div className="relative h-[300px] rounded-lg overflow-hidden">
        <Image
          src="/images/map.jpg"
          alt={`Map of ${location}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    </div>
  )
}

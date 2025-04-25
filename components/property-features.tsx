import { Wifi, Tv, Car, Wind, Bell, FlameIcon as Fire, Zap, Camera } from "lucide-react"

interface Feature {
  name: string
  icon: string
}

interface PropertyFeaturesProps {
  features: Feature[]
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "wifi":
        return <Wifi className="h-5 w-5 text-gray-600" />
      case "tv":
        return <Tv className="h-5 w-5 text-gray-600" />
      case "parking":
        return <Car className="h-5 w-5 text-gray-600" />
      case "air-condition":
        return <Wind className="h-5 w-5 text-gray-600" />
      case "fire-alarm":
        return <Bell className="h-5 w-5 text-gray-600" />
      case "fire-extinguisher":
        return <Fire className="h-5 w-5 text-gray-600" />
      case "electricity":
        return <Zap className="h-5 w-5 text-gray-600" />
      case "security":
        return <Camera className="h-5 w-5 text-gray-600" />
      default:
        return <Wifi className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">House Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-3">{getIcon(feature.icon)}</div>
            <span className="text-gray-700">{feature.name}</span>
          </div>
        ))}
      </div>
      <button className="text-gray-600 font-medium mt-6 hover:underline">Show others</button>
    </div>
  )
}

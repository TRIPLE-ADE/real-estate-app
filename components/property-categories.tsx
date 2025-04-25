import { Building, Home, Landmark, Mountain, Palmtree, BuildingIcon as Buildings } from "lucide-react"
import { StaggerChildren, StaggerItem } from "@/components/animations/motion"

const categories = [
  { name: "Houses", icon: Home },
  { name: "Apartments", icon: Building },
  { name: "Condos", icon: Buildings },
  { name: "Villas", icon: Landmark },
  { name: "Mountain", icon: Mountain },
  { name: "Beach", icon: Palmtree },
]

export function PropertyCategories() {
  return (
    <StaggerChildren staggerDelay={0.05}>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <StaggerItem key={category.name}>
            <div className="flex flex-col items-center justify-center p-4 cursor-pointer transition-transform duration-300 hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <category.icon className="h-6 w-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-700">{category.name}</span>
            </div>
          </StaggerItem>
        ))}
      </div>
    </StaggerChildren>
  )
}

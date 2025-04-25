"use client"

import { useState, useOptimistic, startTransition } from "react"
import { PropertyCard } from "@/components/property-card"
import { useToast } from "@/hooks/use-toast"
import { StaggerChildren, StaggerItem } from "@/components/animations/motion"

type Property = {
  id: number
  title: string
  location: string
  type: string
  price: number
  beds: number
  baths: number
  sqft: number
  likes: number
  views: number
  image: string
  isLiked: boolean
}

interface PropertyGridProps {
  initialProperties: Property[]
}

export function PropertyGrid({ initialProperties }: PropertyGridProps) {
  // Initialize properties with isLiked set to false for all properties
  const initialPropertiesWithLikeState = initialProperties.map((property) => ({
    ...property,
    isLiked: false,
  }))

  const [properties, setProperties] = useState(initialPropertiesWithLikeState)
  const { toast } = useToast()

  // Use optimistic updates for likes
  const [optimisticProperties, addOptimisticProperty] = useOptimistic(properties, (state, newProperty: Property) => {
    return state.map((property) => (property.id === newProperty.id ? newProperty : property))
  })

  const handleLike = async (id: number) => {
    // Find the property
    const property = properties.find((p) => p.id === id)
    if (!property) return

    // Toggle the liked state
    const newIsLiked = !property.isLiked

    // Create optimistic update
    const optimisticProperty = {
      ...property,
      isLiked: newIsLiked,
      // Increment or decrement the likes count based on the new liked state
      likes: newIsLiked ? property.likes + 1 : Math.max(0, property.likes - 1),
    }

    // Wrap in startTransition to avoid the error
    startTransition(() => {
      // Apply optimistic update
      addOptimisticProperty(optimisticProperty)
    })

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Update the actual state
      setProperties((prev) =>
        prev.map((p) =>
          p.id === id
            ? {
                ...p,
                isLiked: newIsLiked,
                likes: newIsLiked ? p.likes + 1 : Math.max(0, p.likes - 1),
              }
            : p,
        ),
      )

      toast({
        title: newIsLiked ? "Property liked!" : "Property unliked",
        description: newIsLiked
          ? "This property has been added to your favorites."
          : "This property has been removed from your favorites.",
      })
    } catch (error) {
      // Revert on error (handled by useOptimistic)
      toast({
        title: "Error",
        description: `Failed to ${newIsLiked ? "like" : "unlike"} property. Please try again.`,
        variant: "destructive",
      })
    }
  }

  return (
    <StaggerChildren staggerDelay={0.1}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {optimisticProperties.map((property) => (
          <StaggerItem key={property.id}>
            <PropertyCard property={property} onLike={() => handleLike(property.id)} />
          </StaggerItem>
        ))}
      </div>
    </StaggerChildren>
  )
}

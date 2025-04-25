"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function InterestedButton() {
  const [interested, setInterested] = useState(false)

  const handleInterested = () => {
    setInterested(!interested)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={`flex items-center ${interested ? "text-red-500" : ""}`}
      onClick={handleInterested}
    >
      <Heart className={`h-4 w-4 mr-2 ${interested ? "fill-red-500" : ""}`} />
      {interested ? "Interested" : "Interest"}
    </Button>
  )
}

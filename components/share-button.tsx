"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export function ShareButton() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this property",
          text: "I found this amazing property on Horizon Estate",
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error))
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <Button variant="outline" size="sm" className="flex items-center" onClick={handleShare}>
      <Share2 className="h-4 w-4 mr-2" />
      Share
    </Button>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[400px] md:h-[500px]">
          <div className="relative h-full rounded-tl-lg rounded-bl-lg overflow-hidden">
            <Image
              src={images[0] || "/placeholder.svg?height=500&width=500"}
              alt="Property"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2 h-full">
            <div className="relative h-full rounded-tr-lg overflow-hidden">
              <Image
                src={images[1] || "/placeholder.svg?height=250&width=250"}
                alt="Property"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative h-full overflow-hidden">
              <Image
                src={images[2] || "/placeholder.svg?height=250&width=250"}
                alt="Property"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative h-full overflow-hidden">
              <Image
                src={images[3] || "/placeholder.svg?height=250&width=250"}
                alt="Property"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative h-full rounded-br-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                <Play className="h-12 w-12 text-white" />
              </div>
              <Image
                src={images[4] || "/placeholder.svg?height=250&width=250"}
                alt="Property"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
        <Button
          variant="secondary"
          className="absolute bottom-4 right-4 bg-white text-black hover:bg-gray-100 shadow-md"
          onClick={() => setShowAllPhotos(true)}
        >
          Show all photos
        </Button>
      </div>

      <Dialog open={showAllPhotos} onOpenChange={setShowAllPhotos}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black">
          <div className="relative h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-black/20 z-50"
              onClick={() => setShowAllPhotos(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-50"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src={images[currentImageIndex] || "/placeholder.svg?height=800&width=1200"}
                alt="Property"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 z-50"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

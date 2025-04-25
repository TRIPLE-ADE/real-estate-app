"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface PropertyDescriptionProps {
  description: string
  longDescription: string
  location: string
  beds: number
  additionalFeatures: string[]
  kitchen: string[]
  additionalInformation: string
  notes: string[]
}

export function PropertyDescription({
  description,
  longDescription,
  location,
  beds,
  additionalFeatures,
  kitchen,
  additionalInformation,
  notes,
}: PropertyDescriptionProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">House Description</h2>
        <p className="text-gray-700 mb-4">{`This apartment is located in ${location} with a capacity of ${beds} bedrooms.`}</p>
        <p className="text-gray-700">{description}</p>
        <button onClick={() => setShowMore(true)} className="text-gray-600 font-medium mt-4 hover:underline">
          Show more
        </button>
      </div>

      <Dialog open={showMore} onOpenChange={setShowMore}>
        <DialogContent className="max-w-2xl">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Home Description</h2>

            <div>
              <p className="text-gray-700 mb-4">{`This apartment is located in ${location} with a capacity of ${beds} bedrooms.`}</p>
              <p className="text-gray-700">{longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {additionalFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Kitchen</h3>
              <ul className="space-y-2">
                {kitchen.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Additional information</h3>
              <p className="text-gray-700">{additionalInformation}</p>
              <ul className="mt-4 space-y-1">
                {notes.map((note, index) => (
                  <li key={index} className="text-gray-700">
                    • {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

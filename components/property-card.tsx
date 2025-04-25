"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Eye } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { LikeButton } from "@/components/like-button"
import { HoverCard } from "@/components/animations/motion"

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
  isLiked?: boolean
}

interface PropertyCardProps {
  property: Property
  onLike: () => void
}

export function PropertyCard({ property, onLike }: PropertyCardProps) {
  const { id, title, location, type, price, beds, baths, sqft, likes, views, image, isLiked = false } = property

  // Handle like button click without triggering navigation
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onLike()
  }

  return (
    <Link href={`/property/${id}`} className="block">
      <HoverCard className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div onClick={handleLikeClick} className="absolute top-3 right-3 z-10">
            <LikeButton isLiked={isLiked} likes={likes} onLike={() => {}} className="pointer-events-none" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Eye className="h-4 w-4 mr-1" />
              <span>{views}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-2">{location}</p>
          <p className="text-xs text-gray-400 mb-3">{type}</p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <span>{beds} bd</span>
              <span>|</span>
              <span>{baths} ba</span>
              <span>|</span>
              <span>{sqft} sqft</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900">{formatCurrency(price)}</p>
            <div onClick={handleLikeClick}>
              <LikeButton isLiked={isLiked} likes={likes} onLike={() => {}} size="sm" className="pointer-events-none" />
            </div>
          </div>
        </div>
      </HoverCard>
    </Link>
  )
}

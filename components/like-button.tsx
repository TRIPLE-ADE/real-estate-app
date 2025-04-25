"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface LikeButtonProps {
  isLiked: boolean
  likes: number
  onLike: () => void
  size?: "sm" | "md" | "lg"
  showCount?: boolean
  className?: string
}

export function LikeButton({
  isLiked: initialIsLiked,
  likes,
  onLike,
  size = "md",
  showCount = true,
  className,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked)
  const [isAnimating, setIsAnimating] = useState(false)

  // Update local state if prop changes
  useEffect(() => {
    setIsLiked(initialIsLiked)
  }, [initialIsLiked])

  const handleLike = () => {
    // Toggle the liked state locally for immediate feedback
    const newIsLiked = !isLiked
    setIsLiked(newIsLiked)

    // Only animate when liking, not when unliking
    if (newIsLiked) {
      setIsAnimating(true)
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 1000)
    }

    // Call the parent handler
    onLike()
  }

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const iconSizeClasses = {
    sm: "h-3 w-3",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <div className={cn("flex items-center", className)}>
      <button
        onClick={handleLike}
        type="button"
        className={cn(
          "rounded-full bg-white/80 flex items-center justify-center shadow-sm",
          "transform transition-all duration-300 hover:scale-110 active:scale-90",
          "relative overflow-hidden",
          sizeClasses[size],
        )}
        aria-label={isLiked ? "Unlike property" : "Like property"}
      >
        <Heart
          className={cn(
            iconSizeClasses[size],
            "transition-all duration-300",
            isLiked ? "text-red-500 fill-red-500" : "text-gray-600 hover:text-red-400",
          )}
        />

        {/* Animated particles when liked */}
        {isAnimating && (
          <>
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className={cn("absolute w-1 h-1 bg-red-500 rounded-full", "animate-like-particle opacity-0")}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${i * 60}deg) translateY(-10px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
            <span className="absolute inset-0 bg-red-50 rounded-full animate-like-ping opacity-0" />
          </>
        )}
      </button>

      {showCount && (
        <span className={cn("ml-1 text-sm transition-all duration-300", isLiked ? "text-red-500" : "text-gray-500")}>
          {likes}
        </span>
      )}
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Home, DollarSign, MapPin } from "lucide-react"

export function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would navigate to search results
    router.push(`/search?location=${encodeURIComponent(location)}`)
  }

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-2 flex items-center flex-col md:flex-row">
      <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2">
        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
        <Input
          type="text"
          placeholder="Enter location"
          className="border-none shadow-none focus-visible:ring-0 flex-1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2">
        <Home className="h-5 w-5 text-gray-400 mr-2" />
        <select className="w-full border-none bg-transparent text-gray-700 focus:outline-none">
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </div>

      <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2">
        <span className="text-gray-400 mr-2 font-bold text-sm">₦</span>
        <select className="w-full border-none bg-transparent text-gray-700 focus:outline-none">
          <option value="">Price Range</option>
          <option value="50000000-100000000">₦50,000,000 - ₦100,000,000</option>
          <option value="100000000-150000000">₦100,000,000 - ₦150,000,000</option>
          <option value="150000000-200000000">₦150,000,000 - ₦200,000,000</option>
          <option value="200000000+">₦200,000,000+</option>
        </select>
      </div>

      <Button type="submit" className="md:ml-2 bg-orange-500 hover:bg-orange-600">
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </form>
  )
}

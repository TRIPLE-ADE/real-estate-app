import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-gray-900">
            Horizon
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/buy" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Buy
            </Link>
            <Link href="/rent" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Rent
            </Link>
            <Link href="/sell" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Sell
            </Link>
            <Link href="/agents" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Agents
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Help Center
            </Button>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

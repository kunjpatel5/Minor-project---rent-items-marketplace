"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const { cartItems } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            RentEase
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link href="/items" className="hover:text-blue-200">Browse Items</Link>
            <Link href="/categories" className="hover:text-blue-200">Categories</Link>
            <Link href="/how-it-works" className="hover:text-blue-200">How It Works</Link>
            <Link href="/list-item" className="hover:text-blue-200">List Your Item</Link>
          </nav>

          {/* Right-side Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                placeholder="Search items..."
                className="px-4 py-2 rounded-full text-black pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                aria-label="Search"
                title="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
            
            <Link href="/cart" className="hover:text-blue-200 relative" aria-label="View cart">
              <ShoppingCart />
              {cartItems.length > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2">
                  {cartItems.length}
                </Badge>
              )}
            </Link>

            <Link href="/profile" className="hover:text-blue-200" aria-label="View profile">
              <User />
            </Link>

            <Button asChild variant="secondary">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            title={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/items" className="hover:text-blue-200">Browse Items</Link>
              <Link href="/categories" className="hover:text-blue-200">Categories</Link>
              <Link href="/how-it-works" className="hover:text-blue-200">How It Works</Link>
              <Link href="/list-item" className="hover:text-blue-200">List Your Item</Link>
              <Link href="/cart" className="hover:text-blue-200 flex items-center">
                Cart
                {cartItems.length > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {cartItems.length}
                  </Badge>
                )}
              </Link>
              <Link href="/profile" className="hover:text-blue-200">Profile</Link>
              <Link href="/login" className="hover:text-blue-200">Login</Link>
              <Link href="/signup" className="hover:text-blue-200">Sign Up</Link>
            </nav>
            
            <form onSubmit={handleSearch} className="mt-4">
              <input
                type="search"
                placeholder="Search items..."
                className="w-full px-4 py-2 rounded-full text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

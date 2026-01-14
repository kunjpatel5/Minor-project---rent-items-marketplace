"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ItemCard from "@/components/ItemCard"

// This would typically come from an API or database
const allItems = [
  {
    id: 1,
    name: "Vintage Bicycle",
    image: "/featureditems/Vintage Bicycle.jpg",
    price: 10,
    category: "Vehicles",
    description: "A stylish vintage bicycle perfect for city rides.",
    securityDeposit: 50,
  },
  {
    id: 2,
    name: "Professional Camera",
    image: "/featureditems/Professional Camera.jpg",
    price: 25,
    category: "Cameras",
    description: "High-resolution professional camera with multiple lenses.",
    securityDeposit: 100,
  },
  {
    id: 3,
    name: "Cozy Armchair",
    image: "/featureditems/Cozy Armchair.jpg",
    price: 15,
    category: "Furniture",
    description: "A comfortable armchair for relaxing at home or office.",
    securityDeposit: 40,
  },
  {
    id: 4,
    name: "Electric Guitar",
    image: "/featureditems/Electric Guitar.jpg",
    price: 20,
    category: "Electronics",
    description: "A premium electric guitar for music enthusiasts.",
    securityDeposit: 80,
  },
  {
    id: 5,
    name: "Laptop",
    image: "/category/computers/laptop.jpg",
    price: 30,
    category: "Computers",
    description: "A powerful laptop for work, study, and entertainment.",
    securityDeposit: 200,
  },
  {
    id: 6,
    name: "Mountain Bike",
    image: "/category/vehicles/mountainbike.jpg",
    price: 18,
    category: "Vehicles",
    description: "A sturdy mountain bike for off-road adventures.",
    securityDeposit: 75,
  },
  {
    id: 7,
    name: "DSLR Camera",
    image: "/category/cameras/dslrcamera.jpg",
    price: 40,
    category: "Cameras",
    description: "A professional DSLR camera with advanced features.",
    securityDeposit: 150,
  },
  {
    id: 8,
    name: "Office Desk",
    image: "/category/furniture/officedesk.jpg",
    price: 25,
    category: "Furniture",
    description: "A spacious office desk for productive work.",
    securityDeposit: 60,
  },
  {
    id: 9,
    name: "Smartphone",
    image: "/category/electronics/smartphone.jpg",
    price: 20,
    category: "Electronics",
    description: "A latest-gen smartphone with high-speed performance.",
    securityDeposit: 120,
  },
  {
    id: 10,
    name: "Gaming Desktop",
    image: "/category/computers/Gaming Desktop.jpg",
    price: 60,
    category: "Computers",
    description: "A high-performance gaming desktop with RGB lighting.",
    securityDeposit: 300,
  },
]


const categories = ["All", "Vehicles", "Cameras", "Furniture", "Electronics", "Computers"]

export default function BrowseItems() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")

  const filteredItems = allItems
    .filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "price_asc") {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Browse Items</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No items found matching your criteria.</p>
      )}
    </div>
  )
}


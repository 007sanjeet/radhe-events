"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const categories = [
  {
    id: "weddings",
    name: "Weddings",
    description: "Beautiful wedding decorations and setups",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "birthdays",
    name: "Birthday Parties",
    description: "Fun and colorful birthday celebrations",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "anniversaries",
    name: "Anniversaries",
    description: "Romantic anniversary celebrations",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "corporate",
    name: "Corporate Events",
    description: "Professional corporate event decorations",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "festivals",
    name: "Festivals",
    description: "Traditional festival decorations",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "custom",
    name: "Custom Events",
    description: "Personalized decorations for special occasions",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Radhe Events
                </h1>
                <p className="text-xs text-gray-600">Making Moments Magical</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-pink-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 font-medium">
                About
              </Link>
              <Link href="/gallery" className="text-pink-600 font-medium">
                Gallery
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-pink-600 font-medium">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="outline" size="sm" className="md:hidden bg-transparent">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {!selectedCategory ? (
          // Categories Grid
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of beautiful event decorations across different categories. Click on any category
                to view more images.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={category.images[0] || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.description}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{category.images.length} Images</span>
                        <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                          View Gallery
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          // Selected Category Images
          <>
            <div className="mb-8">
              <Button variant="outline" onClick={() => setSelectedCategory(null)} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>

              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{selectedCategoryData?.name}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{selectedCategoryData?.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedCategoryData?.images.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${selectedCategoryData.name} ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Love what you see?</h3>
              <p className="text-gray-600 mb-6">Let's create something beautiful for your special event too!</p>
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600">
                Book Consultation
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Radhe Events</h1>
                <p className="text-sm text-gray-400">Making Moments Magical</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">© 2024 Radhe Events. All rights reserved.</p>
              <p className="text-sm text-gray-400">Crafted with ❤️ for your special moments</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

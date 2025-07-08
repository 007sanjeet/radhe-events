import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Users, Calendar, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Radhe Events
                </h1>
                <p className="text-xs text-gray-600">Making Moments Magical</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-pink-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 font-medium">
                About
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-pink-600 font-medium">
                Gallery
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-pink-600 font-medium">
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Creating{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Magical Moments
              </span>{" "}
              for Your Special Events
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              From intimate anniversaries to grand weddings, birthdays to corporate ceremonies - we transform your
              vision into unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating beautiful decorations for all types of celebrations and ceremonies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Decoration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Wedding Decoration</h4>
                <p className="text-gray-600 mb-4">
                  Transform your special day with elegant floral arrangements, lighting, and themed decorations
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Wedding decoration"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>

            {/* Birthday Parties */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Birthday Parties</h4>
                <p className="text-gray-600 mb-4">
                  Fun and colorful decorations for birthday celebrations of all ages with custom themes
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Birthday party decoration"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>

            {/* Anniversary */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Anniversary Celebrations</h4>
                <p className="text-gray-600 mb-4">
                  Romantic and elegant setups to celebrate your love milestones with personalized touches
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Anniversary decoration"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>

            {/* Corporate Events */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Corporate Events</h4>
                <p className="text-gray-600 mb-4">
                  Professional and sophisticated decorations for corporate ceremonies and business events
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Corporate event decoration"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>

            {/* Festival Celebrations */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Festival Decorations</h4>
                <p className="text-gray-600 mb-4">
                  Traditional and cultural decorations for festivals and religious ceremonies
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Festival decoration"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>

            {/* Custom Events */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Custom Events</h4>
                <p className="text-gray-600 mb-4">
                  Personalized decorations for any special occasion or ceremony you have in mind
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Custom event decoration"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Radhe Events?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Creative Excellence</h4>
              <p className="text-gray-600">Unique and innovative designs tailored to your vision</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Professional Team</h4>
              <p className="text-gray-600">Experienced decorators dedicated to perfection</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Timely Delivery</h4>
              <p className="text-gray-600">On-time setup and execution for your special day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h3>
            <p className="text-gray-600">Ready to make your event magical? Contact us today!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-600">info@radheevents.com</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-600">Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
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

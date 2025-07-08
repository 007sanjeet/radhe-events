import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Phone, Mail, MapPin, Award, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/about" className="text-pink-600 font-medium">
                About
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-pink-600 font-medium">
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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Radhe Events
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate event decorators dedicated to transforming your special moments into unforgettable
              experiences through creative design and meticulous attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Organizer Profile */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Aditya - Event Organizer"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Aditya</h3>
                      <p className="text-xl text-pink-600 font-semibold mb-4">Founder & Lead Event Designer</p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        With over 8 years of experience in event decoration and design, I founded Radhe Events with a
                        vision to create magical moments for every celebration. My passion for creativity and attention
                        to detail has helped hundreds of families celebrate their most precious moments.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        I believe that every event tells a unique story, and my role is to bring that story to life
                        through beautiful decorations, thoughtful design, and personalized touches that reflect your
                        personality and style.
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-pink-600" />
                        <span className="text-gray-700">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-pink-600" />
                        <span className="text-gray-700">radha@radheevents.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-pink-600" />
                        <span className="text-gray-700">Andheri West, Mumbai, Maharashtra</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Story</h3>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Radhe Events was born from a simple belief: every celebration deserves to be extraordinary. What started
                as a small venture in 2016 has grown into Mumbai's trusted name for event decoration and design.
              </p>
              <p>
                Our journey began when Aditya, after organizing her own wedding, realized her passion for creating
                beautiful spaces that bring joy to people's lives. Since then, we've had the privilege of decorating
                over 500 events, each one unique and special.
              </p>
              <p>
                Today, we're proud to be a team of creative professionals who share the same vision: to make your
                special moments truly magical through thoughtful design, quality materials, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Achievements</h3>
            <p className="text-gray-600">Milestones that make us proud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">500+</h4>
              <p className="text-gray-600">Events Decorated</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">8+</h4>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">100%</h4>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">50+</h4>
              <p className="text-gray-600">Awards & Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Magic Together?</h3>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create an unforgettable experience for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pink-600 bg-transparent"
              asChild
            >
              <Link href="/gallery">View Our Portfolio</Link>
            </Button>
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

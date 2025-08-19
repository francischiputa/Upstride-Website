"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Office Furniture",
    description:
      "Our selection of office furniture combines functionality with style, ensuring a productive and comfortable work environment. From ergonomic chairs to spacious desks and storage solutions, we cater to all office needs.",
    image: "/office_funicture.webp",
    buttonText: "View Furniture Collection",
  },
  {
    id: 2,
    title: "Office Stationery",
    description:
      "We offer a wide array of office stationery products, including pens, papers, files, and other essential supplies to keep your office running smoothly and efficiently.",
    image: "/office-stationary-1.png",
    buttonText: "Explore Stationery",
  },
  {
    id: 3,
    title: "Computers",
    description:
      "100% Cool, we supply a variety of computers to meet the needs of different users, from powerful desktops for professional use to compact PCs for everyday tasks.",
    image: "/computers.avif",
    buttonText: "Discover Computers",
  },
  {
    id: 4,
    title: "Air Conditioners",
    description:
      "Upstride Tradez provides high-performance air conditioning units from various brands, designed for both residential and commercial spaces, ensuring optimal climate control and energy efficiency.",
    image: "/air_conditioners.png",
    buttonText: "Shop Air Conditioners",
  },
  {
    id: 5,
    title: "Home Interior Items",
    description:
      "Our global collection of household interior items includes stylish carpets and practical pieces to enhance the look and feel of any home, creating a cozy and inviting space.",
    image: "/Home.webp",
    buttonText: "Browse Home Interiors",
  },
  {
    id: 6,
    title: "Laptops",
    description:
      "Our range of laptops includes models suitable for business, gaming, and personal use, all featuring the latest technology to ensure high performance and reliability.",
    image: "/laptop.png",
    buttonText: "View Laptops",
  },
  {
    id: 7,
    title: "Solar Panels",
    description:
      "We supply high-efficiency solar panels to help you harness renewable energy, reduce electricity costs, and promote environmental sustainability.",
    image: "/solar-pannel.webp",
    buttonText: "Explore Solar Solutions",
  },
  {
    id: 8,
    title: "Electronics",
    description:
      "Upstride Tradez provides a variety of electronic products, from entertainment systems to essential household electronics, all from trusted brands known for quality and innovation.",
    image: "/electronics.png",
    buttonText: "Shop Electronics",
  },
]

export function ProductsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="products" className="py-20 bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[500] w-full"
          style={{ backgroundImage: "url(/Products-Banner.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-fade-in-up">
            Our Premium Product Range
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 text-slate-200 animate-fade-in-up animate-delay-200">
            Elevate Your Workspace and Home with Quality and Innovation
          </h2>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white hover:bg-slate-700 text-black hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animate-delay-400"
          >
            Browse All Products
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-4">
            Comprehensive Solutions for Every Need
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From modern office setups to sustainable energy solutions, we provide premium products that enhance
            productivity, comfort, and environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-serif text-slate-800 mb-3 group-hover:text-slate-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{product.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-slate-600 group-hover:text-white group-hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2 bg-transparent"
                >
                  {product.buttonText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-50 to-slate-50 rounded-2xl p-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800 mb-4">Need Custom Solutions?</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team specializes in creating tailored product packages that meet your specific requirements. Let us
              help you find the perfect combination of products for your business or home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Quote
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

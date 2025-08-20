"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Lightbulb, Leaf } from "lucide-react"

const commitments = [
  {
    icon: Award,
    title: "Quality",
    description:
      "We source and supply only the highest-quality products from trusted brands to ensure durability and performance.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Your needs are our priority, and we strive to exceed expectations through exceptional service and tailored solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "From AI deployments to advanced solar systems, we embrace the latest technologies to deliver future-ready solutions.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Our solar projects and eco-friendly products help reduce environmental impact and promote a greener future.",
  },
]

export function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 bg-slate-50">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/about-us.jpeg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-fade-in-up">
            About Upstride
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 text-slate-200 animate-fade-in-up animate-delay-200">
            Innovating Today for a Sustainable Tomorrow
          </h2>
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="bg-white hover:bg-slate-700 hover:text-white text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animate-delay-400"
          >
            Learn More About Our Mission
          </Button>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-6">Company Overview</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                Upstride Tradez Limited is a leading provider of office solutions, cutting-edge electronics, and
                sustainable energy projects. Our mission is to empower businesses and homes with high-quality products
                and innovative solutions that drive productivity, efficiency, and sustainability.
              </p>
              <p>
                With a diversified product range and a commitment to excellence, we cater to both commercial and
                residential needs across the globe. From modern office furniture to advanced AI deployments and
                comprehensive solar installations, we are your trusted partner in building a better future.
              </p>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="/Company Overview 1.jpg"
                alt="Modern office interior showcasing our solutions"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Commitments */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-4">Our Commitment</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are dedicated to delivering excellence through four core principles that guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon
            return (
              <Card
                key={commitment.title}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-800 mb-4">{commitment.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{commitment.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Discover how our innovative solutions can help you achieve your goals while building a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="bg-white text-black hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Products
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-slate-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

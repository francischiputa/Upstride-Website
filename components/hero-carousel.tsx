"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Welcome to Upstride",
    subtitle: "Your Trusted Partner in Office Solutions, Technology, and Sustainable Energy",
    description:
      "Discover our premium range of office furniture, electronics, solar panels, and innovative AI and solar projects tailored to your needs.",
    cta: "Explore Our Products & Projects",
    background: "/home-banner-1.jpg",
  },
  {
    id: 2,
    title: "Innovative AI Solutions",
    subtitle: "Transform Your Business with Cutting-Edge Technology",
    description:
      "From AI deployments to automation solutions, we help businesses leverage artificial intelligence for maximum efficiency and growth.",
    cta: "Discover AI Projects",
    background: "/home-banner-3.jpg",
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions",
    subtitle: "Power Your Future with Clean, Renewable Energy",
    description:
      "Our comprehensive solar projects reduce energy costs and environmental impact while providing reliable, sustainable power solutions.",
    cta: "View Solar Projects",
    background: "/home-banner-2.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-fade-in-up">
                {slide.title}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 text-blue-200 animate-fade-in-up animate-delay-200">
                {slide.subtitle}
              </h2>
              <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
                {slide.description}
              </p>
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="bg-white hover:bg-slate-700 hover:text-white text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animate-delay-600"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/75 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

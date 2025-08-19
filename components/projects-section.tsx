"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Sun, ArrowRight, CheckCircle } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Projects",
    icon: Brain,
    description:
      "We specialize in AI deployment projects, starting with a thorough analysis of your business requirements. Our process includes assessing operational needs, identifying opportunities for AI integration (e.g., automation, predictive analytics, customer service bots), custom solution design, implementation, testing, and ongoing support. Our scalable and secure solutions ensure minimal disruption and maximum ROI.",
    image: "/AI Banner.jpg",
    buttonText: "Learn About AI Solutions",
    features: [
      "Business Requirements Analysis",
      "AI Integration Opportunities Assessment",
      "Custom Solution Design & Development",
      "Implementation & Testing",
      "Ongoing Support & Maintenance",
      "Scalable & Secure Architecture",
    ],
  },
  {
    id: 2,
    title: "Solar Projects",
    icon: Sun,
    description:
      "Our solar projects cover everything from feasibility studies to commissioning. We cater to private villas and commercial productions with customized designs, high-quality components, and post-deployment maintenance. Our solutions reduce energy costs and promote sustainability with efficient, aesthetic setups.",
    image: "/Solar Banner 1.jpg",
    buttonText: "Explore Solar Projects",
    features: [
      "Comprehensive Feasibility Studies",
      "Custom Design for Villas & Commercial",
      "High-Quality Component Selection",
      "Professional Installation & Commissioning",
      "Post-Deployment Maintenance",
      "Energy Cost Reduction Analysis",
    ],
  },
]

export function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-20">
       <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[500px] w-full"
            style={{ backgroundImage: "url('/Project_banner 1.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30"></div>
      </div>


        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-fade-in-up">
            Transformative Projects for a Smarter Future
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 text-slate-200 animate-fade-in-up animate-delay-200">
            From AI Innovation to Sustainable Energy Solutions
          </h2>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white hover:bg-slate-700 text-black hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animate-delay-400"
          >
            Discover Our Projects
          </Button>
        </div>
      </div>

      {/* Projects Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-4">
            Innovative Solutions That Drive Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver cutting-edge projects that transform businesses and communities through advanced technology and
            sustainable energy solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={project.id}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-serif text-slate-800 mb-4 group-hover:text-slate-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full group-hover:bg-slate-600 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2 bg-transparent"
                    variant="outline"
                  >
                    {project.buttonText}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-4">
              Our Project Delivery Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis & Planning",
                description: "Comprehensive assessment of requirements and feasibility studies",
              },
              {
                step: "02",
                title: "Design & Development",
                description: "Custom solution design with cutting-edge technology integration",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Professional installation and deployment with minimal disruption",
              },
              {
                step: "04",
                title: "Support & Maintenance",
                description: "Ongoing support and optimization for maximum performance",
              },
            ].map((process, index) => (
              <div
                key={process.step}
                className={`text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-800 mb-3">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can transform your business and contribute to a sustainable
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-slate-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

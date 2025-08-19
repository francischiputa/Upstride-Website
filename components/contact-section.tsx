"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Globe, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+260973834511",
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@upstridetradez.com",
    description: "Send us your inquiries anytime",
  },
  {
    icon: Globe,
    title: "Social Media",
    value: "Facebook, X, LinkedIn, Instagram",
    description: "Visit our online presence",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Global Operations",
    description: "Serving clients worldwide",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[500] w-full"
          style={{ backgroundImage: "url(./Contact.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-fade-in-up">
            Get in Touch with Upstride Tradez
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 text-slate-200 animate-fade-in-up animate-delay-200">
            We're Here to Help You Succeed
          </h2>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact-form")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-white hover:bg-slate-700 hover:text-white text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animate-delay-400"
          >
            Contact Us Now
          </Button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-4">Multiple Ways to Reach Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the most convenient way to get in touch. We're committed to responding promptly to all inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Card
                key={info.title}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-800 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-slate-600 mb-2">{info.value}</p>
                  <p className="text-sm text-slate-600">{info.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start" id="contact-form">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800 mb-6">Send Us a Message</h3>
            <p className="text-lg text-slate-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible. We're here to answer any questions
              about our products and services.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-slate-600" />
                <div>
                  <p className="font-semibold text-slate-800">Business Hours</p>
                  <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:30 PM</p>
                  <p className="text-slate-600">Saturday: 9:00 AM - 12:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Send className="w-6 h-6 text-slate-600" />
                <div>
                  <p className="font-semibold text-slate-800">Response Time</p>
                  <p className="text-slate-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="animate-slide-in-right">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-6">
            Thank You for Your Interest!
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Thank you for your interest in Upstride! We look forward to assisting you with our premium
            products and innovative project solutions. Reach out today to start your journey with us.
          </p>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, FormEvent } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-card-bg via-background to-background pt-20">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="heading-md mb-8">Send us a Message</h2>
                {isSubmitted && (
                  <div className="bg-green-900/20 border border-green-600/50 text-green-400 p-4 rounded-lg mb-6">
                    Thank you! We&apos;ll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded-lg focus:border-accent-warm focus:outline-none text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded-lg focus:border-accent-warm focus:outline-none text-white placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded-lg focus:border-accent-warm focus:outline-none text-white placeholder-gray-500"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded-lg focus:border-accent-warm focus:outline-none text-white placeholder-gray-500"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-card-bg border border-gray-800 rounded-lg focus:border-accent-warm focus:outline-none text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="heading-md mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-accent-warm font-semibold mb-2 text-lg">Email</h3>
                    <a href="mailto:info@condowebnikhane.com" className="text-gray-400 hover:text-accent-warm transition-colors">
                      info@condowebnikhane.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-accent-warm font-semibold mb-2 text-lg">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-accent-warm transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>

                  <div>
                    <h3 className="text-accent-warm font-semibold mb-2 text-lg">Address</h3>
                    <p className="text-gray-400 leading-relaxed">
                      123 Development Street
                      <br />
                      City, Country 12345
                    </p>
                  </div>

                  <div>
                    <h3 className="text-accent-warm font-semibold mb-4 text-lg">Business Hours</h3>
                    <div className="text-gray-400 space-y-2">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

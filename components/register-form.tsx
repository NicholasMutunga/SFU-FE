"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Why Join SFUP?</h2>
              <p className="text-lg text-foreground/70">
                As a member, you'll be part of a growing movement dedicated to unity, progress, and inclusive
                governance.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Influence Party Decisions</h3>
                  <p className="text-foreground/70">Vote on policy priorities and party leadership</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Access Exclusive Events</h3>
                  <p className="text-foreground/70">Attend member-only forums, seminars, and networking events</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Volunteer Opportunities</h3>
                  <p className="text-foreground/70">Participate in campaigns and community initiatives</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Direct Communication</h3>
                  <p className="text-foreground/70">Receive updates directly from party leadership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Registration Form</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                ✓ Thank you for registering! We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="+255 712 345 678"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Region *</label>
                <select
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary"
                >
                  <option value="">Select your region</option>
                  <option value="dar-es-salaam">Dar es Salaam</option>
                  <option value="arusha">Arusha</option>
                  <option value="mbeya">Mbeya</option>
                  <option value="dodoma">Dodoma</option>
                  <option value="mwanza">Mwanza</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Areas of Interest</label>
                <div className="space-y-2">
                  {["Politics", "Community Work", "Youth Engagement", "Policy Development"].map((interest) => (
                    <label key={interest} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      <span className="text-foreground">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors mt-6"
              >
                Complete Registration
              </button>

              <p className="text-xs text-foreground/60 text-center mt-4">
                By registering, you agree to receive updates and communications from SFUP.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

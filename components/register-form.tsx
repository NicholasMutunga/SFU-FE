"use client"

import React, { useState } from "react"
import { CheckCircle } from "lucide-react"
import Snackbar from "@/components/snackbar"
import api from "@/lib/axios"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    sex: "",
    docType: "",
    docNumber: "",
    county: "",
    constituency: "",
    ward: "",
    interest: "",
  })

  const [snackbar, setSnackbar] = useState<{
    message: string
    type: "success" | "error"
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      dob: formData.birthDate,
      gender: formData.sex,
      docType: formData.docType,
      idNo: formData.docNumber,
      county: formData.county,
      consituency: formData.constituency,
      ward: formData.ward,
      area_of_interest: formData.interest,
    }

    try {
      const res = await api.post("/api/members/register/member", payload)
      console.log("registration", res.data)

      setSnackbar({
        message: "Registration successful!",
        type: "success",
      })

      window.scrollTo({ top: 0, behavior: "smooth" })

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthDate: "",
        sex: "",
        docType: "",
        docNumber: "",
        county: "",
        constituency: "",
        ward: "",
        interest: "",
      })
    } catch (error: any) {
      const msg =
        error.response?.data?.message ||
        "Registration failed. Please try again."

      setSnackbar({
        message: msg,
        type: "error",
      })

      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {snackbar && (
          <Snackbar
            message={snackbar.message}
            type={snackbar.type}
            onClose={() => setSnackbar(null)}
          />
        )}

        <div className="flex md:flex-row flex-col gap-12 items-start">

          {/* LEFT STATIC INFO COLUMN */}
          <div className="space-y-8 lg:ms-20 md:w-1/3 sm:w-full">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                Why Join SFUP?
              </h2>
              <p className="text-lg text-foreground/70">
                As a member, you'll be part of a growing movement dedicated to unity,
                progress, and inclusive governance.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Influence Party Decisions
                  </h3>
                  <p className="text-foreground/70">
                    Vote on policy priorities and party leadership
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Access Exclusive Events
                  </h3>
                  <p className="text-foreground/70">
                    Attend member-only forums and networking events
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Volunteer Opportunities
                  </h3>
                  <p className="text-foreground/70">
                    Participate in campaigns and community initiatives
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Direct Communication
                  </h3>
                  <p className="text-foreground/70">
                    Receive updates directly from party leadership
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-muted border border-border rounded-lg p-8 md:w-2/3">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Registration Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">

              {/* Name Fields */}
              <div className="md:flex">
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                    placeholder="John"
                  />
                </div>

                <div className="md:w-1/2 md:ms-8">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="md:flex">
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="md:w-1/2 md:ms-8">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                    placeholder="+254 712 345 678"
                  />
                </div>
              </div>

              {/* DOB + Gender */}
              <div className="md:flex">
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="md:w-1/2 md:ms-8">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Sex *
                  </label>
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="No Preference">I prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Doc Type + Number */}
              <div className="md:flex">
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Document Type *
                  </label>
                  <select
                    name="docType"
                    value={formData.docType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                  >
                    <option value="">Select Document Type</option>
                    <option value="Passport">Passport</option>
                    <option value="National ID">National ID</option>
                  </select>
                </div>

                <div className="md:w-1/2 md:ms-8">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Document Number *
                  </label>
                  <input
                    type="number"
                    name="docNumber"
                    value={formData.docNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                    placeholder="01234567"
                  />
                </div>
              </div>

              {/* County + Constituency */}
              <div className="md:flex">
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    County *
                  </label>
                  <select
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                  >
                    <option value="">Select County</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kitui">Kitui</option>
                  </select>
                </div>

                <div className="md:w-1/2 md:ms-8">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Constituency *
                  </label>
                  <select
                    name="constituency"
                    value={formData.constituency}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                  >
                    <option value="">Select Constituency</option>
                    <option value="Embakasi East">Embakasi East</option>
                    <option value="Kiharu">Kiharu</option>
                    <option value="Kitui West">Kitui West</option>
                    <option value="Mathira">Mathira</option>
                    <option value="Juja">Juja</option>
                  </select>
                </div>
              </div>

              {/* Ward + Area of Interest */}
              <div className="md:flex">
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Ward *
                  </label>
                  <select
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                  >
                    <option value="">Select Ward</option>
                    <option value="Embakasi East">Embakasi East</option>
                    <option value="Kiharu">Kiharu</option>
                    <option value="Kitui West">Kitui West</option>
                    <option value="Mathira">Mathira</option>
                    <option value="Juja">Juja</option>
                  </select>
                </div>

                <div className="md:w-1/2 md:ms-8">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white px-4 py-2 border rounded-lg"
                  >
                    <option value="">Area of Interest</option>
                    <option value="Politics">Politics</option>
                    <option value="Community Work">Community Work</option>
                    <option value="Youth Engagement">Youth Engagement</option>
                    <option value="Policy Development">Policy Development</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-secondary/90 mt-6"
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

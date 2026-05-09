'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const FORMSPREE_ID = 'xlgzpkvd'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMessage(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="(985) 555-0100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-white"
          >
            <option value="">Select a service...</option>
            <option>New Home Construction</option>
            <option>Roofing</option>
            <option>FORTIFIED Roof Installation</option>
            <option>Home Additions</option>
            <option>Remodeling</option>
            <option>Concrete & Outdoor Structures</option>
            <option>Other / General Inquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
            Project Location (City)
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="Raceland, Houma, Thibodaux..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="referral_source" className="block text-sm font-medium text-gray-700 mb-1.5">
          How did you find us?
        </label>
        <select
          id="referral_source"
          name="referral_source"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-white"
        >
          <option value="">Select an option...</option>
          <option>Google Search</option>
          <option>Google Local Services Ad</option>
          <option>Facebook / Social Media</option>
          <option>Friend or Family Referral</option>
          <option>Drove By / Saw a Job Site</option>
          <option>Yard Sign or Vehicle</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Tell Us About Your Project <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-y"
          placeholder="Describe your project, timeline, or any questions you have..."
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
          {errorMessage}
        </p>
      )}

      {status === 'success' ? (
        <div role="status" className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-4 py-4 text-center">
          <p className="font-semibold text-base mb-1">Message Sent!</p>
          <p>Thanks for reaching out — Jacob will be in touch shortly.</p>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-accent text-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send My Message'}
        </button>
      )}
    </form>
  )
}

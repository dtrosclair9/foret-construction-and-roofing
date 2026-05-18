import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us – Free Estimate in Raceland, LA',
  description:
    'Contact Foret Construction & Roofing LLC for a free, no-obligation estimate in Raceland, LA. Call (985) 859-5111 or send a message. Serving Lafourche & Terrebonne parishes.',
  openGraph: {
    title: 'Contact Foret Construction & Roofing LLC | Raceland, LA',
    description: 'Get a free estimate from Jacob Foret. Call (985) 859-5111 or fill out our contact form.',
    url: 'https://www.foretconstruction.co/contact',
  },
  alternates: { canonical: 'https://www.foretconstruction.co/contact' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Foret Construction & Roofing LLC',
  url: 'https://www.foretconstruction.co/contact',
  description: 'Contact page for Foret Construction & Roofing LLC in Raceland, LA. Request a free estimate.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Foret Construction & Roofing LLC',
    telephone: '+19858595111',
    email: 'foretcr@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2709 LA-1',
      addressLocality: 'Raceland',
      addressRegion: 'LA',
      postalCode: '70394',
      addressCountry: 'US',
    },
    sameAs: ['https://www.facebook.com/profile.php?id=100083615910445'],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-primary py-20 text-white text-center" aria-label="Contact page hero">
        <div className="container-wide">
          <p className="section-label">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 uppercase tracking-tight">
            Contact Foret Construction
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Ready to start your project? Reach out for a free, no-obligation estimate. Jacob will get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="contact-form-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Reach Out Directly
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Phone</p>
                    <a href="tel:+19858595111" className="text-gray-700 hover:text-accent transition-colors text-lg font-bold">
                      (985) 859-5111
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Email</p>
                    <a href="mailto:foretcr@gmail.com" className="text-gray-600 hover:text-accent transition-colors break-all">
                      foretcr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Location</p>
                    <p className="text-gray-600">2709 LA-1<br />Raceland, LA 70394</p>
                    <p className="text-gray-500 text-sm mt-1">Serving Lafourche &amp; Terrebonne parishes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Hours</p>
                    <p className="text-gray-600">Monday – Sunday<br />7:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Facebook</p>
                    <a
                      href="https://www.facebook.com/profile.php?id=100083615910445"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      Foret Construction & Roofing LLC
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary text-base mb-2">Free Estimates</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jacob will walk through your project, understand what you&apos;re after, and give you an honest price &mdash; no pressure, no obligation.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 id="contact-form-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

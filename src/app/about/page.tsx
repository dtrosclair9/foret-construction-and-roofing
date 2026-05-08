import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us – Meet Jacob Foret',
  description:
    'Foret Construction & Roofing LLC is owned and operated by Jacob Foret, a Raceland, LA native serving Lafourche and Terrebonne parishes. Local craftsmanship, FORTIFIED-certified roofing.',
  openGraph: {
    title: 'About Foret Construction & Roofing | Raceland, LA',
    description:
      'Meet Jacob Foret, founder of Foret Construction & Roofing LLC. A locally owned general contractor serving Lafourche & Terrebonne parishes.',
    url: 'https://www.foretconstruction.co/about',
  },
  alternates: { canonical: 'https://www.foretconstruction.co/about' },
}

const values = [
  {
    title: 'Clean Job Sites',
    description: 'Customers tell us all the time that we leave the property cleaner than we found it. Drop cloths, daily cleanup, and respect for your home — every project, every time.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'FORTIFIED Certified',
    description: 'IBHS-certified to install FORTIFIED roof systems that hold up in hurricane country and qualify your home for Louisiana wind & hail insurance discounts.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Honest Quotes, Honest Work',
    description: 'No upsells, no surprise charges, no half-finished jobs. We quote it, we build it, we stand behind it. That&apos;s the only way to grow a business in a small parish where word travels fast.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

const serviceCities = [
  'Raceland', 'Thibodaux', 'Houma', 'Lockport', 'Larose', 'Cut Off',
  'Golden Meadow', 'Galliano', 'Gray', 'Schriever', 'Bayou Blue', 'Napoleonville',
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Foret Construction & Roofing LLC',
  url: 'https://www.foretconstruction.co/about',
  description:
    'Learn about Foret Construction & Roofing LLC and its founder Jacob Foret — a Raceland, LA native serving Lafourche & Terrebonne parishes.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Foret Construction & Roofing LLC',
    founder: {
      '@type': 'Person',
      name: 'Jacob Foret',
      jobTitle: 'Owner & Contractor',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Raceland',
        addressRegion: 'LA',
        addressCountry: 'US',
      },
    },
    url: 'https://www.foretconstruction.co',
    telephone: '+19858595111',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-primary py-20 text-white text-center" aria-label="About page hero">
        <div className="container-wide">
          <p className="section-label">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 uppercase tracking-tight">
            About Foret Construction & Roofing LLC
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A locally owned, FORTIFIED-certified general contractor built on hard work, honest relationships, and a love for the craft.
          </p>
        </div>
      </section>

      {/* ── ABOUT OWNER ─────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="owner-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-96 lg:h-[560px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/owner-photo.jpg"
                alt="Foret Construction project — completed brick home with side porch in Lafourche Parish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/70 to-transparent p-6">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Raceland, Louisiana</p>
                <p className="text-white font-bold text-2xl font-serif">Jacob Foret, Owner</p>
              </div>
            </div>

            <div>
              <p className="section-label">Meet the Owner</p>
              <h2 id="owner-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Jacob Foret
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jacob was raised in <strong className="text-primary">Raceland, Louisiana</strong> &mdash; a community where your name and your handshake still mean something. He started in the trades the way most south Louisiana contractors do: working on roofs, learning every detail of the craft, and building a reputation one job at a time.
                </p>
                <p>
                  What started as <strong className="text-primary">Foret Home Improvement LLC</strong> grew into <strong className="text-primary">Foret Construction & Roofing LLC</strong> as the work expanded from roofing into full general contracting &mdash; new homes, additions, remodels, and concrete work across Lafourche and Terrebonne parishes. The crew grew, but the standard didn&apos;t change: clean job sites, honest prices, and work you&apos;d be proud to put your name on.
                </p>
                <p>
                  Jacob is <strong className="text-primary">FORTIFIED certified</strong> by the Insurance Institute for Business &amp; Home Safety, which means Foret Construction can install roof systems that meet IBHS&apos;s elevated standard for hurricane country &mdash; and unlock Louisiana wind &amp; hail insurance discounts for homeowners.
                </p>
                <p>
                  When you call Foret Construction, you&apos;re calling Jacob. Same number, same crew, same person showing up to walk your project. That&apos;s how it works in a small parish, and that&apos;s how he likes it.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-accent">
                  Work With Jacob
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=100083615910445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-outline inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="values-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">How We Work</p>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              What You Can Count On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <article key={value.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-5">
                  {value.icon}
                </div>
                <h3 className="text-primary font-bold text-xl mb-3">{value.title}</h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: value.description }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="service-area-heading">
        <div className="container-wide text-center">
          <p className="section-label">Where We Work</p>
          <h2 id="service-area-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
            Proudly Serving Lafourche &amp; Terrebonne Parishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Foret Construction & Roofing LLC is based in <strong>Raceland, Louisiana</strong> and serves homeowners throughout Lafourche Parish, Terrebonne Parish, and surrounding south Louisiana communities.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm font-medium">
            {serviceCities.map((city) => (
              <span key={city} className="bg-primary/5 border border-primary/10 text-primary px-4 py-2 rounded-full">
                {city}, LA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-primary section-padding text-white text-center" aria-labelledby="about-cta-heading">
        <div className="container-wide">
          <h2 id="about-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Ready to start your next project? Reach out to Jacob for a free estimate and a friendly conversation about your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-base">
              Get a Free Quote
            </Link>
            <a href="tel:+19858595111" className="btn-outline text-base">
              Call (985) 859-5111
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

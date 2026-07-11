import Image from 'next/image'
import Link from 'next/link'

export type ServiceLandingProps = {
  service: string
  serviceSlug: string
  city: string
  state: string
  county: string
  surroundingCities: string[]
  heroImage: string
  heroAlt: string
  metaTitle: string
  metaDescription: string
  intro: string[]
  whyChooseUs: { title: string; body: string }[]
  whatsIncluded: string[]
  closingPitch: string
}

export function buildServiceSchema(p: ServiceLandingProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${p.service} in ${p.city}, ${p.state}`,
    serviceType: p.service,
    description: p.intro.join(' ').replace(/<[^>]+>/g, '').slice(0, 320),
    url: `https://www.foretconstruction.co/services/${p.serviceSlug}-${p.city.toLowerCase().replace(/\s+/g, '-')}-${p.state.toLowerCase()}`,
    provider: {
      '@type': ['LocalBusiness', 'GeneralContractor', 'RoofingContractor'],
      name: 'Foret Construction & Roofing LLC',
      url: 'https://www.foretconstruction.co',
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
    },
    areaServed: [
      { '@type': 'City', name: `${p.city}, ${p.state}` },
      ...p.surroundingCities.map((c) => ({ '@type': 'City', name: `${c}, ${p.state}` })),
      { '@type': 'AdministrativeArea', name: p.county },
    ],
  }
}

export default function ServiceLandingPage(p: ServiceLandingProps) {
  const schema = buildServiceSchema(p)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center" aria-label="Page hero">
        <Image
          src={p.heroImage}
          alt={p.heroAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/60" />
        <div className="relative z-10 container-wide py-20 text-white">
          <p className="section-label mb-4">{p.city}, {p.state} &middot; {p.county}</p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-4xl uppercase tracking-tight">
            {p.service} in {p.city}, {p.state}
          </h1>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-accent text-base">
              Get a Free Estimate
            </Link>
            <a href="tel:+19858595111" className="btn-outline text-base inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (985) 859-5111
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="intro-heading">
        <div className="container-wide max-w-4xl">
          <h2 id="intro-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Trusted {p.service} for {p.city} Homeowners
          </h2>
          {p.intro.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="why-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">Why Foret Construction</p>
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Why {p.city} Homeowners Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.whyChooseUs.map((item) => (
              <article key={item.title} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base ml-11">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="included-heading">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What&apos;s Included</p>
          <h2 id="included-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-8">
            Every {p.service} Project Includes
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {p.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────── */}
      <section className="section-padding bg-primary text-white" aria-labelledby="area-heading">
        <div className="container-wide text-center">
          <p className="section-label">Service Area</p>
          <h2 id="area-heading" className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Serving {p.city} &amp; All of {p.county}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Foret Construction & Roofing LLC handles {p.service.toLowerCase()} projects throughout {p.city} and the surrounding {p.county} area, including:
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm font-medium">
            <span className="bg-accent text-white px-4 py-2 rounded-full">{p.city}, {p.state}</span>
            {p.surroundingCities.map((c) => (
              <span key={c} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full">
                {c}, {p.state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING + CTA ───────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="closing-heading">
        <div className="container-wide max-w-4xl text-center">
          <h2 id="closing-heading" className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get Started in {p.city}?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10 text-lg">
            {p.closingPitch}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-base">
              Request a Free Estimate
            </Link>
            <a href="tel:+19858595111" className="btn-primary-outline text-base">
              Call (985) 859-5111
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

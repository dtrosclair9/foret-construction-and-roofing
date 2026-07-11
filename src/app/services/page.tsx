import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Construction & Roofing Services in Raceland, LA',
  description:
    'General contractor services in Raceland, LA: new home construction, FORTIFIED roofing, additions, remodeling & concrete work across Lafourche & Terrebonne parishes.',
  openGraph: {
    title: 'Construction & Roofing Services in Raceland, LA | Foret Construction',
    description:
      'New home construction, FORTIFIED roofing, additions, remodeling, concrete work across Lafourche & Terrebonne parishes.',
    url: 'https://www.foretconstruction.co/services',
    images: [ogImage],
  },
  alternates: { canonical: 'https://www.foretconstruction.co/services' },
}

const services = [
  {
    id: 'new-home-construction',
    title: 'New Home Construction',
    tagline: 'Custom Homes Built From the Slab Up',
    description:
      'Foret Construction builds custom homes across south Louisiana &mdash; from initial slab pour to final trim. We handle framing, roofing, exterior and interior finishes, and everything in between, so you have one trusted contractor responsible for the whole build.',
    highlights: [
      'Slab foundation to finished home',
      'Custom floor plans accommodated',
      'In-house roofing & framing crew',
      'FORTIFIED roof option available',
      'Hurricane-rated construction',
      'Single point of accountability',
    ],
    image: '/images/new-construction-modern-white-brick.jpg',
    imageAlt: 'New custom home construction with white brick exterior in Raceland, LA by Foret Construction',
    cityPages: [
      { city: 'Raceland', href: '/services/new-home-construction-raceland-la' },
      { city: 'Houma', href: '/services/new-home-construction-houma-la' },
      { city: 'Thibodaux', href: '/services/new-home-construction-thibodaux-la' },
    ],
  },
  {
    id: 'roofing',
    title: 'Roofing',
    tagline: 'Roof Replacements That Hold Up to Hurricane Country',
    description:
      'Full roof replacements and repairs for homes across Lafourche and Terrebonne parishes. Architectural shingles, metal roofing, and FORTIFIED systems &mdash; installed by a crew that leaves your job site spotless. We work fast, communicate clearly, and stand behind every roof we put on.',
    highlights: [
      'Architectural asphalt shingles',
      'Metal roofing systems',
      'Storm damage repairs',
      'Insurance claim support',
      'Clean job sites every time',
      'Quick turnaround',
    ],
    image: '/images/roofing-aerial-shingles-raceland.jpg',
    imageAlt: 'Aerial view of new architectural shingle roof installed in Raceland, LA by Foret Construction',
    cityPages: [{ city: 'Raceland', href: '/services/roofing-raceland-la' }],
  },
  {
    id: 'fortified-roof',
    title: 'FORTIFIED Roof Installation',
    tagline: 'IBHS-Certified Roofing for Insurance Discounts',
    description:
      'A FORTIFIED Roof goes beyond a standard install. Sealed roof deck, enhanced fastening patterns, and locked-down edges mean your home is built for hurricane country &mdash; and qualifies for Louisiana wind & hail insurance discounts that often pay back the upgrade many times over. Foret Construction is FORTIFIED certified by the Insurance Institute for Business & Home Safety.',
    highlights: [
      'IBHS FORTIFIED Home™ certified',
      'Sealed roof deck (taped seams)',
      'Enhanced edge fastening',
      'Wind-rated underlayment',
      'Insurance discount eligible',
      'Bronze, Silver, Gold designations',
    ],
    image: '/images/fortified-roof-ibhs-graphic.jpg',
    imageAlt: 'FORTIFIED Roof IBHS certification graphic — first line of defense against severe weather',
    cityPages: [
      { city: 'Raceland', href: '/services/fortified-roof-raceland-la' },
      { city: 'Houma', href: '/services/fortified-roof-houma-la' },
      { city: 'Thibodaux', href: '/services/fortified-roof-thibodaux-la' },
    ],
  },
  {
    id: 'home-additions',
    title: 'Home Additions',
    tagline: 'Add Square Footage Without the Headache',
    description:
      'Screened porches, sunrooms, master suites, in-law additions, and pool houses &mdash; all framed, roofed, and finished to match your existing home. We handle the foundation work, the tie-in, and every trade in between so the addition feels like it was always there.',
    highlights: [
      'Screened patios & porches',
      'Master suite additions',
      'Pool house & cabana builds',
      'In-law / mother-in-law suites',
      'Garage additions',
      'Seamless tie-in to existing home',
    ],
    image: '/images/addition-screened-patio-brick-home.jpg',
    imageAlt: 'Screened patio addition tied into brick home in Lafourche Parish by Foret Construction',
    cityPages: [{ city: 'Raceland', href: '/services/home-additions-raceland-la' }],
  },
  {
    id: 'remodeling',
    title: 'Remodeling',
    tagline: 'Kitchens, Baths & Full Interior Renovations',
    description:
      'Full home remodels, kitchen overhauls, bathroom transformations, and interior updates that bring your home into this decade. Modern finishes, clean lines, and quality work from a local crew &mdash; not a flip-and-bail outfit.',
    highlights: [
      'Kitchen remodels',
      'Bathroom renovations',
      'Flooring & tile work',
      'Custom cabinetry',
      'Interior trim & millwork',
      'Whole-home renovations',
    ],
    image: '/images/remodel-bathroom-marble-vanity-barn-door.jpg',
    imageAlt: 'Modern bathroom remodel with marble vanity, dark cabinetry, and barn door — Lafourche Parish',
    cityPages: [{ city: 'Raceland', href: '/services/remodeling-raceland-la' }],
  },
  {
    id: 'concrete',
    title: 'Concrete & Outdoor Structures',
    tagline: 'Slabs, Driveways, Pool Decks & Patios',
    description:
      'Concrete slab foundations for homes and outbuildings, plus driveways, sidewalks, pool decks, and patios. Properly graded, reinforced with rebar, finished smooth, and poured to last in south Louisiana&apos;s ground conditions.',
    highlights: [
      'Slab foundations',
      'Driveways & sidewalks',
      'Pool decks',
      'Patios & outdoor pads',
      'Outbuilding pads',
      'Rebar-reinforced',
    ],
    image: '/images/concrete-slab-formed-rebar.jpg',
    imageAlt: 'Concrete slab forming with rebar grid in Raceland, LA by Foret Construction',
    cityPages: [],
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Construction & Roofing Services – Foret Construction & Roofing LLC',
  description: 'Construction, roofing, and home improvement services offered by Foret Construction & Roofing LLC in Raceland, LA.',
  url: 'https://www.foretconstruction.co/services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description.replace(/<[^>]+>|&[^;]+;/g, ' ').slice(0, 250),
      provider: {
        '@type': 'LocalBusiness',
        name: 'Foret Construction & Roofing LLC',
        url: 'https://www.foretconstruction.co',
      },
      areaServed: { '@type': 'AdministrativeArea', name: 'Lafourche Parish' },
      url: `https://www.foretconstruction.co/services#${s.id}`,
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-primary py-20 text-white text-center" aria-label="Services page hero">
        <div className="container-wide">
          <p className="section-label text-accent-light">Foret Construction & Roofing LLC</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 uppercase tracking-tight">
            Construction & Roofing Services in Raceland, LA
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            One local crew. Everything from slab to shingle &mdash; new builds, FORTIFIED roofing, additions, remodels, and concrete across Lafourche &amp; Terrebonne parishes.
          </p>
        </div>
      </section>

      {/* ── SERVICE ANCHOR NAV ──────────────────────────────────── */}
      <nav
        className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm"
        aria-label="Jump to service section"
      >
        <div className="container-wide overflow-x-auto">
          <ul className="flex gap-1 py-3 text-sm font-medium whitespace-nowrap">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="px-3 py-1.5 rounded text-gray-600 hover:text-accent hover:bg-gray-100 transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <div className="bg-white">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${i % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}
            aria-labelledby={`service-${service.id}-heading`}
          >
            <div className="container-wide">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={`relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <p className="section-label">{service.tagline}</p>
                  <h2 id={`service-${service.id}-heading`} className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p
                    className="text-gray-600 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {service.cityPages.length > 0 && (
                    <div className="mb-6 p-4 bg-accent/5 border-l-4 border-accent rounded">
                      <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Service-Area Pages</p>
                      <div className="flex flex-wrap gap-2">
                        {service.cityPages.map((cp) => (
                          <Link
                            key={cp.href}
                            href={cp.href}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors px-3 py-1.5 bg-white rounded border border-gray-200 hover:border-accent"
                          >
                            {service.title} in {cp.city} →
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href="/contact" className="btn-accent">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="bg-primary section-padding text-white text-center" aria-labelledby="services-cta-heading">
        <div className="container-wide">
          <h2 id="services-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Call Jacob and the Foret crew for a free walk-through. We&apos;ll help you prioritize and plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-base">
              Schedule a Free Estimate
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

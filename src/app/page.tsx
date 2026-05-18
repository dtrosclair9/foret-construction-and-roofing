import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Foret Construction & Roofing LLC | Raceland, LA Contractor',
  description:
    'Locally owned general contractor & FORTIFIED-certified roofer in Raceland, LA. New home construction, roofing, additions, remodeling & concrete work across Lafourche & Terrebonne parishes. Call (985) 859-5111.',
  openGraph: {
    title: 'Foret Construction & Roofing LLC | Raceland, LA Contractor',
    description:
      "Raceland's trusted general contractor. New home construction, FORTIFIED roofing, additions, remodeling & concrete. Call (985) 859-5111.",
    url: 'https://www.foretconstruction.co',
  },
  alternates: { canonical: 'https://www.foretconstruction.co' },
}

const services = [
  {
    title: 'New Home Construction',
    href: '/services/new-home-construction-raceland-la',
    image: '/images/new-construction-modern-white-brick.jpg',
    alt: 'New home construction with modern white brick exterior in Raceland, LA by Foret Construction',
    description: 'Custom homes built from the slab up. Quality framing, finishing, and craftsmanship across south Louisiana.',
  },
  {
    title: 'FORTIFIED Roof Installation',
    href: '/services/fortified-roof-raceland-la',
    image: '/images/fortified-roof-ibhs-graphic.jpg',
    alt: 'FORTIFIED roof installation graphic – IBHS-certified roofing program in Louisiana',
    description: 'IBHS-certified FORTIFIED roofs that qualify for Louisiana wind/hail insurance discounts. Built for hurricane country.',
  },
  {
    title: 'Roofing',
    href: '/services/roofing-raceland-la',
    image: '/images/roofing-aerial-shingles-raceland.jpg',
    alt: 'Aerial view of new asphalt shingle roof installed by Foret Construction in Raceland, LA',
    description: 'Full roof replacements and repairs. Architectural shingles, metal, and FORTIFIED systems with clean job sites.',
  },
  {
    title: 'Home Additions',
    href: '/services/home-additions-raceland-la',
    image: '/images/addition-screened-patio-brick-home.jpg',
    alt: 'Screened patio addition on brick home in Raceland, LA — built by Foret Construction',
    description: 'Screened porches, sunrooms, master suites, and pool houses. Seamlessly tied into your existing home.',
  },
  {
    title: 'Remodeling',
    href: '/services/remodeling-raceland-la',
    image: '/images/remodel-bathroom-marble-vanity-barn-door.jpg',
    alt: 'Modern bathroom remodel with marble vanity and barn door — Foret Construction, Lafourche Parish',
    description: 'Kitchens, bathrooms, full interior renovations. Modern finishes done right by a local crew you can trust.',
  },
  {
    title: 'Concrete & Outdoor Structures',
    href: '/services#concrete',
    image: '/images/concrete-slab-formed-rebar.jpg',
    alt: 'Concrete slab foundation forming with rebar grid — Foret Construction Raceland, LA',
    description: 'Slab foundations, driveways, pool decks, patios, and outdoor structures. Poured to last.',
  },
]

const reviews = [
  {
    name: 'Colin R.',
    rating: 5,
    service: 'FORTIFIED Roof Replacement',
    text: 'Jacob and his team replaced the roof on our home with a new fortified roof. He made the process super easy for us, got the job done quick, and one of the biggest impressions he left was leaving the job site so CLEAN. 10/10 recommend.',
  },
  {
    name: 'Daniel M.',
    rating: 5,
    service: 'Roof Replacement',
    text: 'Everything on my roof replacement exceeded my expectations from start to finish. Easy to work with, they did a great job, I highly recommend this company.',
  },
  {
    name: 'Beau D.',
    rating: 5,
    service: 'Carport / Patio Construction',
    text: 'Great price. From start to finish, their service was top-notch. They had all the materials delivered in one day and came back the very next day to complete the entire build—super fast turnaround without cutting any corners. The craftsmanship is solid, everything looks clean and professionally done.',
  },
  {
    name: 'Michael & Crystal R.',
    rating: 5,
    service: 'General Contracting',
    text: 'Mr. Foret was exceptional. He went above and beyond to assist me and my children. His professionalism was appreciated and his dedication in completing the job correctly was refreshing. I am extremely satisfied with the work that he completed.',
  },
]

const galleryPreviews = [
  { src: '/images/new-construction-modern-white-brick.jpg', alt: 'New home construction modern white brick exterior — Raceland, LA', span: 'tall' },
  { src: '/images/addition-pool-house-completed.jpg', alt: 'Completed pool house and pool with custom concrete decking — Lafourche Parish', span: 'wide' },
  { src: '/images/roofing-aerial-shingles-raceland.jpg', alt: 'Aerial view of new architectural shingle roof — Raceland, LA', span: 'normal' },
  { src: '/images/remodel-bathroom-marble-vanity-barn-door.jpg', alt: 'Modern bathroom remodel with marble countertop and barn door', span: 'tall' },
  { src: '/images/addition-covered-patio-wood-ceiling.jpg', alt: 'Covered patio addition with wood-plank ceiling — Lafourche Parish', span: 'normal' },
  { src: '/images/concrete-bobcat-grading-pad.jpg', alt: 'Concrete pad grading and finishing with Bobcat — Foret Construction crew', span: 'normal' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor', 'RoofingContractor', 'HomeAndConstructionBusiness'],
      '@id': 'https://www.foretconstruction.co/#business',
      name: 'Foret Construction & Roofing LLC',
      description:
        'Foret Construction & Roofing LLC is a locally owned general contractor in Raceland, LA specializing in new home construction, roofing, FORTIFIED roof installation, home additions, remodeling, and concrete & outdoor structures.',
      url: 'https://www.foretconstruction.co',
      telephone: '+19858595111',
      email: 'foretcr@gmail.com',
      image: 'https://www.foretconstruction.co/images/og-image.jpg',
      logo: 'https://www.foretconstruction.co/images/logo.jpg',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2709 LA-1',
        addressLocality: 'Raceland',
        addressRegion: 'LA',
        postalCode: '70394',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.7235,
        longitude: -90.5954,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '19:00',
        },
      ],
      areaServed: [
        'Raceland, LA', 'Thibodaux, LA', 'Houma, LA', 'Lockport, LA', 'Larose, LA',
        'Cut Off, LA', 'Golden Meadow, LA', 'Galliano, LA', 'Gray, LA', 'Schriever, LA',
        'Bayou Blue, LA', 'Napoleonville, LA',
      ],
      sameAs: ['https://www.facebook.com/profile.php?id=100083615910445'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Construction & Roofing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Home Construction' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roofing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FORTIFIED Roof Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Additions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remodeling' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete & Outdoor Structures' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '4',
        bestRating: '5',
        worstRating: '5',
      },
      review: reviews.map((r) => ({
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
        author: { '@type': 'Person', name: r.name },
        reviewBody: r.text,
      })),
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.foretconstruction.co/#website',
      url: 'https://www.foretconstruction.co',
      name: 'Foret Construction & Roofing LLC',
      publisher: { '@id': 'https://www.foretconstruction.co/#business' },
    },
  ],
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.073 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center" aria-label="Hero">
        <Image
          src="/images/hero.jpg"
          alt="Custom new home construction by Foret Construction & Roofing LLC in Raceland, Louisiana"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="relative z-10 container-wide py-24 text-white">
          <p className="section-label mb-4">Raceland, Louisiana &middot; Lafourche Parish</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl uppercase tracking-tight">
            Built Right.<br />
            <span className="text-accent">Built to Last.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Foret Construction & Roofing LLC is a locally owned general contractor and FORTIFIED-certified roofer serving Raceland, Houma, Thibodaux, and the surrounding parishes. New homes, roofs that hold up to hurricane country, and additions tied in seamlessly &mdash; all with a clean job site and a name you&apos;ll know.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-accent text-base">
              Get a Free Quote
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

      {/* ── TRUST BAR ───────────────────────────────────────────── */}
      <div className="bg-accent" role="region" aria-label="Company highlights">
        <div className="container-wide py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-accent-dark text-white text-center">
            <div className="py-3 sm:py-0 px-4">
              <p className="font-bold text-xl font-serif">FORTIFIED Certified</p>
              <p className="text-sm font-medium opacity-90">IBHS-Approved Roofer</p>
            </div>
            <div className="py-3 sm:py-0 px-4">
              <p className="font-bold text-xl font-serif">Locally Owned</p>
              <p className="text-sm font-medium opacity-90">Raceland, LA Native</p>
            </div>
            <div className="py-3 sm:py-0 px-4">
              <p className="font-bold text-xl font-serif">Free Estimates</p>
              <p className="text-sm font-medium opacity-90">No Pressure, No Obligation</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES (PHOTO CARDS — VARIATION) ──────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label">What We Do</p>
            <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-primary mt-2">
              Construction, Roofing & Home Improvement
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From new builds to FORTIFIED roofs to full renovations &mdash; one local crew, one phone call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.title}
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 aspect-[4/5] block"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2 leading-tight">{service.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed mb-3 opacity-90">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-accent">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORTIFIED HIGHLIGHT ─────────────────────────────────── */}
      <section className="relative section-padding bg-primary text-white overflow-hidden" aria-labelledby="fortified-heading">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/roofing-aerial-shingles-raceland.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Why FORTIFIED?</p>
              <h2 id="fortified-heading" className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight">
                The Roof Is Your Home&apos;s First Line of Defense Against Hurricane Country.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Foret Construction & Roofing LLC is FORTIFIED certified by the Insurance Institute for Business & Home Safety (IBHS). A FORTIFIED Roof goes beyond standard installation &mdash; sealed roof deck, enhanced fastening, and locked-down edges that hold up when the next storm rolls through Lafourche Parish.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Most importantly, FORTIFIED roofs qualify for <strong className="text-accent">Louisiana wind & hail insurance discounts</strong>, often paying for the upgrade many times over.
              </p>
              <Link href="/services/fortified-roof-raceland-la" className="btn-accent">
                Learn About FORTIFIED Roofs
              </Link>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/fortified-roof-ibhs-graphic.jpg"
                alt="FORTIFIED Roof program by IBHS — protecting homes from severe weather"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="reviews-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">What Homeowners Say</p>
            <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              5-Star Service Across South Louisiana
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <StarRow count={5} />
              <span className="text-sm font-semibold text-gray-700">5.0 / 5.0 on Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <article key={review.name} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="font-bold text-primary">{review.name}</p>
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mt-0.5">{review.service}</p>
                  </div>
                  <StarRow count={review.rating} />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=Foret+Construction+%26+Roofing+LLC+Raceland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline-offset-4 hover:underline hover:text-accent transition-colors"
            >
              Read more reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW (MASONRY — VARIATION) ───────────────── */}
      <section className="section-padding bg-white" aria-labelledby="gallery-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label">Recent Work</p>
            <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Real Projects, Real Homeowners
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              A glance at recent work across Lafourche and Terrebonne parishes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryPreviews.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-lg group ${
                  photo.span === 'tall' ? 'row-span-2' : photo.span === 'wide' ? 'col-span-2' : ''
                } ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-accent">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ───────────────────────────────────────── */}
      <section className="section-padding bg-gray-50" aria-labelledby="about-snippet-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-full min-h-[440px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-photo.jpg"
                alt="Brick home with screened patio addition built by Foret Construction in Lafourche Parish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="section-label">About Foret Construction</p>
              <h2 id="about-snippet-heading" className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6 leading-tight">
                A Local Name Behind Every Nail.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Foret Construction & Roofing LLC was founded by <strong className="text-primary">Jacob Foret</strong>, born and raised right here in Raceland. What started as roofing and home improvement has grown into a full general contracting outfit handling new builds, FORTIFIED roof installations, additions, remodels, and concrete work across south Louisiana.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                When you hire Foret Construction, you&apos;re hiring Jacob and a crew that takes pride in clean job sites, honest pricing, and work that holds up &mdash; whether it&apos;s your roof in hurricane season or the kitchen you&apos;ve waited years to remodel.
              </p>
              <Link href="/about" className="btn-accent">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="bg-primary section-padding relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/new-construction-modern-white-brick.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="container-wide text-center text-white relative">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Free, no-obligation estimates across Raceland, Houma, Thibodaux, Lockport, Larose, Cut Off, Galliano, Schriever, Bayou Blue, and the rest of Lafourche &amp; Terrebonne parishes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-base">
              Request a Free Quote
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

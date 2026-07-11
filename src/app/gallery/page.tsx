'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const photos = [
  { src: '/images/new-construction-modern-white-brick.jpg', alt: 'Custom new home construction with modern white brick exterior — Raceland, LA', category: 'New Construction', title: 'Modern White Brick New Build' },
  { src: '/images/new-construction-cottage-brick.jpg', alt: 'Brick cottage-style home with covered front porch — Lafourche Parish', category: 'New Construction', title: 'Brick Cottage with Covered Porch' },
  { src: '/images/roofing-aerial-shingles-raceland.jpg', alt: 'Aerial view of new architectural shingle roof installation — Raceland, LA', category: 'Roofing', title: 'Aerial Architectural Shingle Roof' },
  { src: '/images/roofing-gable-shingle-detail.jpg', alt: 'Detail of new gable shingle roof against white siding — Raceland, LA', category: 'Roofing', title: 'Gable Shingle Detail' },
  { src: '/images/fortified-roof-ibhs-graphic.jpg', alt: 'FORTIFIED Roof IBHS program graphic — protecting homes in hurricane country', category: 'FORTIFIED Roofing', title: 'FORTIFIED Roof Program' },
  { src: '/images/addition-screened-patio-brick-home.jpg', alt: 'Screened patio addition tied into brick home — Lafourche Parish', category: 'Additions', title: 'Screened Patio Addition' },
  { src: '/images/addition-covered-patio-wood-ceiling.jpg', alt: 'Covered patio addition with tongue-and-groove wood ceiling — Lafourche Parish', category: 'Additions', title: 'Covered Patio with Wood Ceiling' },
  { src: '/images/addition-pool-house-completed.jpg', alt: 'Completed pool house and pool with custom concrete decking — Lafourche Parish', category: 'Additions', title: 'Pool House & Pool Build' },
  { src: '/images/addition-pool-house-tyvek-progress.jpg', alt: 'Pool house addition under construction with Tyvek wrap — Lafourche Parish', category: 'Additions', title: 'Pool House In Progress' },
  { src: '/images/remodel-bathroom-marble-vanity-barn-door.jpg', alt: 'Modern bathroom remodel with marble vanity, dark cabinetry, and barn door', category: 'Remodeling', title: 'Modern Bathroom Remodel' },
  { src: '/images/remodel-fireplace-tyvek-progress.jpg', alt: 'Custom interior fireplace surround framing — remodel in progress', category: 'Remodeling', title: 'Custom Fireplace Build' },
  { src: '/images/remodel-vinyl-siding-shutters.jpg', alt: 'Two-story home with vinyl siding and black shutters — exterior update', category: 'Remodeling', title: 'Exterior Siding Update' },
  { src: '/images/remodel-interior-framing-progress.jpg', alt: 'Interior framing for storm-rated room — Foret Construction Raceland', category: 'Remodeling', title: 'Interior Framing Progress' },
  { src: '/images/concrete-slab-formed-rebar.jpg', alt: 'Concrete slab forming with rebar grid — outdoor structure pad', category: 'Concrete', title: 'Slab Foundation Pour' },
  { src: '/images/concrete-bobcat-grading-pad.jpg', alt: 'Concrete pad grading with Bobcat excavator — Foret Construction crew', category: 'Concrete', title: 'Pad Grading & Prep' },
  { src: '/images/concrete-pool-house-framing-pad.jpg', alt: 'Pool house framing on new concrete pad — Lafourche Parish', category: 'Concrete', title: 'Pool House Slab & Framing' },
  { src: '/images/gutters-black-aluminum-white-siding.jpg', alt: 'Black aluminum gutters installed on white siding — Raceland, LA', category: 'Roofing', title: 'Black Aluminum Gutters' },
]

const categories = ['All', 'New Construction', 'Roofing', 'FORTIFIED Roofing', 'Additions', 'Remodeling', 'Concrete']

export default function GalleryPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-primary py-20 text-white text-center" aria-label="Gallery page hero">
        <div className="container-wide">
          <p className="section-label text-accent-light">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 uppercase tracking-tight">
            Project Gallery
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Real projects from real homeowners across Lafourche and Terrebonne parishes. Every photo is work we&apos;re proud to stand behind.
          </p>
        </div>
      </section>

      {/* ── FILTER & GRID ───────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="gallery-grid-heading">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active === cat ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 id="gallery-grid-heading" className="sr-only">
            Project photos {active !== 'All' ? `– ${active}` : ''}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((photo) => (
              <figure
                key={photo.src}
                className="relative group overflow-hidden rounded-xl shadow-sm border border-gray-100"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300" />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-primary via-primary/80 to-transparent">
                  <span className="inline-block text-accent-light text-xs font-semibold uppercase tracking-wider mb-0.5">
                    {photo.category}
                  </span>
                  <p className="text-white text-sm font-semibold font-serif">{photo.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-16">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 section-padding text-center border-t border-gray-200" aria-labelledby="gallery-cta-heading">
        <div className="container-wide">
          <h2 id="gallery-cta-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            Your home could be next. Contact Foret Construction & Roofing LLC for a free estimate today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent text-base">
              Get a Free Quote
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

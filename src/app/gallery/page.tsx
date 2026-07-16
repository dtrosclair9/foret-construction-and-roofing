import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryGrid from '@/components/GalleryGrid'
import { photos } from '@/lib/galleryPhotos'
import { BASE_URL, ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Real roofing, new construction, addition, and remodeling projects from Foret Construction & Roofing LLC across Lafourche and Terrebonne parishes in Louisiana.',
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: 'Project Gallery | Foret Construction & Roofing',
    description:
      'Real roofing, new construction, addition, and remodeling projects across Lafourche and Terrebonne parishes.',
    url: `${BASE_URL}/gallery`,
    images: [ogImage],
  },
}

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Foret Construction & Roofing Project Gallery',
  url: `${BASE_URL}/gallery`,
  description:
    'Photos of completed roofing, new construction, addition, remodeling, and concrete projects by Foret Construction & Roofing LLC in south Louisiana.',
  associatedMedia: photos.map((p) => ({
    '@type': 'ImageObject',
    contentUrl: `${BASE_URL}${p.src}`,
    caption: p.alt,
  })),
}

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

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
      <GalleryGrid />

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

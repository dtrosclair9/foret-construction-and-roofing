'use client'

import { useState } from 'react'
import Image from 'next/image'
import { photos, categories } from '@/lib/galleryPhotos'

export default function GalleryGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
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
  )
}

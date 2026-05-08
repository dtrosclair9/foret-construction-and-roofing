import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.foretconstruction.co'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/financing`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ]

  const landingPages: MetadataRoute.Sitemap = [
    'fortified-roof-raceland-la',
    'fortified-roof-houma-la',
    'fortified-roof-thibodaux-la',
    'new-home-construction-raceland-la',
    'new-home-construction-houma-la',
    'new-home-construction-thibodaux-la',
    'roofing-raceland-la',
    'home-additions-raceland-la',
    'remodeling-raceland-la',
  ].map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...landingPages]
}

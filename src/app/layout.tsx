import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BASE_URL, ogImage } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Foret Construction & Roofing LLC | Raceland, LA Contractor',
    template: '%s | Foret Construction & Roofing',
  },
  description:
    'General contractor & FORTIFIED roofer in Raceland, LA. New home construction, roofing, additions, remodeling & concrete across Lafourche & Terrebonne parishes.',
  keywords: [
    'roofing contractor Raceland LA',
    'FORTIFIED roof Louisiana',
    'new home construction Lafourche Parish',
    'home additions Raceland',
    'remodeling contractor Houma',
    'roofing Thibodaux',
    'general contractor south Louisiana',
    'Foret Construction',
  ],
  authors: [{ name: 'Foret Construction & Roofing LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Foret Construction & Roofing LLC',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Raceland',
    'geo.position': '29.7235;-90.5954',
    'ICBM': '29.7235, -90.5954',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-gray-800 antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

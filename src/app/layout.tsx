import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  metadataBase: new URL('https://www.foretconstruction.co'),
  title: {
    default: 'Foret Construction & Roofing LLC | Raceland, LA Contractor',
    template: '%s | Foret Construction & Roofing',
  },
  description:
    "Foret Construction & Roofing LLC offers new home construction, FORTIFIED roofing, additions, remodeling, and concrete work in Raceland, LA. Serving Lafourche, Terrebonne & surrounding parishes. Call (985) 859-5111.",
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
    url: 'https://www.foretconstruction.co',
    siteName: 'Foret Construction & Roofing LLC',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Foret Construction & Roofing LLC – Raceland, LA',
      },
    ],
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

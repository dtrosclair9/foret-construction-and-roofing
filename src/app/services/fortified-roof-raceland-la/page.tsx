import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'FORTIFIED Roof Installation in Raceland, LA',
  description:
    'IBHS-certified FORTIFIED roof installation in Raceland, LA. Sealed roof deck, enhanced fastening, and Louisiana wind & hail insurance discounts. Free estimates from Foret Construction & Roofing LLC.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/fortified-roof-raceland-la' },
  openGraph: {
    title: 'FORTIFIED Roof Installation in Raceland, LA | Foret Construction',
    description: 'FORTIFIED-certified roofing in Raceland, LA. Insurance discount eligible. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/fortified-roof-raceland-la',
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="FORTIFIED Roof Installation"
      serviceSlug="fortified-roof"
      city="Raceland"
      state="LA"
      county="Lafourche Parish"
      surroundingCities={['Lockport', 'Larose', 'Cut Off', 'Galliano', 'Schriever', 'Bayou Blue', 'Thibodaux']}
      heroImage="/images/fortified-roof-ibhs-graphic.jpg"
      heroAlt="FORTIFIED Roof installation in Raceland, LA — Foret Construction & Roofing LLC, IBHS certified"
      metaTitle="FORTIFIED Roof Installation in Raceland, LA"
      metaDescription="IBHS-certified FORTIFIED roof installation in Raceland, LA."
      intro={[
        'Raceland sits squarely in hurricane country. Every storm season, Lafourche Parish homeowners watch the cone of uncertainty and wonder if this is the year their roof comes off. A FORTIFIED Roof from Foret Construction & Roofing LLC takes that worry off the table.',
        'Foret Construction is FORTIFIED certified by the Insurance Institute for Business & Home Safety (IBHS), which means we install roofs that meet a verified, third-party standard for hurricane resilience. Sealed roof deck, enhanced fastening, locked-down edges, and code-plus underlayment — built to take whatever rolls up Bayou Lafourche.',
        'On top of the storm protection, a FORTIFIED designation can unlock Louisiana wind & hail insurance discounts that often pay back the upgrade cost many times over the life of the roof.',
      ]}
      whyChooseUs={[
        {
          title: 'IBHS-Certified Local Installer',
          body: 'We are FORTIFIED certified by the Insurance Institute for Business & Home Safety. That means your Raceland roof is installed to a verified national standard — and we know the inspection and documentation process inside and out.',
        },
        {
          title: 'Louisiana Insurance Discounts',
          body: 'A FORTIFIED designation makes your home eligible for Louisiana wind & hail insurance discounts. We help you submit the paperwork to capture those savings every renewal — often paying back the upgrade in just a few years.',
        },
        {
          title: 'Built for Lafourche Parish',
          body: 'Living a few feet above sea level in hurricane alley calls for more than the bare minimum. We use ring-shank nails, sealed deck tape, and code-plus underlayment so your roof stays put when it matters.',
        },
        {
          title: 'Clean Job Sites',
          body: 'Customers tell us all the time we leave the property cleaner than we found it. Magnetic nail sweeps, daily cleanup, and respect for your home and yard — every job, every time.',
        },
      ]}
      whatsIncluded={[
        'IBHS FORTIFIED Roof™ designation (Bronze, Silver, or Gold)',
        'Sealed roof deck with taped seams',
        'Enhanced edge & ridge fastening',
        'Ring-shank roofing nails (no staples)',
        'Code-plus synthetic underlayment',
        'Architectural or impact-rated shingles',
        'Drip edge & starter strip on all eaves and rakes',
        'Final inspection & FORTIFIED certificate',
        'Insurance discount documentation support',
        'Manufacturer warranty + workmanship warranty',
      ]}
      closingPitch="Schedule a free, no-obligation FORTIFIED roof inspection in Raceland. Jacob will walk your roof, explain your options, and quote it honestly — no pressure."
    />
  )
}

import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FORTIFIED Roof Installation in Thibodaux, LA',
  description:
    'FORTIFIED roof installation in Thibodaux, LA. IBHS-certified sealed roof deck & enhanced fastening that earn Louisiana wind & hail insurance discounts.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/fortified-roof-thibodaux-la' },
  openGraph: {
    title: 'FORTIFIED Roof Installation in Thibodaux, LA | Foret Construction',
    description: 'FORTIFIED-certified roofing in Thibodaux, LA. Insurance discount eligible. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/fortified-roof-thibodaux-la',
    images: [ogImage],
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="FORTIFIED Roof Installation"
      serviceSlug="fortified-roof"
      city="Thibodaux"
      state="LA"
      county="Lafourche Parish"
      surroundingCities={['Schriever', 'Raceland', 'Lockport', 'Napoleonville', 'Houma', 'Gray']}
      heroImage="/images/fortified-roof-ibhs-graphic.jpg"
      heroAlt="FORTIFIED Roof installation in Thibodaux, LA — Foret Construction & Roofing LLC, IBHS certified"
      metaTitle="FORTIFIED Roof Installation in Thibodaux, LA"
      metaDescription="IBHS-certified FORTIFIED roof installation in Thibodaux, LA."
      intro={[
        'Thibodaux is the parish seat of Lafourche — a mix of historic homes near Nicholls State, established neighborhoods, and newer subdivisions extending toward Schriever. What every one of those homes shares is a roof that has to stand up to Louisiana hurricane season.',
        'A FORTIFIED Roof installed by Foret Construction & Roofing LLC is built to a national, verified hurricane-resilience standard — not just to the local code minimum. We are FORTIFIED certified by the Insurance Institute for Business & Home Safety (IBHS), and we install every roof to that documented spec.',
        'For Thibodaux homeowners, a FORTIFIED designation also unlocks Louisiana wind & hail insurance discounts that put real money back in your pocket every year.',
      ]}
      whyChooseUs={[
        {
          title: 'Built for Lafourche Storms',
          body: 'Even a few miles inland, Thibodaux sees the full force of named storms. FORTIFIED roofs use sealed decks, enhanced edge fastening, and ring-shank nails specifically engineered for hurricane uplift loads — not just standard wind ratings.',
        },
        {
          title: 'Insurance Discount Documentation',
          body: 'After the install, you get the official IBHS FORTIFIED certificate. We help you submit it to your insurance carrier so the wind & hail discount actually shows up on your renewal — every year, for the life of the roof.',
        },
        {
          title: 'A Local Crew, Not a Storm-Chaser',
          body: 'Plenty of out-of-state contractors blow through Thibodaux after a hurricane and disappear. Foret Construction is based in Raceland, has been here for years, and will be here next year. You can stop by, call, or text.',
        },
        {
          title: 'Clean, Respectful Job Sites',
          body: 'Magnetic nail sweeps, daily cleanup, drop cloths around landscaping. Customers tell us all the time we leave the property cleaner than we found it — that matters in Thibodaux neighborhoods where you know your neighbors.',
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
      ]}
      faqs={[
        {
          question: 'Thibodaux is a little inland — is a FORTIFIED roof still worth it?',
          answer:
            'Yes. Being a few miles up Bayou Lafourche does not put Thibodaux out of reach of named storms; the city has seen the full force of recent hurricanes. A FORTIFIED roof’s sealed deck and enhanced fastening protect against the wind and wind-driven rain that reach well inland, and the insurance discount applies whether you are near Nicholls State or out toward Schriever.',
        },
        {
          question: 'Can you install a FORTIFIED roof on an older or historic Thibodaux home?',
          answer:
            'In most cases, yes. FORTIFIED is about the installation method, so as long as the roof deck is sound we can bring an older home up to the standard. On historic homes near downtown Thibodaux we match shingle profiles and rooflines carefully so the upgrade protects the house without changing its character.',
        },
        {
          question: 'How do the insurance discounts work for a Thibodaux FORTIFIED roof?',
          answer:
            'Louisiana requires insurers to discount the wind portion of your premium for a verified FORTIFIED roof. Once your roof is certified, you get a designation certificate to submit to your carrier, and the savings apply at renewal. The dollar amount varies by policy, so call us and we will explain what documentation you will need.',
        },
        {
          question: 'Who handles the permit for a re-roof in the City of Thibodaux?',
          answer:
            'We do. Roofs inside Thibodaux city limits go through the city permit office, while homes in the surrounding unincorporated area go through Lafourche Parish. We pull the right permit either way and coordinate any inspections so you do not have to track it.',
        },
        // TODO(owner): confirm specifics (real insurance discount ranges, typical re-roof timeline and price) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Want a FORTIFIED roof for your Thibodaux home? Call Jacob for a free, no-pressure walk-through and estimate."
    />
  )
}

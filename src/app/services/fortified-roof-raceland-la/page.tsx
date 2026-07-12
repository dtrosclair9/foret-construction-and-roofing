import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FORTIFIED Roof Installation in Raceland, LA',
  description:
    'FORTIFIED roof installation in Raceland, LA. IBHS-certified sealed roof deck & enhanced fastening that earn Louisiana wind & hail insurance discounts.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/fortified-roof-raceland-la' },
  openGraph: {
    title: 'FORTIFIED Roof Installation in Raceland, LA | Foret Construction',
    description: 'FORTIFIED-certified roofing in Raceland, LA. Insurance discount eligible. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/fortified-roof-raceland-la',
    images: [ogImage],
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
      faqs={[
        {
          question: 'What is a FORTIFIED roof, and why does it matter in Raceland?',
          answer:
            'FORTIFIED is a voluntary construction standard from the Insurance Institute for Business & Home Safety (IBHS) that goes beyond the local building code: a sealed roof deck, enhanced fastening, and locked-down edges engineered to keep a roof on during hurricane-force winds. For a Raceland home sitting only a few feet above sea level along Bayou Lafourche, that added margin is the difference between a roof that stays put and one that peels off in the next named storm.',
        },
        {
          question: 'Can a FORTIFIED roof lower my homeowners insurance in Lafourche Parish?',
          answer:
            'It can. Louisiana requires insurers to discount the wind portion of your premium for a verified FORTIFIED roof, and many Lafourche Parish homeowners see savings at each renewal. The exact discount depends on your carrier and policy, so we provide the FORTIFIED certificate and documentation your insurer needs. Call us and we will walk you through what to expect for your home.',
        },
        {
          question: 'Do I need a permit to replace my roof in Raceland?',
          answer:
            'Roof replacements in unincorporated Lafourche Parish generally go through the parish permit office, and we handle that paperwork as part of the job so it does not fall on you. We pull the permit, schedule any required inspections, and keep the FORTIFIED documentation in order for both the parish and your insurer.',
        },
        {
          question: 'How is a FORTIFIED roof different from a standard re-roof after a storm?',
          answer:
            'A standard re-roof puts shingles back the way they were. A FORTIFIED install rebuilds the roof to a stronger, third-party-verified spec (taped and sealed deck, ring-shank nails instead of staples, reinforced edges), then gets inspected and certified. It costs more up front, but it earns the insurance discount and is built to survive the next storm rather than just pass a final inspection. Call us for a free inspection and an honest quote.',
        },
        // TODO(owner): confirm specifics (real insurance discount ranges, typical re-roof price and timeline) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Schedule a free, no-obligation FORTIFIED roof inspection in Raceland. Jacob will walk your roof, explain your options, and quote it honestly — no pressure."
    />
  )
}

import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FORTIFIED Roof Installation in Houma, LA',
  description:
    'FORTIFIED roof installation in Houma, LA. IBHS-certified sealed roof deck & enhanced fastening that earn Louisiana wind & hail insurance discounts. Free quotes.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/fortified-roof-houma-la' },
  openGraph: {
    title: 'FORTIFIED Roof Installation in Houma, LA | Foret Construction',
    description: 'FORTIFIED-certified roofing in Houma, LA. Insurance discount eligible. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/fortified-roof-houma-la',
    images: [ogImage],
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="FORTIFIED Roof Installation"
      serviceSlug="fortified-roof"
      city="Houma"
      state="LA"
      county="Terrebonne Parish"
      surroundingCities={['Schriever', 'Gray', 'Bayou Blue', 'Bourg', 'Chauvin', 'Theriot', 'Raceland', 'Thibodaux']}
      heroImage="/images/fortified-roof-ibhs-graphic.jpg"
      heroAlt="FORTIFIED Roof installation in Houma, LA — Foret Construction & Roofing LLC, IBHS certified"
      metaTitle="FORTIFIED Roof Installation in Houma, LA"
      metaDescription="IBHS-certified FORTIFIED roof installation in Houma, LA."
      intro={[
        "Houma is the heart of Terrebonne Parish — and also one of the most hurricane-exposed cities in the country. Homeowners here have lived through Ida, Laura, Zeta, and a dozen other storms most of the country only sees on the news. A FORTIFIED Roof from Foret Construction & Roofing LLC is built to handle exactly that.",
        "Foret Construction is FORTIFIED certified by the Insurance Institute for Business & Home Safety (IBHS). When we install a FORTIFIED roof in Houma, every step — sealed deck, enhanced fastening, locked-down edges — is documented and verified to a national standard, not just the local code minimum.",
        "And because Terrebonne Parish carriers recognize the FORTIFIED designation, your Houma home becomes eligible for Louisiana wind & hail insurance discounts that often recover the upgrade cost within a few renewals.",
      ]}
      whyChooseUs={[
        {
          title: 'Storm-Ready by Design',
          body: 'Houma takes direct hits. A FORTIFIED roof is engineered specifically for what hurricanes do to a roof — uplift, water intrusion, edge failure. We install to the standard that survives those loads, not just the standard that passes inspection.',
        },
        {
          title: 'IBHS Certified Installer',
          body: 'Foret Construction is FORTIFIED certified by IBHS. That credential matters when your insurance carrier asks for documentation — we deliver the FORTIFIED certificate that unlocks your wind & hail discount.',
        },
        {
          title: 'Lower Insurance Premiums',
          body: 'Most Houma homeowners are paying serious money on wind & hail premiums. A FORTIFIED designation can knock a meaningful chunk off that line item every year — for the life of the roof.',
        },
        {
          title: 'Local, Reachable, Accountable',
          body: 'We are based 25 minutes up the road in Raceland. When something needs attention after the install, you call Jacob — not a call center, not a 1-800 number, not a national chain that has moved on to the next state.',
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
          question: 'Why is a FORTIFIED roof worth it in Houma specifically?',
          answer:
            'Houma takes direct hurricane impacts. Ida, Zeta, and Laura all tested Terrebonne Parish roofs in recent years. A FORTIFIED roof is engineered for exactly what those storms do: wind uplift, edge failure, and water intrusion once shingles start lifting. The sealed deck alone helps keep water out even when the outer layer is damaged, which is often what saves the inside of the house.',
        },
        {
          question: 'Will a FORTIFIED designation help with insurance in Terrebonne Parish?',
          answer:
            'It can. Louisiana requires insurers to discount the wind portion of the premium for a verified FORTIFIED roof, and Terrebonne carriers recognize the designation. With insurance availability tight in coastal parishes, a FORTIFIED roof can also make a home easier to insure in the first place. We hand you the certificate and documentation to submit. Call and we will explain the process.',
        },
        {
          question: 'Can you install a FORTIFIED roof on an older Houma home?',
          answer:
            'In most cases, yes. FORTIFIED is about how the new roof is installed, not the age of the house, so as long as the deck is sound we can strip to the deck, seal and re-fasten it to spec, and certify it. If we find rotted decking during tear-off, which is common in high-humidity Terrebonne homes, we will show you and quote the repair before moving forward.',
        },
        {
          question: 'How soon after a hurricane can you get to my Houma roof?',
          answer:
            'It depends on how widespread the damage is after a given storm. Call us as soon as it is safe and we will get you on the schedule and, if needed, tarp the roof to stop further water intrusion. We serve Houma and all of Terrebonne Parish, so you are not waiting on an out-of-town crew to drive in.',
        },
        // TODO(owner): confirm specifics (real Terrebonne insurance discount ranges, post-storm response window, price ranges) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Get a free FORTIFIED roof estimate for your Houma home. We will walk the roof, explain the FORTIFIED options, and quote it straight — no surprises and no high-pressure pitch."
    />
  )
}

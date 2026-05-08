import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'Roofing Contractor in Raceland, LA',
  description:
    'Roof replacement and repair in Raceland, LA by Foret Construction & Roofing LLC. Architectural shingles, metal roofing, FORTIFIED systems, storm damage repair. Free estimates.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/roofing-raceland-la' },
  openGraph: {
    title: 'Roofing Contractor in Raceland, LA | Foret Construction',
    description: 'Roof replacement, repairs, and FORTIFIED roofing in Raceland, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/roofing-raceland-la',
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="Roofing"
      serviceSlug="roofing"
      city="Raceland"
      state="LA"
      county="Lafourche Parish"
      surroundingCities={['Lockport', 'Larose', 'Cut Off', 'Galliano', 'Schriever', 'Bayou Blue', 'Thibodaux', 'Houma']}
      heroImage="/images/roofing-aerial-shingles-raceland.jpg"
      heroAlt="New architectural shingle roof installation in Raceland, LA by Foret Construction & Roofing LLC"
      metaTitle="Roofing Contractor in Raceland, LA"
      metaDescription="Roof replacement and repair in Raceland, LA."
      intro={[
        'A roof is the most important thing standing between your home and a hurricane. In Raceland, that is not theoretical — every storm season the roof is what gets tested first. Foret Construction & Roofing LLC handles full roof replacements, storm damage repair, and FORTIFIED-grade installs across Lafourche Parish.',
        'Roofing is where Foret Construction started, and it is still the heart of what we do. We install architectural asphalt shingles, metal roofing, and IBHS FORTIFIED systems — and we do it with a crew that leaves your job site cleaner than they found it.',
        'Whether you need a quick repair after a storm or a full replacement with insurance involved, we will walk the roof, give you a straight assessment, and quote it honestly.',
      ]}
      whyChooseUs={[
        {
          title: 'FORTIFIED Certified',
          body: 'Foret Construction is FORTIFIED certified by the Insurance Institute for Business & Home Safety (IBHS). That means we can install roofs that meet the elevated FORTIFIED standard and unlock Louisiana wind & hail insurance discounts.',
        },
        {
          title: 'Insurance Claim Support',
          body: 'We are happy to meet your adjuster on the roof, document storm damage, and help walk the claim through. We have done it many times — for many homeowners across Raceland and the surrounding parishes.',
        },
        {
          title: 'Clean Job Sites',
          body: 'Magnetic nail sweeps, drop cloths, daily cleanup. Customers tell us all the time we leave their property cleaner than we found it. That is not an accident — it is a standard.',
        },
        {
          title: 'Local, Reliable, Reachable',
          body: 'We are based in Raceland. Not a national chain, not a storm chaser. When you call Foret Construction, you get Jacob, every time.',
        },
      ]}
      whatsIncluded={[
        'Free roof inspection & estimate',
        'Tear-off and disposal of old roofing',
        'Decking inspection and replacement (as needed)',
        'Synthetic underlayment',
        'Architectural asphalt shingles or metal',
        'New flashing, drip edge, ridge vent',
        'Manufacturer warranty + workmanship warranty',
        'Storm damage / insurance claim support',
        'FORTIFIED upgrade option available',
        'Magnetic nail sweep & full job site cleanup',
      ]}
      closingPitch="Need a roof in Raceland? Call us for a free, on-the-roof inspection and estimate. We will tell you straight what you need — and what you don't."
    />
  )
}

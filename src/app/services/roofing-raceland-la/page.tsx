import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Roofing Contractor in Raceland, LA',
  description:
    'Roof replacement & repair in Raceland, LA. Architectural shingles, metal roofing, FORTIFIED systems & storm damage repair. Free estimates from Foret Construction.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/roofing-raceland-la' },
  openGraph: {
    title: 'Roofing Contractor in Raceland, LA | Foret Construction',
    description: 'Roof replacement, repairs, and FORTIFIED roofing in Raceland, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/roofing-raceland-la',
    images: [ogImage],
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
      heroImage="/images/roof-replacement-complete-aerial-front.jpg"
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
        'Storm damage / insurance claim support',
        'FORTIFIED upgrade option available',
        'Magnetic nail sweep & full job site cleanup',
      ]}
      faqs={[
        {
          question: 'How do I know if my Raceland roof needs repair or full replacement?',
          answer:
            'The honest answer comes from getting on the roof. Isolated storm damage or a few missing shingles is often a repair; widespread granule loss, multiple leaks, aging shingles, or storm damage across most of the roof usually points to replacement. We walk your roof, show you what we find, and give you a straight recommendation rather than defaulting to the bigger job.',
        },
        {
          question: 'What roofing materials do you install?',
          answer:
            'We install architectural asphalt shingles, metal roofing, and full IBHS FORTIFIED roof systems. Asphalt shingles are the most common choice in Raceland for cost and looks; metal lasts longer and sheds water fast; FORTIFIED is the choice when storm resilience and insurance discounts are the priority. We help you weigh the trade-offs for your home.',
        },
        {
          question: 'Can you help with a storm damage insurance claim?',
          answer:
            'We can document the damage and provide the assessment and photos you need for your claim, and work within your adjuster’s scope during the repair. We do not file the claim for you or promise a specific outcome, but we make sure the damage is properly documented so nothing gets missed. Call us and we will explain the process.',
        },
        {
          question: 'Do you offer FORTIFIED roofing in Raceland?',
          answer:
            'Yes. Foret Construction is FORTIFIED certified by the IBHS, so we can install roofs to the elevated FORTIFIED standard (sealed deck, enhanced fastening, certified and documented), which also unlocks the Louisiana wind and hail insurance discount. It is one of the main reasons homeowners in hurricane country choose us.',
        },
        {
          question: 'How long does a roof replacement take?',
          answer:
            'Most residential re-roofs are a short project once we start, but the exact time depends on the size and pitch of the roof, the material, and the weather during storm season. We give you a realistic window when we quote it and keep you posted if weather moves the schedule.',
        },
        {
          question: 'Do you clean up after the job?',
          answer:
            'Yes, and customers mention it constantly. We run magnetic sweeps for nails, clean up daily, and haul off the old roofing. The goal is to leave your yard and driveway cleaner than we found them, so you are not finding roofing nails in the grass months later.',
        },
        {
          question: 'What areas around Raceland do you cover for roofing?',
          answer:
            'We roof throughout Lafourche Parish and into Terrebonne: Raceland, Lockport, Larose, Cut Off, Galliano, Schriever, Bayou Blue, Thibodaux, and Houma. Being local means we can get to storm-damaged roofs quickly instead of you waiting on a crew from out of the area.',
        },
        // TODO(owner): confirm specifics (real repair vs. replacement price ranges, typical re-roof timeline in days, warranty terms) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Need a roof in Raceland? Call us for a free, on-the-roof inspection and estimate. We will tell you straight what you need — and what you don't."
    />
  )
}

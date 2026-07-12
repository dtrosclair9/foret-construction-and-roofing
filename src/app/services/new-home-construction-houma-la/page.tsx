import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'New Home Construction in Houma, LA',
  description:
    'Custom new home construction in Houma, LA. A full-service general contractor building slab to shingle, with a FORTIFIED roof option. Free, honest estimates.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/new-home-construction-houma-la' },
  openGraph: {
    title: 'New Home Construction in Houma, LA | Foret Construction',
    description: 'Custom homes built from slab to shingle in Houma, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/new-home-construction-houma-la',
    images: [ogImage],
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="New Home Construction"
      serviceSlug="new-home-construction"
      city="Houma"
      state="LA"
      county="Terrebonne Parish"
      surroundingCities={['Schriever', 'Gray', 'Bayou Blue', 'Bourg', 'Chauvin', 'Theriot', 'Raceland', 'Thibodaux']}
      heroImage="/images/new-construction-modern-white-brick.jpg"
      heroAlt="New custom home construction in Houma, LA by Foret Construction & Roofing LLC"
      metaTitle="New Home Construction in Houma, LA"
      metaDescription="Custom new home construction in Houma, LA."
      intro={[
        'Houma is one of the busiest residential markets in south Louisiana — and also one of the most demanding. New homes here have to stand up to direct hurricane impacts, work with high water tables, and still feel like the kind of home you actually want to live in. Foret Construction & Roofing LLC builds them.',
        'We are a full-service general contractor based 25 minutes up the road in Raceland. New construction is what we do, every step of it: slab pour, framing, roofing, exterior, interior, finishes. One contractor handles the whole build — you call us, not six different subs.',
        'Every new home we build in Houma can be roofed to the IBHS FORTIFIED standard, which gives you storm-ready construction and Louisiana wind & hail insurance discounts from the day you move in.',
      ]}
      whyChooseUs={[
        {
          title: 'Terrebonne Parish Experience',
          body: 'We know what Houma soil and storm conditions demand from a new build. Pier heights, slab specs, hurricane-rated sheathing and fastening — built into the plan from day one, not bolted on at the end.',
        },
        {
          title: 'FORTIFIED-Ready Construction',
          body: 'Most Houma homeowners are paying real money on wind & hail premiums. Roof every new build to the FORTIFIED standard and that line item drops, every renewal, for as long as you own the house.',
        },
        {
          title: 'Straight Pricing',
          body: 'A new home is a major financial decision. We quote it line by line, explain the numbers, and stick to the budget unless you change the scope. No hidden allowances that explode at the end.',
        },
        {
          title: 'Local, Hands-On Owner',
          body: 'Jacob walks the job. You will not get rotated through three different project managers and a customer service hotline. The same person who quoted your build is the one running it.',
        },
      ]}
      whatsIncluded={[
        'Site preparation & slab foundation',
        'Framing & sheathing (hurricane-rated)',
        'Roofing (FORTIFIED option available)',
        'Exterior siding, brick, or stucco',
        'Windows & exterior doors',
        'Plumbing, electrical, HVAC rough-in',
        'Interior framing & insulation',
        'Drywall, paint, trim & millwork',
        'Flooring, cabinetry, fixtures',
        'Final walk-through & punch list',
      ]}
      faqs={[
        {
          question: 'Is Foret Construction local to Houma?',
          answer:
            'We are based about 25 minutes up the road in Raceland and build throughout Terrebonne Parish, including Houma. You get a nearby contractor who knows the parish soil, storm exposure, and permit process, not an out-of-town builder who disappears after the slab is poured.',
        },
        {
          question: 'How do you build a new Houma home to handle hurricanes?',
          answer:
            'Houma’s direct storm exposure gets designed in from the start: hurricane-rated sheathing and fastening, an IBHS FORTIFIED roof option, and slab and pier specs suited to Terrebonne’s high water table. Storm resilience is built into the structure, not added as an upgrade at the end.',
        },
        {
          question: 'Can building new in Houma help with insurance?',
          answer:
            'It can. A new home built with a FORTIFIED roof qualifies for the Louisiana wind and hail insurance discount from day one, and newer construction to current wind codes is often easier to insure in coastal Terrebonne Parish than an older home. We provide the FORTIFIED documentation your carrier needs. Call for details.',
        },
        {
          question: 'Do you handle the permits and inspections for a Houma build?',
          answer:
            'Yes. New construction in Terrebonne Parish runs through the parish permit and inspection process, and we manage that as part of the build: permits, scheduled inspections, and code sign-offs, so you are not chasing paperwork while trying to plan a move.',
        },
        // TODO(owner): confirm specifics (real price-per-square-foot range, typical build timeline, insurance discount amount) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Planning a new build in Houma? Reach out for a free consultation. We will sit down with your plans (or sketch) and quote it honestly — line by line."
    />
  )
}

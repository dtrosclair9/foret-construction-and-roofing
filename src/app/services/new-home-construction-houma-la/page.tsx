import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'New Home Construction in Houma, LA',
  description:
    'Custom new home construction in Houma, LA. Full-service general contractor — slab to shingle. FORTIFIED roof option included. Free estimates from Foret Construction & Roofing LLC.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/new-home-construction-houma-la' },
  openGraph: {
    title: 'New Home Construction in Houma, LA | Foret Construction',
    description: 'Custom homes built from slab to shingle in Houma, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/new-home-construction-houma-la',
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
      closingPitch="Planning a new build in Houma? Reach out for a free consultation. We will sit down with your plans (or sketch) and quote it honestly — line by line."
    />
  )
}

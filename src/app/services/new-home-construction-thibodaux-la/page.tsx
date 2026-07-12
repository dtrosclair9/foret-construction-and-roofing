import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'New Home Construction in Thibodaux, LA',
  description:
    'Custom new home construction in Thibodaux, LA. A full-service general contractor building slab to shingle, with a FORTIFIED roof option. Free estimates.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/new-home-construction-thibodaux-la' },
  openGraph: {
    title: 'New Home Construction in Thibodaux, LA | Foret Construction',
    description: 'Custom homes built from slab to shingle in Thibodaux, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/new-home-construction-thibodaux-la',
    images: [ogImage],
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="New Home Construction"
      serviceSlug="new-home-construction"
      city="Thibodaux"
      state="LA"
      county="Lafourche Parish"
      surroundingCities={['Schriever', 'Raceland', 'Lockport', 'Napoleonville', 'Houma', 'Gray']}
      heroImage="/images/new-construction-modern-white-brick.jpg"
      heroAlt="New custom home construction in Thibodaux, LA by Foret Construction & Roofing LLC"
      metaTitle="New Home Construction in Thibodaux, LA"
      metaDescription="Custom new home construction in Thibodaux, LA."
      intro={[
        'Thibodaux is one of those rare south Louisiana cities that feels both established and growing. New subdivisions extend toward Schriever and Highway 20, while infill lots open up in older neighborhoods near Nicholls State. Whichever lot you are building on, Foret Construction & Roofing LLC handles the whole build.',
        'We are a Lafourche Parish general contractor that takes new construction projects from slab to shingle — framing, roofing, exterior, interior, every trade in between. One contractor responsible for the whole build, one phone number when you have a question.',
        'Every new home we build in Thibodaux can be finished with an IBHS FORTIFIED roof — locking in hurricane-grade roof construction and Louisiana wind & hail insurance discounts from day one of ownership.',
      ]}
      whyChooseUs={[
        {
          title: 'Built to Lafourche Standards',
          body: 'Hurricane-rated framing and sheathing, slab specs that account for local soil, and a FORTIFIED roof option mean your Thibodaux home is built for what south Louisiana actually throws at it.',
        },
        {
          title: 'Custom Floor Plans Welcome',
          body: 'You bring the plan, sketch, or just a list of must-haves. We will work the layout and budget to land on a home that fits your family, your lot, and your number — not a stock plan we are trying to sell off the shelf.',
        },
        {
          title: 'Single Point of Accountability',
          body: 'Whole build under one contractor. The framers, roofers, and finish trades all answer to Foret Construction. Schedule slips, change orders, punch list — one place to bring it.',
        },
        {
          title: 'Right Down the Highway',
          body: 'We are based 20 minutes south in Raceland. New build issues do not wait for business hours, and we do not make you call a 1-800 line to leave a message.',
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
          question: 'Can you build on both new subdivision lots and infill lots in Thibodaux?',
          answer:
            'Yes. We build on new subdivision lots out toward Schriever and Highway 20 as well as infill lots in established neighborhoods near Nicholls State. Older infill lots sometimes come with utility, drainage, or setback quirks, so we assess the specific site before finalizing the plan.',
        },
        {
          question: 'Will a new Thibodaux home come with a FORTIFIED roof?',
          answer:
            'It can. Every home we build can be finished with an IBHS FORTIFIED roof. Building it in from the start locks in hurricane-grade roof construction and the Louisiana wind and hail insurance discount from your first day of ownership, which is far simpler than retrofitting later.',
        },
        {
          question: 'Who pulls the permits for new construction in Thibodaux?',
          answer:
            'We do. A build inside Thibodaux city limits goes through the city permit office; a lot in the surrounding unincorporated area goes through Lafourche Parish. We handle whichever applies, along with the inspections, as part of the project.',
        },
        {
          question: 'How long does it take to build a new home in Thibodaux?',
          answer:
            'Timelines depend on size, design complexity, weather, and how quickly selections and permits come together, so we will not quote a specific number of days up front. We will give you a realistic schedule once we have reviewed your plans, and we keep you updated as the build progresses.',
        },
        // TODO(owner): confirm specifics (typical build timeline in months, price-per-square-foot range) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Building in Thibodaux? Call Jacob for a no-pressure consultation. We will go over plans, scope, and pricing in plain English."
    />
  )
}

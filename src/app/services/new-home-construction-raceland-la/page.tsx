import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'New Home Construction in Raceland, LA',
  description:
    'Custom new home construction in Raceland, LA. Full-service general contractor handling slab to shingle. FORTIFIED roof option included. Free estimates from Foret Construction & Roofing LLC.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/new-home-construction-raceland-la' },
  openGraph: {
    title: 'New Home Construction in Raceland, LA | Foret Construction',
    description: 'Custom homes built from slab to shingle in Raceland, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/new-home-construction-raceland-la',
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="New Home Construction"
      serviceSlug="new-home-construction"
      city="Raceland"
      state="LA"
      county="Lafourche Parish"
      surroundingCities={['Lockport', 'Larose', 'Cut Off', 'Galliano', 'Schriever', 'Bayou Blue', 'Thibodaux']}
      heroImage="/images/new-construction-modern-white-brick.jpg"
      heroAlt="New custom home construction with modern white brick exterior in Raceland, LA by Foret Construction"
      metaTitle="New Home Construction in Raceland, LA"
      metaDescription="Custom new home construction in Raceland, LA."
      intro={[
        'Building a new home in Raceland is one of the biggest decisions a family makes. You need a contractor who knows Lafourche Parish soil, knows what hurricanes do to a structure, and can be reached when you have a question. Foret Construction & Roofing LLC is that contractor.',
        'We handle new home construction from the slab pour through final trim — framing, roofing, exterior, mechanicals, interior finishes, all the way to handing you the keys. One number to call, one crew responsible for the whole build.',
        'Because we are FORTIFIED certified, every new home we build can be roofed to the IBHS FORTIFIED standard — locking in storm protection and Louisiana wind & hail insurance discounts from day one.',
      ]}
      whyChooseUs={[
        {
          title: 'One Contractor, Whole Build',
          body: 'Slab to shingle, framing to finishing. You are not coordinating six different subs and chasing schedules. Foret Construction owns the build, the schedule, and the result.',
        },
        {
          title: 'Hurricane-Country Construction',
          body: 'Lafourche Parish gets hammered. We frame, sheath, and roof to standards that hold up to it — including FORTIFIED roof option built right into the new construction package.',
        },
        {
          title: 'Custom Floor Plans',
          body: 'Bring us your plan, your sketch, your Pinterest board, or just an idea. We will work through layout, square footage, and budget to land on a build that fits how your family actually lives.',
        },
        {
          title: 'Honest Pricing, Honest Timeline',
          body: 'No bait-and-switch line items, no mysterious change orders. The number we quote is the number you build to — and we tell you straight when something does shift, and why.',
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
      closingPitch="Thinking about building in Raceland? Call Jacob for a free consultation. We will walk through what you want, what it takes, and what it costs — straight up."
    />
  )
}

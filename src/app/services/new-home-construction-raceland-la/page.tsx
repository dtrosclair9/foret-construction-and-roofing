import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'New Home Construction in Raceland, LA',
  description:
    'Custom new home construction in Raceland, LA. A full-service general contractor building slab to shingle, with a FORTIFIED roof option. Free, honest estimates.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/new-home-construction-raceland-la' },
  openGraph: {
    title: 'New Home Construction in Raceland, LA | Foret Construction',
    description: 'Custom homes built from slab to shingle in Raceland, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/new-home-construction-raceland-la',
    images: [ogImage],
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
      faqs={[
        {
          question: 'Does Foret Construction build a new home start to finish, or just the shell?',
          answer:
            'Start to finish. We take a Raceland build from slab pour through framing, roofing, exterior, mechanicals, interior finishes, and final trim, with one contractor responsible for the whole project. You call one number for the entire build instead of coordinating separate subs yourself.',
        },
        {
          question: 'Can a new home in Raceland be built with a FORTIFIED roof from day one?',
          answer:
            'Yes, and it is one of the best times to do it. Because we are FORTIFIED certified, we can build the roof to the IBHS standard as part of the original construction, locking in hurricane protection and the Louisiana wind and hail insurance discount before you ever move in, rather than upgrading later.',
        },
        {
          question: 'What should I know about building on a Raceland or Lafourche Parish lot?',
          answer:
            'Low elevation and soil conditions along Bayou Lafourche mean slab specs, pier heights, and drainage have to be planned up front, and many areas carry flood-zone requirements that affect how high you build. We factor local soil, elevation, and parish permitting into the plan from day one. Call us to talk through your specific lot.',
        },
        {
          question: 'How much does it cost to build a new home in Raceland?',
          answer:
            'It depends heavily on square footage, finishes, and site conditions, so there is no honest one-size answer. We will sit down, look at your plans and lot, and give you a detailed quote rather than a number that changes later.',
        },
        // TODO(owner): confirm specifics (real price-per-square-foot range, typical build timeline) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Thinking about building in Raceland? Call Jacob for a free consultation. We will walk through what you want, what it takes, and what it costs — straight up."
    />
  )
}

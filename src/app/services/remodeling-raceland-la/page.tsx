import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Remodeling Contractor in Raceland, LA',
  description:
    'Kitchen, bathroom & full interior remodeling in Raceland, LA from Foret Construction & Roofing. A local, FORTIFIED-certified crew with clean job sites.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/remodeling-raceland-la' },
  openGraph: {
    title: 'Remodeling Contractor in Raceland, LA | Foret Construction',
    description: 'Kitchen, bathroom, and full home remodels in Raceland, LA. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/remodeling-raceland-la',
    images: [ogImage],
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="Remodeling"
      serviceSlug="remodeling"
      city="Raceland"
      state="LA"
      county="Lafourche Parish"
      surroundingCities={['Lockport', 'Larose', 'Cut Off', 'Galliano', 'Schriever', 'Bayou Blue', 'Thibodaux', 'Houma']}
      heroImage="/images/remodel-bathroom-marble-vanity-barn-door.jpg"
      heroAlt="Modern bathroom remodel with marble vanity and barn door in Raceland, LA — Foret Construction"
      metaTitle="Remodeling Contractor in Raceland, LA"
      metaDescription="Kitchen, bathroom, and full home remodels in Raceland, LA."
      intro={[
        "Some homes in Raceland have been in the family for decades — and the kitchen, bath, and floors usually show it. Foret Construction & Roofing LLC remodels them. Kitchens, bathrooms, full interior renovations, and exterior updates that bring a Lafourche Parish home into this decade without losing the parts that made it home.",
        "We handle the whole remodel under one contractor: demo, framing changes, plumbing and electrical updates, drywall, tile, cabinetry, trim, paint, flooring. Modern finishes and careful craftsmanship — not a flip-and-bail rush job.",
        "Most of our remodel work in Raceland comes from referrals. The neighbor saw the bathroom, the cousin saw the kitchen, and that is how the next call comes in. We work hard to keep it that way.",
      ]}
      whyChooseUs={[
        {
          title: 'Kitchens & Baths, Start to Finish',
          body: 'Cabinetry, countertops, tile, plumbing, electrical, lighting — all under one roof. We coordinate the trades so you are not stuck living in dust for an extra month while a sub does not show up.',
        },
        {
          title: 'Honest Scope, Honest Quote',
          body: 'Remodels are where bad contractors hide change orders. We walk the project, identify the unknowns up front, and quote a real number — including realistic allowances for materials.',
        },
        {
          title: 'Local References',
          body: 'Almost every remodel we do in Raceland comes from a referral. Ask around — chances are someone you know has had us in their kitchen or bathroom.',
        },
        {
          title: 'Clean & Respectful',
          body: 'You are living in the house while we work. Drop cloths, daily cleanup, dust containment. We treat your home like ours — because the next job depends on it.',
        },
      ]}
      whatsIncluded={[
        'Free in-home consultation',
        'Demo & disposal',
        'Plumbing & electrical updates',
        'Framing changes (walls, doorways)',
        'Drywall, tile, paint',
        'Custom cabinetry & countertops',
        'Flooring (tile, LVP, hardwood)',
        'Trim, millwork, doors',
        'Lighting & fixtures',
        'Final cleanup & walk-through',
      ]}
      closingPitch="Ready to remodel in Raceland? Call Jacob to schedule a free, no-pressure walk-through. We will look at the space, talk through the vision, and quote it honestly."
    />
  )
}

import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'Home Additions in Raceland, LA',
  description:
    'Home additions, screened porches, sunrooms, master suites, and pool houses in Raceland, LA. Foundation, framing, roofing, finishes — all under one contractor. Foret Construction & Roofing LLC.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/home-additions-raceland-la' },
  openGraph: {
    title: 'Home Additions in Raceland, LA | Foret Construction',
    description: 'Home additions in Raceland, LA — screened porches, master suites, pool houses. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/home-additions-raceland-la',
  },
}

export default function Page() {
  return (
    <ServiceLandingPage
      service="Home Additions"
      serviceSlug="home-additions"
      city="Raceland"
      state="LA"
      county="Lafourche Parish"
      surroundingCities={['Lockport', 'Larose', 'Cut Off', 'Galliano', 'Schriever', 'Bayou Blue', 'Thibodaux', 'Houma']}
      heroImage="/images/addition-screened-patio-brick-home.jpg"
      heroAlt="Screened patio addition tied into brick home in Raceland, LA — Foret Construction & Roofing LLC"
      metaTitle="Home Additions in Raceland, LA"
      metaDescription="Home additions and pool houses in Raceland, LA."
      intro={[
        "Outgrowing your home in Raceland? Adding square footage is almost always cheaper than buying and moving — especially in Lafourche Parish where good lots and family land are not something you walk away from. Foret Construction & Roofing LLC builds home additions that feel like they were always there.",
        "We handle screened porches, sunrooms, master suite additions, in-law suites, garage additions, and full pool houses. From slab pour to roof tie-in to interior finish, one contractor owns the whole project.",
        "Where a lot of additions look bolted on, ours blend. Roof pitch, siding, brick match, trim profiles — all considered up front so the finished addition reads as part of the original house.",
      ]}
      whyChooseUs={[
        {
          title: 'Seamless Tie-In',
          body: 'Most additions look like an afterthought because they are. We plan the foundation, roof line, siding, and trim to match the existing structure so the addition looks like part of the original house.',
        },
        {
          title: 'Whole Job, One Contractor',
          body: 'Foundation, framing, roofing, electrical, plumbing, HVAC tie-in, drywall, paint, trim. Foret Construction handles all of it — you are not chasing six different subs.',
        },
        {
          title: 'Pool Houses & Outdoor Living',
          body: 'Covered patios, full pool houses with bathrooms, outdoor kitchens. We have built them across Lafourche Parish and know how to get them permitted, framed, and finished without surprises.',
        },
        {
          title: 'Honest Quote, Real Timeline',
          body: 'Additions need an honest scope and an honest timeline. We will tell you up front what is involved, what permits are needed, and how long it will actually take — not the timeline that wins the bid.',
        },
      ]}
      whatsIncluded={[
        'Slab or pier foundation',
        'Framing matched to existing structure',
        'Roof tie-in (FORTIFIED option available)',
        'Exterior siding/brick to match',
        'Windows & exterior doors',
        'Electrical, plumbing, HVAC integration',
        'Insulation & drywall',
        'Interior trim, paint, flooring',
        'Final inspection & walk-through',
        'Cleanup & punch list completion',
      ]}
      closingPitch="Thinking about adding on in Raceland? Call Jacob for a free walk-through. We will look at the existing structure, talk through what you want, and quote it straight."
    />
  )
}

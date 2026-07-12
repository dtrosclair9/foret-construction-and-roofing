import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Home Additions in Raceland, LA',
  description:
    'Home additions in Raceland, LA: screened porches, sunrooms, master suites & pool houses. Foundation to finishes under one local contractor. Free estimates.',
  alternates: { canonical: 'https://www.foretconstruction.co/services/home-additions-raceland-la' },
  openGraph: {
    title: 'Home Additions in Raceland, LA | Foret Construction',
    description: 'Home additions in Raceland, LA — screened porches, master suites, pool houses. Call (985) 859-5111.',
    url: 'https://www.foretconstruction.co/services/home-additions-raceland-la',
    images: [ogImage],
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
      faqs={[
        {
          question: 'What kinds of home additions do you build in Raceland?',
          answer:
            'We build screened porches, sunrooms, master suite and in-law suite additions, garage additions, and full pool houses. If you are adding square footage to a Raceland home rather than moving, we can take it from foundation to finished interior under one contractor.',
        },
        {
          question: 'Will an addition match my existing house, or look bolted on?',
          answer:
            'Matching is the whole point. We plan roof pitch, siding, and brick or trim profiles up front so the addition reads as part of the original house. A lot of additions look like an afterthought because the tie-in was not planned; we design that seam out from the start.',
        },
        {
          question: 'Do I need a permit for a home addition in Lafourche Parish?',
          answer:
            'Almost always, yes. Adding square footage or altering the footprint triggers parish permitting and inspections, and additions have to meet current structural and, in many areas, flood-elevation requirements. We handle the permit and inspection process as part of the project so it is not on you to navigate.',
        },
        {
          question: 'Is it cheaper to add on than to buy a bigger house?',
          answer:
            'Often it is, especially in Raceland where family land and good lots are not something people want to walk away from. Adding the space you need can cost less than buying, moving, and taking on a new mortgage, but it depends on the scope, so we give you a real quote to compare against.',
        },
        {
          question: 'Can you tie the addition’s roof into my existing or FORTIFIED roof?',
          answer:
            'Yes. Roofing is our core trade, so tying an addition’s roof cleanly into the existing one (matching pitch, shingles, and flashing so it does not leak at the seam) is exactly the kind of detail we handle. If your home has or is getting a FORTIFIED roof, we build the addition’s roof to work with it.',
        },
        {
          question: 'How long does a home addition take?',
          answer:
            'It depends on the size and complexity. A screened porch is a much shorter project than a full master suite with plumbing and electrical. We give you a realistic timeline once we have scoped the design, and one crew stays on it start to finish.',
        },
        {
          question: 'Do you handle the interior finish, or just the shell?',
          answer:
            'The whole thing. Slab or floor framing, walls, and roof tie-in, then drywall, electrical, plumbing, flooring, trim, and paint. The addition is move-in ready when we are done, not a shell you have to hire someone else to finish.',
        },
        // TODO(owner): confirm specifics (real per-square-foot or per-project price ranges, typical timelines by addition type) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Thinking about adding on in Raceland? Call Jacob for a free walk-through. We will look at the existing structure, talk through what you want, and quote it straight."
    />
  )
}

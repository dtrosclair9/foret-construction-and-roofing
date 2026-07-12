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
      faqs={[
        {
          question: 'What types of remodels does Foret Construction handle in Raceland?',
          answer:
            'Kitchens, bathrooms, full interior renovations, and exterior updates. Whether it is a single bathroom or gutting and reworking the whole interior of a family home that has been in Raceland for decades, we handle demo through final finishes under one contractor.',
        },
        {
          question: 'Can I stay in my house during the remodel?',
          answer:
            'Often, yes, depending on how much of the home is under construction at once. For a single kitchen or bath, most families stay put; for a full-interior renovation it can be easier to be out during the messiest phases. We set expectations up front and sequence the work to keep your home livable where we can.',
        },
        {
          question: 'Do you handle plumbing and electrical, or do I hire that separately?',
          answer:
            'We coordinate the whole remodel: demo, framing changes, plumbing and electrical updates, drywall, tile, cabinetry, trim, paint, and flooring. You are not lining up separate trades yourself or living in dust an extra month because a sub did not show. One contractor owns the schedule.',
        },
        {
          question: 'Will I need a permit to remodel my Raceland home?',
          answer:
            'It depends on the scope. Cosmetic updates usually do not, but moving walls, changing the footprint, or altering plumbing and electrical typically require Lafourche Parish permits and inspections. We tell you what your project needs and pull the permits as part of the job.',
        },
        {
          question: 'How much does a kitchen or bathroom remodel cost?',
          answer:
            'It ranges widely based on size, layout changes, and the finishes you choose. The same bathroom can be a modest refresh or a full gut. Rather than quote a number that changes later, we look at your space and selections and give you a real, detailed estimate.',
        },
        {
          question: 'How long does a remodel take?',
          answer:
            'A bathroom is a shorter project than a full kitchen or whole-interior renovation, and material lead times and change orders affect the schedule. We give you a realistic timeline when we quote it and keep the trades coordinated so it does not drag.',
        },
        {
          question: 'Why do most of your remodel jobs come from referrals?',
          answer:
            'Because remodels are personal. A neighbor sees the finished bathroom, a cousin sees the kitchen, and that is how the next call comes in. We work to earn that by doing careful work and not treating it like a rushed flip, which is how most of our Raceland remodel work comes to us.',
        },
        // TODO(owner): confirm specifics (real kitchen/bath price ranges, typical remodel timelines) to replace the "call us" hedges above and strengthen these FAQs
      ]}
      closingPitch="Ready to remodel in Raceland? Call Jacob to schedule a free, no-pressure walk-through. We will look at the space, talk through the vision, and quote it honestly."
    />
  )
}

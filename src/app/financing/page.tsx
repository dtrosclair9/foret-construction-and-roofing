import type { Metadata } from 'next'
import Link from 'next/link'
import EnhancifyWidget from '@/components/EnhancifyWidget'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Roofing & Construction Financing in Raceland, LA',
  description:
    'Finance your new roof, home, addition or remodel in Raceland, Houma & Thibodaux, LA. Check your monthly rate in seconds with no impact to your credit score.',
  alternates: { canonical: 'https://www.foretconstruction.co/financing' },
  openGraph: {
    title: 'Roofing & Construction Financing | Foret Construction & Roofing LLC',
    description:
      'Pay over time for your new roof, addition, or remodel. Soft credit check, fast approvals, no prepayment penalties. Serving Lafourche and Terrebonne Parishes.',
    url: 'https://www.foretconstruction.co/financing',
    siteName: 'Foret Construction & Roofing LLC',
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const benefits = [
  {
    title: 'Soft Credit Check',
    body: 'Pre-qualify in seconds with no impact to your credit score. See real rates and monthly payments before you commit.',
  },
  {
    title: 'Fast Approvals',
    body: 'Most homeowners get approved the same day. Funds are released directly so we can get your project on the schedule.',
  },
  {
    title: 'Flexible Terms',
    body: 'Payment plans tailored to your budget — from short-term promotional offers to longer terms with lower monthly payments.',
  },
  {
    title: 'No Prepayment Penalty',
    body: 'Pay your loan off early whenever you want. No hidden fees, no penalties — just an option that works around your finances.',
  },
]

const faqs = [
  {
    question: 'How does financing through Foret Construction work?',
    answer:
      'We partner with Enhancify, a home improvement financing platform. You enter your project amount, see real rates and monthly payment options from lenders, and pick the plan that fits your budget. Once you are approved, we get your project on the schedule.',
  },
  {
    question: 'Will checking my rate hurt my credit score?',
    answer:
      'No. Pre-qualifying uses a soft credit check that does not affect your credit score. You can see your rates and payment options first and decide after.',
  },
  {
    question: 'What projects can be financed?',
    answer:
      'Any of our services: roof replacement, FORTIFIED roof upgrades, new home construction, additions, remodeling, and concrete work. Call us at (985) 859-5111 if you want to talk through what a monthly payment might look like for your project.',
  },
  {
    question: 'Can I pay my loan off early?',
    answer:
      'Yes. The financing options offered through our partner have no prepayment penalty, so you can pay the balance off whenever you want without extra fees.',
  },
]

export default function FinancingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Roofing & Construction Financing in Raceland, LA',
            url: 'https://www.foretconstruction.co/financing',
            description:
              'Financing options for roofing, new home construction, additions, and remodeling projects in south Louisiana.',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Foret Construction & Roofing LLC',
              url: 'https://www.foretconstruction.co',
            },
            about: {
              '@type': 'FinancialProduct',
              name: 'Home Improvement Financing',
              provider: {
                '@type': 'GeneralContractor',
                name: 'Foret Construction & Roofing LLC',
                telephone: '+1-985-859-5111',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '2709 LA-1',
                  addressLocality: 'Raceland',
                  addressRegion: 'LA',
                  postalCode: '70394',
                  addressCountry: 'US',
                },
              },
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide section-padding text-center">
          <p className="section-label text-accent-light mb-4">Financing Available</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Financing for Roofing &amp; Construction <br className="hidden sm:block" />
            in Raceland, LA
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            A new roof, addition, or remodel shouldn&apos;t wait until you&apos;ve saved up. Foret Construction
            partners with Enhancify to offer affordable monthly payment options across Lafourche, Terrebonne,
            and surrounding parishes — with a soft credit check that won&apos;t affect your score.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="bg-gray-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
              See Your Estimated Monthly Payment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Enter the project amount below to view real rates and payment options from our financing
              partners. Pre-qualifying takes about 60 seconds and won&apos;t impact your credit score.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6">
            <EnhancifyWidget />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="section-label mb-3">Why Finance With Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Built for Homeowners, Not Banks
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="border-l-4 border-accent pl-5">
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{b.title}</h3>
                <p className="text-gray-700 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-gray-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">Service Area</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
              Financing Available Throughout South Louisiana
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We finance projects for homeowners in Raceland, Houma, Thibodaux, Lockport, Cut Off, Galliano,
              Larose, Mathews, Bourg, and surrounding communities throughout Lafourche and Terrebonne
              Parishes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white" aria-labelledby="financing-faq-heading">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="section-label mb-3">Common Questions</p>
            <h2 id="financing-faq-heading" className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Financing FAQs
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="group bg-gray-50 rounded-xl border border-gray-100 shadow-sm px-6 py-1 open:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 font-bold text-primary text-lg">
                  <span>{f.question}</span>
                  <svg
                    className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 leading-relaxed pb-5 -mt-1">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="container-wide section-padding text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed">
            Call to talk through your project and financing options, or request a free estimate online.
            We&apos;ll walk you through pre-qualification step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19858595111" className="btn-accent inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (985) 859-5111
            </a>
            <Link href="/contact" className="btn-outline">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

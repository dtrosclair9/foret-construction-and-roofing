import type { Metadata } from 'next'
import Link from 'next/link'
import { ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Foret Construction & Roofing LLC is committed to keeping foretconstruction.co accessible to everyone, targeting WCAG 2.2 Level AA. Report an accessibility barrier here.',
  alternates: { canonical: 'https://www.foretconstruction.co/accessibility' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Accessibility Statement | Foret Construction & Roofing LLC',
    description:
      'Our commitment to an accessible website for every visitor — WCAG 2.2 Level AA — and how to report a barrier.',
    url: 'https://www.foretconstruction.co/accessibility',
    siteName: 'Foret Construction & Roofing LLC',
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const LAST_UPDATED = 'July 11, 2026'

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide section-padding text-center">
          <p className="section-label text-accent-light mb-4">Our Commitment</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Accessibility Statement
          </h1>
          <p className="text-gray-300 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container-wide section-padding">
          <article className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-8">
              Foret Construction &amp; Roofing LLC wants every visitor &mdash; including people who
              use screen readers, keyboard navigation, screen magnifiers, or other assistive
              technology &mdash; to be able to learn about our services and reach us. We are
              committed to making foretconstruction.co (the &quot;Site&quot;) accessible and to
              improving it on an ongoing basis.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Conformance Target
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We aim to conform to the{' '}
              <a
                href="https://www.w3.org/TR/WCAG22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark font-semibold underline underline-offset-2"
              >
                Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
              </a>
              . These internationally recognized guidelines explain how to make web content more
              accessible to people with a wide range of disabilities, including visual, auditory,
              physical, speech, cognitive, and neurological disabilities.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              What We&apos;ve Done
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
              <li>Color contrast on text and interface elements meets WCAG 2.2 AA minimum ratios.</li>
              <li>A &quot;Skip to main content&quot; link lets keyboard users bypass the navigation.</li>
              <li>Every interactive element shows a clearly visible keyboard focus indicator.</li>
              <li>Form fields have descriptive, programmatically associated labels.</li>
              <li>Images include descriptive alternative text, and decorative graphics are hidden from assistive technology.</li>
              <li>The Site uses semantic headings, landmarks, and ARIA roles so its structure is clear to screen readers.</li>
              <li>Layouts are responsive and usable on phones, tablets, and desktops.</li>
            </ul>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Ongoing Effort &amp; Known Limitations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Accessibility is an ongoing effort, not a one-time project. We test the Site with
              automated tools and manual review, and we work to fix issues as we find them. Some
              content provided by third-party tools (such as our financing calculator) may not be
              fully under our control; if you run into a barrier with any part of the Site, please
              tell us and we will help directly and work to resolve it.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Report an Accessibility Barrier
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you experience any difficulty accessing part of this Site, or you need information
              from it in a different format, please contact us. Let us know the page, what happened,
              and how we can reach you, and we will respond as quickly as we can.
            </p>
            <address className="not-italic text-gray-700 leading-relaxed mb-8">
              <strong className="text-primary">Foret Construction &amp; Roofing LLC</strong>
              <br />
              2709 LA-1, Raceland, LA 70394
              <br />
              <a href="tel:+19858595111" className="text-accent hover:text-accent-dark">
                (985) 859-5111
              </a>
              <br />
              <a href="mailto:foretcr@gmail.com" className="text-accent hover:text-accent-dark">
                foretcr@gmail.com
              </a>
            </address>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                className="text-accent hover:text-accent-dark font-semibold inline-flex items-center gap-1"
              >
                ← Back to Contact
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

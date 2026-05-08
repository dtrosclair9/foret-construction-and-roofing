import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Foret Construction & Roofing LLC — how we collect, use, and protect information submitted through our website, contact form, and financing tools.',
  alternates: { canonical: 'https://www.foretconstruction.co/privacy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy | Foret Construction & Roofing LLC',
    description:
      'Privacy Policy for Foret Construction & Roofing LLC — how we handle the information you share with us.',
    url: 'https://www.foretconstruction.co/privacy',
    siteName: 'Foret Construction & Roofing LLC',
    locale: 'en_US',
    type: 'website',
  },
}

const LAST_UPDATED = 'May 8, 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide section-padding text-center">
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container-wide section-padding">
          <article className="max-w-3xl mx-auto prose-policy">
            <p className="text-gray-700 leading-relaxed mb-8">
              Foret Construction &amp; Roofing LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
              your privacy. This Privacy Policy explains what information we collect on
              foretconstruction.co (the &quot;Site&quot;), how we use it, and the limited circumstances under
              which we share it. By using the Site, you agree to the practices described below.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Information We Collect
            </h2>
            <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-2">
              Information You Provide Directly
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you submit a contact form, request an estimate, or call us, we collect the
              information you choose to share — typically your name, phone number, email address,
              project address or city, and a description of the work you&apos;d like done.
            </p>
            <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-2">
              Financing Pre-Qualification Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our financing page displays a payment calculator and pre-qualification tool provided
              by Enhancify and its lending partners. If you choose to pre-qualify, the personal and
              financial information you enter is submitted directly to Enhancify and the participating
              lender — not to us. Their handling of that information is governed by their own privacy
              policies, which you should review before submitting.
            </p>
            <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-2">
              Information Collected Automatically
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit the Site, our hosting provider (Vercel) and standard web infrastructure
              automatically log basic technical information such as your IP address, browser type,
              referring page, and the pages you view. This information is used to operate, secure,
              and improve the Site.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the information you share to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
              <li>Respond to your inquiry, schedule estimates, and follow up on projects;</li>
              <li>Provide quotes, contracts, and project communications;</li>
              <li>Improve the Site and our services;</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information, and we do not use it for advertising or
              marketing to outside audiences.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Third-Party Services We Rely On
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use a small set of trusted third-party services to operate the Site. Each handles
              data under its own privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
              <li>
                <strong>Formspree</strong> — processes and delivers contact form submissions to our
                business email.
              </li>
              <li>
                <strong>Enhancify</strong> — powers the payment calculator and routes
                pre-qualification requests to participating lenders.
              </li>
              <li>
                <strong>Vercel</strong> — hosts the Site and provides standard server-level logging
                and security.
              </li>
              <li>
                <strong>Google Fonts</strong> — serves the typefaces used on the Site.
              </li>
            </ul>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site does not set marketing or advertising cookies. Third-party services we embed
              (such as Enhancify) may set their own cookies when you interact with them. You can
              manage or block cookies through your browser settings at any time.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              How We Protect Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site is served over HTTPS, and form submissions are transmitted using encrypted
              connections. While no system is perfectly secure, we use commercially reasonable
              measures to safeguard the information you share with us.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Your Choices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can choose not to submit information through the Site, and you may ask us to
              update or delete the information you&apos;ve previously shared with us by contacting
              the email or phone number below. We&apos;ll honor reasonable requests in accordance
              with applicable law.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site is intended for adults considering construction or roofing services. We do
              not knowingly collect information from children under 13.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. When we do, we&apos;ll revise the
              &quot;Last updated&quot; date at the top of this page. Material changes will be
              highlighted on the Site.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-10 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how we handle your information,
              reach out:
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

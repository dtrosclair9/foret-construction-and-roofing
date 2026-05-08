import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { href: '/services#new-home-construction', label: 'New Home Construction' },
  { href: '/services#roofing', label: 'Roofing' },
  { href: '/services#fortified-roof', label: 'FORTIFIED Roof Installation' },
  { href: '/services#home-additions', label: 'Home Additions' },
  { href: '/services#remodeling', label: 'Remodeling' },
  { href: '/services#concrete', label: 'Concrete & Outdoor Structures' },
]

const cityLinks = [
  { href: '/services/fortified-roof-raceland-la', label: 'FORTIFIED Roof Raceland' },
  { href: '/services/fortified-roof-houma-la', label: 'FORTIFIED Roof Houma' },
  { href: '/services/fortified-roof-thibodaux-la', label: 'FORTIFIED Roof Thibodaux' },
  { href: '/services/new-home-construction-raceland-la', label: 'New Construction Raceland' },
  { href: '/services/roofing-raceland-la', label: 'Roofing Raceland' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Foret Construction & Roofing LLC"
                width={80}
                height={80}
                className="h-16 w-16 object-contain"
              />
              <div>
                <p className="text-white font-serif font-bold text-lg leading-tight">Foret Construction</p>
                <p className="text-accent text-xs uppercase tracking-widest font-semibold">& Roofing LLC</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Locally owned general contractor and FORTIFIED-certified roofer based in Raceland, LA. Serving Lafourche, Terrebonne and surrounding parishes with new home construction, roofing, additions, remodeling, and concrete work.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100083615910445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-gray-400 hover:text-accent transition-colors text-sm"
              aria-label="Foret Construction & Roofing LLC on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages */}
          <div>
            <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-5">Service Areas</h3>
            <ul className="space-y-2">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-5">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>2709 LA-1<br />Raceland, LA 70394</span>
              </div>
              <div>
                <a href="tel:+19858595111" className="flex items-center gap-2.5 hover:text-accent transition-colors font-semibold text-white">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (985) 859-5111
                </a>
              </div>
              <div>
                <a href="mailto:foretcr@gmail.com" className="flex items-center gap-2.5 hover:text-accent transition-colors break-all">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  foretcr@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Hours</p>
                <p className="text-xs">Mon–Fri: 8:00 AM – 5:00 PM</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Foret Construction & Roofing LLC. All rights reserved.</p>
          <p>Raceland, LA &middot; Serving Lafourche &amp; Terrebonne Parishes</p>
        </div>
      </div>
    </footer>
  )
}

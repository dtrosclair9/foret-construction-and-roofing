'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/financing', label: 'Financing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const serviceDropdown = [
  { href: '/services/fortified-roof-raceland-la', label: 'FORTIFIED Roof — Raceland' },
  { href: '/services/fortified-roof-houma-la', label: 'FORTIFIED Roof — Houma' },
  { href: '/services/fortified-roof-thibodaux-la', label: 'FORTIFIED Roof — Thibodaux' },
  { href: '/services/new-home-construction-raceland-la', label: 'New Home Construction — Raceland' },
  { href: '/services/new-home-construction-houma-la', label: 'New Home Construction — Houma' },
  { href: '/services/new-home-construction-thibodaux-la', label: 'New Home Construction — Thibodaux' },
  { href: '/services/roofing-raceland-la', label: 'Roofing — Raceland' },
  { href: '/services/home-additions-raceland-la', label: 'Home Additions — Raceland' },
  { href: '/services/remodeling-raceland-la', label: 'Remodeling — Raceland' },
  { href: '/services', label: 'All Services →' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={`bg-primary sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Foret Construction & Roofing LLC – Home">
            <Image
              src="/images/logo.jpg"
              alt="Foret Construction & Roofing LLC logo"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
              priority
            />
            <span className="text-white font-serif font-bold text-base sm:text-lg leading-tight hidden sm:block">
              Foret Construction<br />
              <span className="text-accent-light text-xs uppercase tracking-widest font-sans">& Roofing LLC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                      pathname.startsWith('/services') ? 'text-accent' : 'text-gray-200 hover:text-accent'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                      <ul className="bg-white rounded-md shadow-2xl border border-gray-100 py-2" role="menu">
                        {serviceDropdown.map((item) => (
                          <li key={item.href} role="none">
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition-colors"
                              role="menuitem"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href ? 'text-accent' : 'text-gray-200 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="tel:+19858595111"
              className="btn-accent text-sm !py-2 !px-5 ml-2 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (985) 859-5111
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-primary-light pb-4 pt-3" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-2.5 text-sm font-medium rounded transition-colors ${
                    pathname === link.href ? 'text-accent' : 'text-gray-200 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-primary-light my-2" />
              <p className="px-2 text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1 mb-1">Service Pages</p>
              {serviceDropdown.slice(0, -1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-xs font-medium text-gray-300 hover:text-accent rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+19858595111"
                className="btn-accent text-sm text-center mt-3 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (985) 859-5111
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import { useI18n, useT } from '@/i18n/context'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { locale } = useI18n()
  const t = useT()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const prefix = locale === 'en' ? '' : '/tr'

  const links = [
    { label: t('nav.approach'), href: `${prefix}/approach` },
    { label: t('nav.about'), href: `${prefix}/about` },
    { label: t('nav.blog'), href: `${prefix}/blog` },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (href: string) => {
    if (href.includes('#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  const handleHashClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const hash = href.split('#')[1]
    if (!hash) return
    const basePath = locale === 'en' ? '/' : '/tr'
    if (pathname === basePath || pathname === basePath + '/') {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }, [pathname, router, locale])

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const basePath = locale === 'en' ? '/' : '/tr'
    if (pathname === basePath || pathname === basePath + '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push(basePath)
    }
  }, [pathname, router, locale])

  // Language switch
  const switchLocale = () => {
    if (locale === 'en') {
      const newPath = '/tr' + pathname
      router.push(newPath)
    } else {
      const newPath = pathname.replace(/^\/tr/, '') || '/'
      router.push(newPath)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
        bg-cream/92 backdrop-blur-xl border-b border-black/[0.09]
        transition-shadow duration-300
        ${scrolled ? 'shadow-[0_4px_30px_rgba(255,82,27,0.08)]' : ''}`}
    >
      <div className="max-w-[1260px] w-full mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" onClick={handleLogoClick} className="text-[1.4rem] font-black tracking-[-0.06em] text-ink no-underline cursor-pointer">
          Oder<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              {href.includes('#') ? (
                <a
                  href={href}
                  onClick={(e) => handleHashClick(e, href)}
                  className="text-[0.88rem] font-medium no-underline px-1 py-1 rounded cursor-pointer
                    focus-visible:outline-2 focus-visible:outline-accent/50
                    text-ink/50 hover:text-accent"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={`text-[0.88rem] font-medium no-underline px-1 py-1 rounded
                    focus-visible:outline-2 focus-visible:outline-accent/50
                    ${isActive(href) ? 'text-accent' : 'text-ink/50 hover:text-accent'}`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={switchLocale}
            className="text-[0.78rem] font-semibold text-ink/40 hover:text-accent border border-black/[0.08]
              px-3 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            {t('nav.langSwitch')}
          </button>

          {/* CTA */}
          <Link
            href={`${prefix}/apply`}
            className={`hidden sm:inline-flex px-[1.4rem] rounded-full text-[0.88rem] font-semibold
              no-underline whitespace-nowrap items-center transition-all duration-200
              bg-accent text-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)]`}
            style={{ minHeight: '44px' }}
          >
            {t('nav.cta')} →
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg
              border border-black/[0.09] text-ink/60 hover:text-accent hover:border-accent
              focus-visible:ring-2 focus-visible:ring-accent/50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/[0.09] bg-cream/98 backdrop-blur-xl px-5 sm:px-8 pb-6 pt-4">
          <ul className="flex flex-col gap-1 list-none mb-4">
            {links.map(({ label, href }) => (
              <li key={href}>
                {href.includes('#') ? (
                  <a
                    href={href}
                    onClick={(e) => { handleHashClick(e, href); setMobileOpen(false) }}
                    className="block text-[0.95rem] font-medium no-underline px-4 py-3 rounded-xl cursor-pointer
                      text-ink/70 hover:text-accent hover:bg-accent/5"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-[0.95rem] font-medium no-underline px-4 py-3 rounded-xl
                      ${isActive(href)
                        ? 'text-accent bg-accent/5'
                        : 'text-ink/70 hover:text-accent hover:bg-accent/5'}`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href={`${prefix}/apply`}
            onClick={() => setMobileOpen(false)}
            className="bg-accent text-white w-full px-6 rounded-full font-bold text-[0.95rem]
              no-underline inline-flex items-center justify-center
              hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200"
            style={{ minHeight: '48px' }}
          >
            {t('nav.cta')} →
          </Link>
        </div>
      )}
    </nav>
  )
}

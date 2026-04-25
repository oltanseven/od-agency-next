'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Hizmetler', href: '/#hizmetler' },
  { label: 'Süreç',     href: '/#surec' },
  { label: 'Paketler',  href: '/paketler' },
  { label: 'Blog',      href: '/blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center
        bg-cream/92 backdrop-blur-xl border-b border-black/[0.09]
        transition-shadow duration-300
        ${scrolled ? 'shadow-[0_4px_30px_rgba(255,82,27,0.08)]' : ''}`}
    >
      <div className="max-w-[1260px] w-full px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-[1.4rem] font-black tracking-[-0.06em] text-ink no-underline">
          OD<span className="text-accent">.</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[0.88rem] font-medium no-underline transition-colors duration-200
                  ${isActive(href) ? 'text-accent' : 'text-ink/50 hover:text-accent'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/iletisim"
          className={`px-[1.4rem] py-[0.6rem] rounded-full text-[0.88rem] font-semibold
            no-underline whitespace-nowrap transition-all duration-200
            ${pathname === '/iletisim'
              ? 'bg-night text-white'
              : 'bg-accent text-white hover:bg-coral hover:-translate-y-px'}`}
        >
          Proje Başlat →
        </Link>

      </div>
    </nav>
  )
}

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
                className={`text-[0.88rem] font-medium no-underline px-1 py-1 rounded
                  focus-visible:outline-2 focus-visible:outline-accent/50
                  ${isActive(href) ? 'text-accent' : 'text-ink/50 hover:text-accent'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — min 44px touch target */}
        <Link
          href="/iletisim"
          className={`px-[1.4rem] rounded-full text-[0.88rem] font-semibold
            no-underline whitespace-nowrap inline-flex items-center
            focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2
            ${pathname === '/iletisim'
              ? 'bg-night text-white hover:opacity-90'
              : 'bg-accent text-white hover:bg-coral hover:-translate-y-px'}`}
          style={{ minHeight: '44px' }}
        >
          Proje Başlat →
        </Link>

      </div>
    </nav>
  )
}

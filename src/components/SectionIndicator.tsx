'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const sections = [
  { id: 'hero', label: 'Ana Sayfa' },
  { id: 'hizmetler', label: 'Hizmetler' },
  { id: 'otomasyon', label: 'AI Otomasyon' },
  { id: 'surec', label: 'Süreç' },
  { id: 'yorumlar', label: 'Güven' },
]

export default function SectionIndicator() {
  const pathname = usePathname()
  const [current, setCurrent] = useState(0)
  const [show, setShow] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sections.findIndex(s => s.id === entry.target.id)
            if (idx !== -1) setCurrent(idx)
          }
        }
      },
      { threshold: 0.3 }
    )

    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }

    const handleScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHome])

  if (!isHome || !show) return null

  function scrollToNext() {
    const nextIdx = Math.min(current + 1, sections.length - 1)
    const el = document.getElementById(sections[nextIdx].id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <div className="bg-night/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2
        flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <span className="text-[0.7rem] text-white/40 font-mono">
          {String(current + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
        </span>
        <span className="text-[0.75rem] text-white/70 font-semibold">
          {sections[current].label}
        </span>
      </div>

      {current < sections.length - 1 && (
        <button
          onClick={scrollToNext}
          className="w-10 h-10 rounded-full bg-accent/90 text-white flex items-center justify-center
            hover:bg-accent hover:scale-110 transition-all shadow-[0_4px_16px_rgba(255,82,27,0.4)]
            cursor-pointer"
          aria-label="Sonraki bölüme git"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  )
}

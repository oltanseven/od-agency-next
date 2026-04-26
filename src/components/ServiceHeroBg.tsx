import React from 'react'

/**
 * Servis sayfaları hero arka planı.
 * Her tema için konuyla ilgili floating SVG ikonlar.
 */

type Props = {
  theme: 'ecommerce' | 'ai' | 'brand' | 'landing'
}

const icons: Record<string, React.ReactNode[]> = {
  ecommerce: [
    <svg key="cart" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.12"><path d="M6 2L3 7v13a2 2 0 002 2h14a2 2 0 002-2V7l-3-5H6z"/><path d="M3 7h18M16 11a4 4 0 01-8 0"/></svg>,
    <svg key="card" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/></svg>,
    <svg key="tag" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.08"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/></svg>,
    <svg key="truck" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    <svg key="box" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.09"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
  ],
  ai: [
    <svg key="brain" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.12"><path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6L15 19H9l-.3-4.1A7 7 0 0112 2z"/><path d="M9 21h6"/></svg>,
    <svg key="msg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    <svg key="mail" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.09"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>,
    <svg key="chart" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
    <svg key="zap" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.08"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>,
  ],
  brand: [
    <svg key="pen" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.12"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    <svg key="palette" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="2"/><circle cx="8" cy="14" r="2"/><circle cx="16" cy="14" r="2"/></svg>,
    <svg key="type" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.09"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>,
    <svg key="layout" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    <svg key="eye" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.08"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  ],
  landing: [
    <svg key="monitor" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.12"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    <svg key="slider" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15h18"/><circle cx="8" cy="9" r="2"/></svg>,
    <svg key="click" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.09"><path d="M9 9l6 6M15 9l-6 6"/><circle cx="12" cy="12" r="10"/></svg>,
    <svg key="form" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.10"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>,
    <svg key="phone" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.08"><rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/></svg>,
  ],
}

const positions = [
  'top-[12%] left-[8%]',
  'top-[18%] right-[12%]',
  'bottom-[28%] left-[15%]',
  'bottom-[18%] right-[8%]',
  'top-[45%] right-[22%]',
]

const floatAnimations = [
  'animate-[floatA_4s_ease-in-out_infinite]',
  'animate-[floatB_5s_ease-in-out_infinite]',
  'animate-[floatC_4.5s_ease-in-out_infinite]',
  'animate-[floatA_5.5s_ease-in-out_infinite]',
  'animate-[floatB_4s_ease-in-out_infinite]',
]

export default function ServiceHeroBg({ theme }: Props) {
  const themeIcons = icons[theme] || icons.landing

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {themeIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute text-accent ${positions[i]} ${floatAnimations[i]}`}
        >
          {icon}
        </div>
      ))}
    </div>
  )
}

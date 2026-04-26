import React from 'react'

type Props = {
  theme: 'ecommerce' | 'ai' | 'brand' | 'landing'
}

const icons: Record<string, React.ReactNode[]> = {
  ecommerce: [
    // Kargo kutusu
    <svg key="truck" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    // Paket
    <svg key="box" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>,
    // Kalp / beğenme
    <svg key="heart" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>,
    // Sepet
    <svg key="cart" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.10"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
    // Fiyat etiketi
    <svg key="tag" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/></svg>,
  ],
  ai: [], // AI sayfası NeuralBackground kullanacak
  brand: [
    // Kalem
    <svg key="pen" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    // Kağıt
    <svg key="paper" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
    // Palet
    <svg key="palette" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="1.5" fill="currentColor" opacity="0.15"/><circle cx="8" cy="14" r="1.5" fill="currentColor" opacity="0.15"/><circle cx="16" cy="14" r="1.5" fill="currentColor" opacity="0.15"/><circle cx="15" cy="9" r="1.5" fill="currentColor" opacity="0.15"/></svg>,
    // Cetvel
    <svg key="ruler" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>,
    // Göz
    <svg key="eye" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  ],
  landing: [
    // Sayfa yapısı / layout
    <svg key="layout" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    // Monitör
    <svg key="monitor" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    // Form
    <svg key="form" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>,
    // Slider
    <svg key="slider" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15h18"/><circle cx="8" cy="9" r="2.5"/></svg>,
    // Mobil
    <svg key="phone" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/></svg>,
  ],
}

const positions = [
  'top-[8%] left-[5%]',
  'top-[15%] right-[8%]',
  'bottom-[22%] left-[12%]',
  'bottom-[12%] right-[5%]',
  'top-[42%] right-[18%]',
]

const floatAnimations = [
  'animate-[floatA_4s_ease-in-out_infinite]',
  'animate-[floatB_5s_ease-in-out_infinite]',
  'animate-[floatC_4.5s_ease-in-out_infinite]',
  'animate-[floatA_5.5s_ease-in-out_infinite]',
  'animate-[floatB_4s_ease-in-out_infinite]',
]

export default function ServiceHeroBg({ theme }: Props) {
  // AI sayfası NeuralBackground kullanacak, burada boş döner
  if (theme === 'ai') return null

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

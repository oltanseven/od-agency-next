import React from 'react'

type Props = {
  theme: 'ecommerce' | 'ai' | 'brand' | 'landing' | 'contact' | 'pricing' | 'blog' | 'projects'
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
  contact: [
    // Zarf / mail
    <svg key="mail" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>,
    // Telefon
    <svg key="phone" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.38a2 2 0 011.99-2.18H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    // Konum pin
    <svg key="pin" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    // Mesaj balonu
    <svg key="msg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
    // Saat
    <svg key="clock" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  ],
  pricing: [
    // Fiyat etiketi
    <svg key="tag" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/></svg>,
    // Hesap makinesi
    <svg key="calc" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2"/></svg>,
    // Kontrol işareti
    <svg key="check" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
    // Yıldız
    <svg key="star" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    // Kredi kartı
    <svg key="card" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/></svg>,
  ],
  blog: [
    // Yazı
    <svg key="edit" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    // Kitap
    <svg key="book" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
    // Arama
    <svg key="search" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    // Paylaşım
    <svg key="share" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>,
    // Dosya
    <svg key="file" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  ],
  projects: [
    // Kod
    <svg key="code" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
    // Katmanlar
    <svg key="layers" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    // Ekran
    <svg key="monitor" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.09"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    // Roket
    <svg key="rocket" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.10"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/></svg>,
    // Kontrol
    <svg key="check" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.08"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
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

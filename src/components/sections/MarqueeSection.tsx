const items = [
  'E-Ticaret', 'SaaS & Teknoloji', 'Restoran & Cafe', 'Hukuk Büroları',
  'Sağlık & Klinik', 'Gayrimenkul', 'Eğitim', 'Fintech',
  'Moda & Lifestyle', 'B2B & Kurumsal',
]

export default function MarqueeSection() {
  const tripled = [...items, ...items, ...items]

  return (
    <div className="relative bg-night overflow-hidden" style={{ padding: '3rem 0' }}>

      {/* Glow efektleri — Process section gibi */}
      <div aria-hidden className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,82,27,0.2), transparent 65%)' }} />
      <div aria-hidden className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(252,158,79,0.15), transparent 65%)' }} />

      {/* Döndürülmüş container — -35 derece eğim */}
      <div className="relative" style={{ transform: 'rotate(-6deg)', margin: '-1rem -4rem' }}>

        {/* Satır 1 — sola */}
        <div className="flex gap-8 w-max animate-[slideLeft_28s_linear_infinite] mb-4">
          {tripled.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/80 text-[0.92rem] font-semibold tracking-wide whitespace-nowrap">
                {item}
              </span>
              <span className="text-accent text-xs opacity-60">✦</span>
            </span>
          ))}
        </div>

        {/* Satır 2 — sağa (ters yön) */}
        <div className="flex gap-8 w-max animate-[slideRight_32s_linear_infinite]">
          {tripled.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/40 text-[0.92rem] font-semibold tracking-wide whitespace-nowrap">
                {item}
              </span>
              <span className="text-coral text-xs opacity-40">✦</span>
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

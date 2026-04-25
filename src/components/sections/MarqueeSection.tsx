const items = [
  'E-Ticaret', 'SaaS & Teknoloji', 'Restoran & Cafe', 'Hukuk Büroları',
  'Sağlık & Klinik', 'Gayrimenkul', 'Eğitim', 'Fintech',
  'Moda & Lifestyle', 'B2B & Kurumsal',
]

export default function MarqueeSection() {
  const doubled = [...items, ...items]

  return (
    <div className="py-8 border-t border-b border-black/[0.09] overflow-hidden bg-cream-soft">
      <div className="flex gap-12 w-max animate-[slideLeft_22s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-ink/60 text-[0.88rem] font-semibold tracking-wide whitespace-nowrap">
              {item}
            </span>
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

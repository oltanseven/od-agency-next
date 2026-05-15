type WhyItem = { title: string; desc: string }

type Props = {
  dict: Record<string, unknown>
}

const icons = [
  // User (no account managers)
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  // Target (outcome-based)
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  // Calendar (month-to-month)
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  // Code (builder-first)
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
]

export default function WhyUsSection({ dict }: Props) {
  const items = dict.items as WhyItem[]

  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-ink tracking-[-0.02em] mb-4">
            {dict.title as string}
          </h2>
          <p className="text-ink/45 text-[1rem] max-w-[560px] mx-auto leading-relaxed">
            {dict.subtitle as string}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl border border-black/[0.04] hover:border-accent/15 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-accent/8 text-accent flex items-center justify-center shrink-0">
                {icons[i]}
              </div>
              <div>
                <h3 className="text-[1rem] font-bold text-ink mb-1.5">{item.title}</h3>
                <p className="text-ink/45 text-[0.88rem] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

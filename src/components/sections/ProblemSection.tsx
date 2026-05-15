type ProblemItem = { title: string; desc: string }

type Props = {
  dict: Record<string, unknown>
}

const icons = [
  // Moon (missed leads after hours)
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  // Repeat (repetitive tasks)
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  // Users (scaling = hiring)
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // BarChart (reports not results)
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
]

export default function ProblemSection({ dict }: Props) {
  const items = dict.items as ProblemItem[]

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
            <div
              key={i}
              className="bg-cream-soft border border-black/[0.06] rounded-2xl p-7 hover:border-accent/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/8 text-accent flex items-center justify-center mb-4">
                {icons[i]}
              </div>
              <h3 className="text-[1.05rem] font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-ink/45 text-[0.88rem] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

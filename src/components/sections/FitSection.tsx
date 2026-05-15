type FitGroup = { title: string; items: string[] }

type Props = {
  dict: Record<string, unknown>
}

export default function FitSection({ dict }: Props) {
  const good = dict.good as FitGroup
  const bad = dict.bad as FitGroup

  return (
    <section className="py-24 sm:py-32 bg-cream-soft">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-ink tracking-[-0.02em] mb-14 text-center">
          {dict.title as string}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* Good fit */}
          <div className="bg-cream border border-[#22c55e]/15 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-[1.05rem] font-bold text-ink">{good.title}</h3>
            </div>
            <ul className="space-y-3">
              {good.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.88rem] text-ink/60 leading-relaxed">
                  <span className="text-[#22c55e] mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bad fit */}
          <div className="bg-cream border border-ink/[0.06] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-ink/5 text-ink/40 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <h3 className="text-[1.05rem] font-bold text-ink">{bad.title}</h3>
            </div>
            <ul className="space-y-3">
              {bad.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.88rem] text-ink/60 leading-relaxed">
                  <span className="text-ink/25 mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

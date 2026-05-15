type ColItem = { title: string; desc: string }

type Props = {
  dict: Record<string, unknown>
}

const colIcons = [
  // Zap (automate)
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  // TrendingUp (scale)
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  // Activity (measure)
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
]

export default function SolutionSection({ dict }: Props) {
  const cols = dict.cols as ColItem[]

  return (
    <section className="py-24 sm:py-32 bg-night text-white">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black tracking-[-0.02em] mb-4">
            {dict.title as string}
          </h2>
          <p className="text-white/50 text-[1rem] max-w-[600px] mx-auto leading-relaxed">
            {dict.subtitle as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          {cols.map((col, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mx-auto mb-5">
                {colIcons[i]}
              </div>
              <h3 className="text-[1.15rem] font-bold mb-3">{col.title}</h3>
              <p className="text-white/45 text-[0.9rem] leading-relaxed">{col.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

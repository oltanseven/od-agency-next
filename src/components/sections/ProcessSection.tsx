type StepItem = { num: string; title: string; desc: string }

type Props = {
  dict: Record<string, unknown>
}

export default function ProcessSection({ dict }: Props) {
  const steps = dict.steps as StepItem[]

  return (
    <section className="py-24 sm:py-32 bg-cream-soft">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-ink tracking-[-0.02em] mb-4">
            {dict.title as string}
          </h2>
          <p className="text-ink/45 text-[1rem] max-w-[560px] mx-auto leading-relaxed">
            {dict.subtitle as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center md:text-left">
              <div className="text-[3rem] font-black text-accent/10 leading-none mb-2">{step.num}</div>
              <h3 className="text-[1.2rem] font-bold text-ink mb-3">{step.title}</h3>
              <p className="text-ink/45 text-[0.9rem] leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-ink/15">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

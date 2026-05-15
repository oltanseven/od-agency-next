'use client'

import { useState } from 'react'

type FAQItem = { q: string; a: string }

type Props = {
  dict: Record<string, unknown>
}

export default function FAQSection({ dict }: Props) {
  const items = dict.items as FAQItem[]
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-ink tracking-[-0.02em] mb-12 text-center">
          {dict.title as string}
        </h2>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="border border-black/[0.06] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                    bg-cream-soft hover:bg-cream-soft/80 transition-colors cursor-pointer"
                >
                  <span className="text-[0.95rem] font-semibold text-ink">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`shrink-0 text-ink/30 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 bg-cream-soft">
                    <p className="text-ink/50 text-[0.88rem] leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

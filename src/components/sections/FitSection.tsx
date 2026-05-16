'use client'

import { useI18n } from '@/i18n/context'

export default function FitSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const good = {
    title: en ? 'Great fit' : 'Tam uyum',
    items: en
      ? [
          'You have a running business with real customers',
          'You want to grow without proportionally growing your team',
          'You are ready to invest in systems that pay for themselves',
          'You value speed and measurable outcomes',
        ]
      : [
          'Gerçek müşterileri olan çalışan bir işletmeniz var',
          'Ekibinizi orantılı büyütmeden büyümek istiyorsunuz',
          'Kendini finanse eden sistemlere yatırım yapmaya hazırsınız',
          'Hız ve ölçülebilir sonuçlara değer veriyorsunuz',
        ],
  }

  const bad = {
    title: en ? 'Not the right fit' : 'Uygun değil',
    items: en
      ? [
          'You are still validating your business idea',
          'You need a simple website with no automation',
          'You are looking for the cheapest option available',
          'You want to micromanage every technical decision',
        ]
      : [
          'Henüz iş fikrinizi doğrulama aşamasındasınız',
          'Otomasyon olmadan basit bir web sitesi istiyorsunuz',
          'Mümkün olan en ucuz seçeneği arıyorsunuz',
          'Her teknik kararı mikro yönetmek istiyorsunuz',
        ],
  }

  return (
    <section className="py-28 sm:py-40 bg-cream-soft">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-ink tracking-[-0.02em] mb-4">
            {en ? 'Is this right for you?' : 'Bu sizin için doğru mu?'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <div className="bg-white border border-[#22c55e]/15 rounded-2xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-ink">{good.title}</h3>
            </div>
            <ul className="space-y-3">
              {good.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.92rem] text-ink/60 leading-relaxed">
                  <span className="text-[#22c55e] mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-black/[0.08] rounded-2xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-ink/5 text-ink/40 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-ink">{bad.title}</h3>
            </div>
            <ul className="space-y-3">
              {bad.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.92rem] text-ink/60 leading-relaxed">
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

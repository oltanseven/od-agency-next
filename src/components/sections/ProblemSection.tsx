'use client'

import { useI18n } from '@/i18n/context'

export default function ProblemSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const items = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ),
      title: en ? 'Missed leads after hours' : 'Mesai sonrası kaçan müşteriler',
      desc: en
        ? 'Potential customers reach out at night or on weekends. Nobody answers, and they move on to your competitor.'
        : 'Potansiyel müşteriler gece veya hafta sonu ulaşıyor. Kimse cevap vermiyor ve rakibinize gidiyorlar.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="17 1 21 5 17 9"/>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
          <polyline points="7 23 3 19 7 15"/>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
        </svg>
      ),
      title: en ? 'Repetitive manual tasks' : 'Tekrarlayan manuel işler',
      desc: en
        ? 'Your team spends hours on copy-paste work, data entry, and follow-ups that could be fully automated.'
        : 'Ekibiniz kopyala-yapıştır işlerine, veri girişine ve tamamen otomatikleştirilebilecek takiplere saatler harcıyor.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: en ? 'Scaling means hiring' : 'Büyümek = işe alım',
      desc: en
        ? 'Every time demand grows, you need more people. Your costs scale linearly while your margins shrink.'
        : 'Talep her arttığında daha fazla insana ihtiyaç duyuyorsunuz. Maliyetleriniz doğrusal büyürken kar marjınız daralıyor.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      title: en ? 'Reports, not results' : 'Raporlar var, sonuç yok',
      desc: en
        ? 'You get dashboards full of metrics but nothing actually changes. Data without action is just noise.'
        : 'Metriklerle dolu panolarınız var ama hiçbir şey gerçekten değişmiyor. Aksiyon olmadan veri sadece gürültüdür.',
    },
  ]

  return (
    <section className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-cream-soft">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // Problem
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            {en ? (
              <>Sound <span className="gradient-text">familiar?</span></>
            ) : (
              <>Tanıdık <span className="gradient-text">geliyor mu?</span></>
            )}
          </h2>
          <p className="text-ink/50 mt-3 max-w-[500px] leading-[1.7]">
            {en
              ? 'Most businesses hit the same walls when they try to grow. Here are the ones we solve every day.'
              : 'Çoğu işletme büyümeye çalışırken aynı duvarlara çarpar. İşte her gün çözdüklerimiz.'}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Top row: 2 cards, 7+5 layout */}
          <div className="col-span-12 lg:col-span-7 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
              {items[0].icon}
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">{items[0].title}</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">{items[0].desc}</p>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
              {items[1].icon}
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">{items[1].title}</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">{items[1].desc}</p>
          </div>

          {/* Bottom row: 2 cards, 5+7 layout */}
          <div className="col-span-12 lg:col-span-5 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
              {items[2].icon}
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">{items[2].title}</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">{items[2].desc}</p>
          </div>

          <div className="col-span-12 lg:col-span-7 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
              {items[3].icon}
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">{items[3].title}</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">{items[3].desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

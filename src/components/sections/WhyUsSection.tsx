'use client'

import { useI18n } from '@/i18n/context'

export default function WhyUsSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const items = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: en ? 'No middlemen' : 'Aracı yok',
      desc: en
        ? 'You work directly with the person who builds your systems. No account managers, no ticket queues.'
        : 'Sistemlerinizi kuran kişiyle direkt çalışırsınız. Müşteri temsilcisi yok, destek kuyruğu yok.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: en ? 'Outcome-focused' : 'Sonuç odaklı',
      desc: en
        ? 'We measure success by your business metrics, not by hours worked or features shipped.'
        : 'Başarıyı çalışılan saat veya teslim edilen özellikle değil, sizin iş metriklerinizle ölçüyoruz.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: en ? 'Month-to-month' : 'Aylık çalışma',
      desc: en
        ? 'No long-term lock-in. We earn your business every month with real results.'
        : 'Uzun vadeli bağlayıcı sözleşme yok. Her ay gerçek sonuçlarla güveninizi kazanıyoruz.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: en ? 'Builder-first' : 'Önce inşa eden',
      desc: en
        ? 'We are engineers, not salespeople. We build real systems with production-grade code and proven tools.'
        : 'Biz satışçı değil, mühendisiz. Üretim kalitesinde kod ve kanıtlanmış araçlarla gerçek sistemler kuruyoruz.',
    },
  ]

  return (
    <section className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            {en ? '// Why Us' : '// Neden Biz'}
          </span>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-ink tracking-[-0.02em] mb-4">
            {en ? (
              <>Built different, <span className="gradient-text">on purpose</span></>
            ) : (
              <>Bilinçli olarak <span className="gradient-text">farklı kurulduk</span></>
            )}
          </h2>
          <p className="text-ink/45 text-[1rem] max-w-[560px] mx-auto leading-relaxed">
            {en
              ? 'We are not a typical agency. Here is how we work and why it matters for your business.'
              : 'Tipik bir ajans değiliz. İşte nasıl çalıştığımız ve bunun işletmeniz için neden önemli olduğu.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-[18px] border border-black/[0.09] hover:border-accent/15 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-accent/8 text-accent flex items-center justify-center shrink-0">
                {item.icon}
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

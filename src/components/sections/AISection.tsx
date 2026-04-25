const cards = [
  {
    tag: 'İletişim',
    title: 'Akıllı Chatbot',
    desc: '7/24 müşteri sorularını yanıtlar, lead toplar, randevu alır.',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-100',
  },
  {
    tag: 'Süreç',
    title: 'İş Akışı Otomasyonu',
    desc: 'Teklif, fatura, bildirim — tekrarlayan adımları otomatize edin.',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
  },
  {
    tag: 'Veri',
    title: 'CRM Entegrasyonu',
    desc: 'Müşteri verilerini merkeze alın, segmentlere ayrılmış kampanyalar gönderin.',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-100',
  },
  {
    tag: 'Analiz',
    title: 'AI Raporlama',
    desc: 'GA4, Search Console ve satış verilerini birleştiren otomatik haftalık raporlar.',
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
  },
]

export default function AISection() {
  return (
    <section id="otomasyon" className="py-28 bg-cream-soft border-t border-black/[0.07]">
      <div className="max-w-[1260px] mx-auto px-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3">
              AI Otomasyon
            </span>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
              Çalışırken siz <span className="gradient-text">uyuyun.</span>
            </h2>
            <p className="text-ink/50 mt-3 max-w-[440px] leading-[1.7] text-[0.95rem]">
              Müşteri iletişiminden iç operasyonlara kadar iş süreçlerinizi yapay zekayla otomatize ediyoruz.
            </p>
          </div>

          {/* Flow indicators */}
          <div className="flex items-center gap-2 shrink-0">
            {['Tetikleyici', 'İşlem', 'Aksiyon', 'Sonuç'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold
                    ${i === 1
                      ? 'bg-accent text-white shadow-[0_0_20px_rgba(255,82,27,0.35)]'
                      : i < 1
                        ? 'bg-night text-white'
                        : 'bg-black/[0.06] text-ink/50 border border-black/[0.09]'
                    }`}>
                    {i + 1}
                  </div>
                  <span className="text-[0.62rem] text-ink/40 mt-1 whitespace-nowrap">{step}</span>
                </div>
                {i < 3 && (
                  <div className="relative w-6 h-px bg-black/10 mb-4">
                    <div className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-accent animate-[flowDot_2s_linear_infinite]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ tag, title, desc, color, border }) => (
            <div
              key={title}
              className={`bg-gradient-to-br ${color} ${border} border rounded-[18px] p-6
                transition-all duration-300 hover:-translate-y-1
                hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]`}
            >
              <span className="text-[0.7rem] font-bold tracking-wider uppercase text-accent/70 mb-3 block">
                {tag}
              </span>
              <h3 className="text-[1rem] font-bold text-ink mb-2">{title}</h3>
              <p className="text-ink/50 text-[0.85rem] leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

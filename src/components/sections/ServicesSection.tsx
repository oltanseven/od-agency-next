const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="3" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
        <path d="M8 21h8M12 17v4" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Tasarım & Geliştirme',
    desc: 'Marka kimliğinize uygun, mobil öncelikli ve yüksek dönüşüm oranına sahip kurumsal siteler.',
    tags: ['Kurumsal', 'Landing Page', 'Portföy'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
        <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'E-Ticaret Çözümleri',
    desc: 'Satışlarınızı artıracak, kolay yönetilebilir ve hızlı e-ticaret altyapısı.',
    tags: ['Ödeme Entegrasyonu', 'Stok Yönetimi', 'Mobil'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
        <path d="M12 8v4l3 3" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M9.5 3.5C6 5 3.5 8.5 3.5 12" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    title: 'AI Otomasyon',
    desc: 'Tekrarlayan iş süreçlerinizi yapay zeka ile otomatize edin, zamandan ve maliyetten tasarruf edin.',
    tags: ['Chatbot', 'İş Akışı', 'Entegrasyon'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'UI/UX Tasarım',
    desc: 'Wireframe, prototip ve kullanıcı testi ile dönüşümü maksimize eden arayüz tasarımı.',
    tags: ['Wireframe', 'Prototip', 'Kullanıcı Testi'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#ff521b" strokeWidth="1.5" opacity="0.38" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8l2 2-2 2" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'SEO & Performans',
    desc: 'Core Web Vitals optimizasyonu, teknik SEO ve içerik stratejisiyle organik büyüme.',
    tags: ['Teknik SEO', 'Core Web Vitals', 'İçerik'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Marka & Kurumsal Kimlik',
    desc: 'Logo, renk paleti, tipografi ve stil rehberiyle tutarlı ve güçlü marka kimliği.',
    tags: ['Logo', 'Design System', 'Stil Rehberi'],
  },
]

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-28 bg-cream">
      <div className="max-w-[1260px] mx-auto px-8">

        <div className="mb-14">
          <span className="inline-block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3">
            Hizmetler
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            İşinizi büyütmek için<br />ihtiyacınız olan her şey
          </h2>
          <p className="text-ink/50 mt-3 max-w-[500px] leading-[1.7]">
            Stratejiden uygulamaya, tasarımdan geliştirmeye — tek çatı altında eksiksiz dijital çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc, tags }) => (
            <div
              key={title}
              className="bg-black/[0.03] border border-black/[0.09] rounded-[18px] p-8
                transition-all duration-300 hover:-translate-y-1
                hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(255,82,27,0.08)]
                group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5
                transition-colors group-hover:bg-accent/15">
                {icon}
              </div>
              <h3 className="text-[1.1rem] font-bold text-ink mb-2">{title}</h3>
              <p className="text-ink/50 text-[0.9rem] leading-[1.7] mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag}
                    className="text-[0.72rem] font-semibold text-accent/80 bg-accent/8
                      px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

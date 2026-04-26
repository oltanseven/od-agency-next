import Link from 'next/link'

const guarantees = [
  {
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#22c55e" strokeWidth="1.5" opacity="0.38"/><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    iconBg: 'bg-[#D1FAE5]',
    title: '14 Gün Memnuniyet Garantisi',
    desc: 'Projeniz teslim edildikten sonra 14 gün içinde memnun kalmazsanız ücretinizi iade ediyoruz. Risk sıfır.',
  },
  {
    icon: <><circle cx="12" cy="12" r="9" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/><path d="M12 7v5l3 3" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/></>,
    iconBg: 'bg-accent/10',
    title: 'Süre Garantisi',
    desc: 'Teslim tarihini aşarsak her geçen gün için %10 indirim uyguluyoruz. Söz verdiğimiz tarihi tutarız.',
  },
  {
    icon: <><rect x="2" y="2" width="20" height="20" rx="6" stroke="#e8881a" strokeWidth="1.5" opacity="0.38"/><path d="M8 12l3 3 5-5" stroke="#e8881a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    iconBg: 'bg-[rgba(232,136,26,0.1)]',
    title: 'Şeffaf Süreç',
    desc: 'Her aşamada ne yapıldığını bilirsiniz. Sürpriz ek ücret, gizli maliyet veya belirsizlik yok.',
  },
]

const techBadges = [
  'Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Vercel', 'TypeScript',
  'Shopify', 'WooCommerce', 'Google Analytics', 'SEO',
]

export default function TestimonialsSection() {
  return (
    <section id="yorumlar" className="pt-16 sm:pt-28 pb-16 sm:pb-28 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // Neden Biz?
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            Türkiye&apos;de kimsenin vermediği <span className="gradient-text">garantiler</span>
          </h2>
          <p className="text-ink/50 mt-3 max-w-[500px] leading-[1.7]">
            Sözümüzün arkasındayız. Her projede yazılı garanti veriyoruz — sadece söz değil, taahhüt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {guarantees.map(({ icon, iconBg, title, desc }) => (
            <div key={title}
              className="bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-8
                transition-all duration-300 hover:border-accent/30 hover:shadow-[0_12px_36px_rgba(255,82,27,0.1)]">
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{icon}</svg>
              </div>
              <h3 className="text-[1.05rem] font-bold text-ink mb-2">{title}</h3>
              <p className="text-ink/50 text-[0.88rem] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="text-center">
          <span className="text-ink/40 text-[0.78rem] font-semibold tracking-wide uppercase block mb-4">
            Kullandığımız Teknolojiler
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map(badge => (
              <span key={badge}
                className="px-4 py-2 rounded-full text-[0.8rem] font-semibold text-ink/50
                  bg-cream-soft border border-black/[0.07]
                  transition-colors hover:border-accent/30 hover:text-accent/70">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-cream-soft border border-black/[0.09] rounded-[20px] px-5 sm:px-10 py-8
          flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[1.05rem] font-bold text-ink mb-1">
              İlk adımı atın — ücretsiz web sitesi analizi alın
            </h3>
            <p className="text-ink/50 text-[0.9rem] max-w-[480px]">
              Mevcut sitenizi veya projenizi birlikte değerlendirelim. Taahhüt yok, baskı yok.
            </p>
          </div>
          <Link href="/iletisim"
            className="shrink-0 bg-accent text-white px-7 py-3 rounded-full font-bold text-[0.9rem]
              no-underline hover:bg-coral transition-colors whitespace-nowrap">
            Ücretsiz Analiz Al →
          </Link>
        </div>
      </div>
    </section>
  )
}

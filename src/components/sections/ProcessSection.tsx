const steps = [
  {
    num: '01',
    color: '#22c55e',
    title: 'Keşif & Strateji',
    badge: 'Tamamlandı',
    badgeCls: 'bg-[rgba(34,197,94,0.15)] text-[#4ade80] border-[rgba(34,197,94,0.3)]',
    desc: 'İşletmenizi, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. Size özel bir dijital yol haritası çıkarıyoruz.',
    meta: '2-3 gün',
  },
  {
    num: '02',
    color: '#fc9e4f',
    title: 'UI/UX Tasarım',
    badge: 'İşleniyor',
    badgeCls: 'bg-[rgba(252,158,79,0.15)] text-coral border-[rgba(252,158,79,0.4)]',
    desc: 'Wireframe\'den final tasarıma kadar her adımda onayınızı alıyoruz. Sürpriz yok, şeffaf süreç.',
    meta: '4-6 gün',
  },
  {
    num: '03',
    color: '#ff521b',
    title: 'Geliştirme',
    badge: 'Kuyrukta',
    badgeCls: 'bg-white/[0.06] text-white/40 border-white/10',
    desc: 'Onaylanan tasarımı hızlı, SEO dostu ve güvenli koda dönüştürüyoruz. Core Web Vitals optimizasyonu dahil.',
    meta: '5-8 gün',
  },
  {
    num: '04',
    color: '#fb923c',
    title: 'Yayın & Destek',
    badge: 'Canlı',
    badgeCls: 'bg-[rgba(255,107,53,0.15)] text-[#fb923c] border-[rgba(255,107,53,0.3)]',
    desc: 'Siteniz yayına alınır, eğitiminiz verilir. Sonrasında bakım ve teknik destek ile yanınızdayız.',
    meta: 'Sürekli',
  },
]

export default function ProcessSection() {
  return (
    <section id="surec" className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-night relative overflow-hidden">

      {/* Glow efektleri */}
      <div aria-hidden className="absolute top-[15%] right-[5%] w-[40%] h-[50%] rounded-full pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(255,82,27,0.08),transparent 65%)'}} />
      <div aria-hidden className="absolute bottom-[15%] left-[5%] w-[35%] h-[45%] rounded-full pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(252,158,79,0.06),transparent 65%)'}} />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">

        <div className="text-center mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // Sürecimiz
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-white">
            Nasıl <span className="gradient-text">çalışıyoruz?</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-[440px] mx-auto leading-[1.7]">
            Sürpriz yok, gizli ücret yok. Her adımda neler olduğunu bilirsiniz.
          </p>
        </div>

        {/* Kompakt Timeline */}
        <div className="relative max-w-[700px] mx-auto">
          {/* Sol dikey çizgi */}
          <div className="absolute top-0 bottom-0 left-[19px] sm:left-[23px] w-[2px] rounded-full"
            style={{background:'linear-gradient(180deg,#22c55e 0%,#fc9e4f 33%,#ff521b 66%,#fb923c 100%)',boxShadow:'0 0 12px rgba(255,82,27,0.3)'}} />

          {steps.map(({ num, color, title, badge, badgeCls, desc, meta }, i) => (
            <div key={num} className={`grid grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr] gap-4 sm:gap-6 py-6 sm:py-8 relative ${i < steps.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>

              {/* Node */}
              <div className="flex items-start justify-center pt-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-night border-2 flex items-center justify-center shrink-0 relative z-10 text-[0.75rem] sm:text-[0.85rem] font-black"
                  style={{ borderColor: color, boxShadow: `0 0 16px ${color}40`, color }}>
                  {num}
                </div>
              </div>

              {/* İçerik */}
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[1.05rem] sm:text-[1.15rem] font-bold text-white">{title}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold tracking-wide uppercase border ${badgeCls}`}>
                    {badge}
                  </span>
                </div>
                <p className="text-white/50 text-[0.85rem] leading-[1.7] mb-2">{desc}</p>
                <span className="text-[0.72rem] text-white/25 font-mono">{meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

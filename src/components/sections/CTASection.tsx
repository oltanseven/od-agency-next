import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-12 sm:py-20 bg-cream-soft">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="relative bg-night rounded-3xl px-6 sm:px-16 py-14 sm:py-20 text-center overflow-hidden
          border border-white/[0.06]">

          {/* Glow efektleri */}
          <div aria-hidden className="absolute top-[-40px] right-[-60px] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{background:'radial-gradient(circle,rgba(255,82,27,0.18),transparent 70%)'}} />
          <div aria-hidden className="absolute bottom-[-40px] left-[-60px] w-[450px] h-[450px] rounded-full pointer-events-none"
            style={{background:'radial-gradient(circle,rgba(252,158,79,0.12),transparent 70%)'}} />

          <div className="relative z-10">
            <span className="text-coral text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4 block">
              // Hazır mısınız?
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.08] tracking-[-0.03em]
              text-white mb-4 max-w-[700px] mx-auto">
              Web siteniz <span className="gradient-text">işinizi büyütmeye</span> hazır mı?
            </h2>
            <p className="text-white/60 text-[1.05rem] max-w-[440px] mx-auto leading-[1.75] mb-4">
              Ücretsiz web analizi alın. Sitenizin güçlü ve zayıf yönlerini birlikte görelim.
            </p>
            <p className="text-white/35 text-[0.82rem] mb-10">
              Hiçbir taahhüt gerektirmez. 5 dakikada tamamlanır.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:merhaba@oder.agency"
                className="inline-flex items-center justify-center bg-white text-accent px-9 rounded-full
                  font-bold text-[0.95rem] no-underline hover:-translate-y-0.5
                  hover:shadow-[0_16px_36px_rgba(0,0,0,0.2)]
                  focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2
                  focus-visible:ring-offset-night"
                style={{ minHeight: '52px' }}>
                merhaba@oder.agency
              </Link>
              <a href="https://wa.me/905324652031" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center bg-white/10 text-white/80
                  border border-white/25 px-9 rounded-full font-semibold text-[0.95rem]
                  no-underline hover:border-white/60 hover:text-white
                  focus-visible:ring-2 focus-visible:ring-white/50"
                style={{ minHeight: '52px' }}>
                WhatsApp&apos;tan Yaz →
              </a>
            </div>

            <p className="mt-8 text-white/45 text-[0.82rem]">
              Pzt-Cmt 09:00-18:00 arasında hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-28 bg-night relative overflow-hidden">

      {/* bg glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1260px] mx-auto px-8 relative z-10 text-center">

        <span className="inline-block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">
          Başlayalım
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.08] tracking-[-0.03em]
          text-white mb-4 max-w-[700px] mx-auto">
          Projenizi hayata geçirmeye hazır mısınız?
        </h2>
        <p className="text-white/40 text-[1.05rem] max-w-[480px] mx-auto leading-[1.75] mb-10">
          Ücretsiz keşif görüşmesiyle başlayın. Projenizi anlatalım, birlikte en doğru çözümü belirleyelim.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/iletisim"
            className="bg-white text-night px-9 py-4 rounded-full font-bold text-[0.95rem]
              no-underline transition-all duration-200 hover:-translate-y-0.5
              hover:shadow-[0_16px_40px_rgba(255,255,255,0.15)]">
            merhaba@odagency.com
          </Link>
          <a href="https://wa.me/905324652031" target="_blank" rel="noreferrer"
            className="bg-white/10 text-white/80 border border-white/15 px-9 py-4 rounded-full
              font-semibold text-[0.95rem] no-underline transition-all duration-200
              hover:bg-white/15 hover:text-white">
            WhatsApp&apos;tan Yaz →
          </a>
        </div>

      </div>
    </section>
  )
}

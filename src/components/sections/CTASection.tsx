'use client'

import { useI18n } from '@/i18n/context'

export default function CTASection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  return (
    <section className="py-28 sm:py-40 bg-cream">
      <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">

        <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
          {en ? 'Ready?' : 'Hazır mısınız?'}
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-4">
          {en
            ? 'Ready to automate your business growth?'
            : 'İşletmenizin büyümesini otomatikleştirmeye hazır mısınız?'}
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
        <p className="text-ink/50 text-[1rem] leading-[1.7] mb-10 max-w-[520px] mx-auto">
          {en
            ? 'Get a free discovery call. Let\'s figure out which processes we can automate together.'
            : 'Ücretsiz keşif görüşmesi alın. Hangi süreçlerinizi otomatikleştirebileceğimizi birlikte belirleyelim.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:hello@oder.agency"
            className="bg-accent text-white px-10 rounded-full font-bold text-[1rem]
              no-underline hover:-translate-y-0.5 hover:shadow-lg
              transition-all duration-200 inline-flex items-center"
            style={{ minHeight: '56px' }}
          >
            hello@oder.agency
          </a>
          <a
            href="https://wa.me/905324652031"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 rounded-full font-bold text-[1rem]
              no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,211,102,0.25)]
              transition-all duration-200 inline-flex items-center gap-2"
            style={{ minHeight: '56px' }}
          >
            WhatsApp
          </a>
        </div>

        <p className="text-ink/30 text-[0.78rem]">
          {en ? 'Mon-Sat 09:00-18:00' : 'Pzt-Cmt 09:00-18:00'}
        </p>
      </div>
    </section>
  )
}

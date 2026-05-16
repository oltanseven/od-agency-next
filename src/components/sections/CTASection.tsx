'use client'

import { useI18n } from '@/i18n/context'

export default function CTASection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  return (
    <section className="py-16 sm:py-24 bg-cream-soft">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="relative bg-[#0f172a] rounded-3xl px-6 sm:px-16 py-16 sm:py-24 text-center overflow-hidden">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full
            pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,82,27,0.06) 0%, transparent 70%)' }} />

          <div className="relative z-10">
            <span className="text-white/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
              {en ? 'Ready?' : 'Hazir misiniz?'}
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-white mb-4">
              {en
                ? 'Ready to automate your business growth?'
                : 'Isletmenizin buyumesini otomatiklestirmeye hazir misiniz?'}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-white/50 text-[1rem] leading-[1.7] mb-10 max-w-[560px] mx-auto">
              {en
                ? 'Get a free discovery call. Let\u0027s figure out which processes we can automate together.'
                : 'Ucretsiz kesif gorusmesi alin. Hangi sureclerinizi otomatiklestirebilecegimizi birlikte belirleyelim.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-10 rounded-full font-bold text-[1rem]
                  no-underline hover:-translate-y-0.5 hover:bg-white/15
                  transition-all duration-200 inline-flex items-center border border-white/10"
                style={{ minHeight: '56px' }}
              >
                WhatsApp
              </a>
            </div>

            <p className="text-white/30 text-[0.78rem] mt-6">
              {en ? 'Mon-Sat 09:00-18:00' : 'Pzt-Cmt 09:00-18:00'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/context'

export default function TestimonialsSection() {
  const { locale } = useI18n()
  const en = locale === 'en'
  const applyHref = en ? '/apply' : '/tr/apply'

  const guarantees = [
    {
      title: en ? 'Outcome-Based Work' : 'Sonuç Odaklı Çalışma',
      desc: en
        ? 'If we don\u0027t produce measurable results, you don\u0027t pay. We tie our success to your success.'
        : 'Ölçülebilir sonuçlar üretmezsek ödeme yapmazsınız. Başarımızı sizin başarınıza bağlıyoruz.',
    },
    {
      title: en ? 'Direct Access' : 'Doğrudan Erişim',
      desc: en
        ? 'You work directly with the founder. No middlemen, no account managers. Fast decisions, real accountability.'
        : 'Kurucuyla direkt çalışırsınız. Aracı, müşteri temsilcisi yok. Hızlı kararlar, gerçek sorumluluk.',
    },
    {
      title: en ? 'Month-to-Month' : 'Ay Be Ay Çalışma',
      desc: en
        ? 'No long-term contracts. If we don\u0027t deliver value each month, you walk. Simple as that.'
        : 'Uzun vadeli sözleşme yok. Her ay değer üretmezsek gidersiniz. Bu kadar basit.',
    },
  ]

  const techBadges = [
    'Next.js', 'n8n', 'React', 'Supabase', 'Vercel', 'TypeScript',
    'OpenAI', 'Claude AI', 'Retell', 'Tailwind CSS',
  ]

  return (
    <section id="yorumlar" className="py-28 sm:py-40 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
            {en ? 'Why Trust Us?' : 'Neden Güvenilir?'}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-4">
            {en ? 'We back our work with written guarantees' : 'Sözümüzü yazılı garanti ile veriyoruz'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-5" />
          <p className="text-ink/50 max-w-[500px] leading-[1.7] text-[1rem]">
            {en
              ? 'Every engagement comes with these three commitments. We take the risk so you can move forward with confidence.'
              : 'Her projede bu üç taahhüdü yazılı olarak sunuyoruz. Riski biz üstleniyoruz, siz rahat çalışın.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {guarantees.map(({ title, desc }) => (
            <div key={title}
              className="bg-white border border-black/[0.08] rounded-2xl p-8 sm:p-10
                hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-[1.1rem] font-bold text-ink mb-3">{title}</h3>
              <p className="text-ink/50 text-[0.92rem] leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <span className="text-ink/40 text-[0.78rem] font-semibold tracking-wide uppercase block mb-4">
            {en ? 'Technologies We Use' : 'Kullandığımız Teknolojiler'}
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map(badge => (
              <span key={badge}
                className="px-4 py-2 rounded-full text-[0.8rem] font-medium text-ink/50
                  bg-[#f8fafc] border border-black/[0.06]
                  hover:border-accent/20 hover:text-accent/70 transition-colors">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#f8fafc] border border-black/[0.08] rounded-2xl p-8 sm:p-10
          flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-1">
              {en ? 'Take the first step' : 'İlk adımı atın'}
            </h3>
            <p className="text-ink/50 text-[0.92rem] max-w-[480px] leading-[1.7]">
              {en
                ? 'Book a free discovery call. No commitments, no pressure. Just a clear picture of what we can automate for you.'
                : 'Ücretsiz keşif görüşmesi alın. Taahhüt yok, baskı yok. Sizin için neleri otomatikleştirebileceğimizin net bir resmi.'}
            </p>
          </div>
          <Link href={applyHref}
            className="shrink-0 bg-accent text-white px-8 py-3.5 rounded-full font-bold text-[0.95rem]
              no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 whitespace-nowrap">
            {en ? 'Get a Free Discovery Call' : 'Ücretsiz Keşif Görüşmesi Al'}
          </Link>
        </div>
      </div>
    </section>
  )
}

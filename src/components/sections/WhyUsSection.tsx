'use client'

import { useI18n } from '@/i18n/context'

export default function WhyUsSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const items = [
    {
      title: en ? 'No middlemen' : 'Aracı yok',
      desc: en
        ? 'You work directly with the person who builds your systems. No account managers, no ticket queues.'
        : 'Sistemlerinizi kuran kişiyle direkt çalışırsınız. Müşteri temsilcisi yok, destek kuyruğu yok.',
    },
    {
      title: en ? 'Outcome-focused' : 'Sonuç odaklı',
      desc: en
        ? 'We measure success by your business metrics, not by hours worked or features shipped.'
        : 'Başarıyı çalışılan saat veya teslim edilen özellikle değil, sizin iş metriklerinizle ölçüyoruz.',
    },
    {
      title: en ? 'Annual partnership' : 'Yıllık ortaklık',
      desc: en
        ? 'We work as your dedicated growth partner. Real systems need time to compound, and quarterly reviews keep us accountable.'
        : 'Sizin büyüme ortağınız olarak çalışıyoruz. Gerçek sistemlerin bileşik getiri üretmesi zaman alır, çeyreklik değerlendirmelerle hesap verebilirliğimizi koruyoruz.',
    },
    {
      title: en ? 'Builder-first' : 'Önce inşa eden',
      desc: en
        ? 'We are engineers, not salespeople. We build real systems with production-grade code and proven tools.'
        : 'Biz satışçı değil, mühendisiz. Üretim kalitesinde kod ve kanıtlanmış araçlarla gerçek sistemler kuruyoruz.',
    },
  ]

  return (
    <section className="py-28 sm:py-40 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
            {en ? 'Why Us' : 'Neden Biz'}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-4">
            {en ? 'Built different, on purpose' : 'Bilinçli olarak farklı kurulduk'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-5" />
          <p className="text-ink/50 max-w-[560px] leading-[1.7] text-[1rem]">
            {en
              ? 'We are not a typical agency. Here is how we work and why it matters for your business.'
              : 'Tipik bir ajans değiliz. İşte nasıl çalıştığımız ve bunun işletmeniz için neden önemli olduğu.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px]">
          {items.map((item, i) => (
            <div key={i}
              className="od-card">
              <h3 className="text-[1.1rem] font-bold text-ink mb-3">{item.title}</h3>
              <p className="text-ink/50 text-[0.92rem] leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

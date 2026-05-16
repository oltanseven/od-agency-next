'use client'

import { useI18n } from '@/i18n/context'

export default function ProblemSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const items = [
    {
      num: '01',
      title: en ? 'Missed leads after hours' : 'Mesai sonrası kaçan müşteriler',
      desc: en
        ? 'Potential customers reach out at night or on weekends. Nobody answers, and they move on to your competitor.'
        : 'Potansiyel müşteriler gece veya hafta sonu ulaşıyor. Kimse cevap vermiyor ve rakibinize gidiyorlar.',
    },
    {
      num: '02',
      title: en ? 'Repetitive manual tasks' : 'Tekrarlayan manuel işler',
      desc: en
        ? 'Your team spends hours on copy-paste work, data entry, and follow-ups that could be fully automated.'
        : 'Ekibiniz kopyala-yapıştır işlerine, veri girişine ve tamamen otomatikleştirilebilecek takiplere saatler harcıyor.',
    },
    {
      num: '03',
      title: en ? 'Scaling means hiring' : 'Büyümek = işe alım',
      desc: en
        ? 'Every time demand grows, you need more people. Your costs scale linearly while your margins shrink.'
        : 'Talep her arttığında daha fazla insana ihtiyaç duyuyorsunuz. Maliyetleriniz doğrusal büyürken kar marjınız daralıyor.',
    },
    {
      num: '04',
      title: en ? 'Reports, not results' : 'Raporlar var, sonuç yok',
      desc: en
        ? 'You get dashboards full of metrics but nothing actually changes. Data without action is just noise.'
        : 'Metriklerle dolu panolarınız var ama hiçbir şey gerçekten değişmiyor. Aksiyon olmadan veri sadece gürültüdür.',
    },
  ]

  return (
    <section className="py-28 sm:py-40 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
            {en ? 'Problem' : 'Problem'}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-4">
            {en ? 'Sound familiar?' : 'Tanıdık geliyor mu?'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-5" />
          <p className="text-ink/50 max-w-[500px] leading-[1.7] text-[1rem]">
            {en
              ? 'Most businesses hit the same walls when they try to grow. Here are the ones we solve every day.'
              : 'Çoğu işletme büyümeye çalışırken aynı duvarlara çarpar. İşte her gün çözdüklerimiz.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.num}
              className="bg-white border border-black/[0.08] rounded-2xl p-8 sm:p-10
                hover:shadow-lg transition-shadow duration-300">
              <span className="text-accent/30 text-[0.75rem] font-bold tracking-wider mb-4 block">{item.num}</span>
              <h3 className="text-[1.1rem] font-bold text-ink mb-3">{item.title}</h3>
              <p className="text-ink/50 text-[0.92rem] leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useI18n } from '@/i18n/context'

export default function StatsSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const stats = [
    { val: '90%', label: en ? 'Cost Reduction' : 'Maliyet Dususu' },
    { val: '24/7', label: en ? 'Uptime' : 'Kesintisiz Calisma' },
    { val: en ? '2 Weeks' : '2 Hafta', label: en ? 'Go Live' : 'Canliya Gecis' },
    { val: 'n8n', label: en ? 'Core Engine' : 'Temel Motor' },
  ]

  return (
    <div className="bg-accent py-16 sm:py-24">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] font-black tracking-tight text-white leading-none mb-2">{val}</div>
              <div className="text-white/70 text-[0.8rem] sm:text-[0.88rem]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

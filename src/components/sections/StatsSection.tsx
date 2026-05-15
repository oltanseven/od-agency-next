'use client'

import { useI18n } from '@/i18n/context'

export default function StatsSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const stats = [
    { val: '90%', label: en ? 'Cost Reduction' : 'Maliyet Düşüşü' },
    { val: '24/7', label: en ? 'Uptime' : 'Kesintisiz Çalışma' },
    { val: en ? '2 Weeks' : '2 Hafta', label: en ? 'Go Live' : 'Canlıya Geçiş' },
    { val: 'n8n', label: en ? 'Core Engine' : 'Temel Motor' },
  ]

  return (
    <div className="bg-accent pb-10 sm:pb-16">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ val, label }, i) => (
            <div key={label}
              className={`py-8 sm:py-16 px-3 sm:px-6 text-center border-white/15 ${i < stats.length - 1 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''}`}>
              <div className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[3rem] font-black tracking-tight text-white leading-none mb-1">{val}</div>
              <div className="text-white/70 text-[0.68rem] sm:text-[0.75rem] md:text-[0.88rem]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

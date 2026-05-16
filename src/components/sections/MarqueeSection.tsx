'use client'

import { useI18n } from '@/i18n/context'

const itemsEN = [
  'Clinics & Healthcare', 'SaaS & Technology', 'Real Estate', 'Legal Firms',
  'Restaurants & Hospitality', 'E-Commerce', 'Education', 'Finance',
  'Logistics', 'B2B Services',
]
const itemsTR = [
  'Klinik & Sağlık', 'SaaS & Teknoloji', 'Gayrimenkul', 'Hukuk Büroları',
  'Restoran & Konaklama', 'E-Ticaret', 'Eğitim', 'Finans',
  'Lojistik', 'B2B Hizmetler',
]

const items2EN = [
  'Lead Generation', 'Customer Support', 'Scheduling', 'CRM Automation',
  'Data Analytics', 'Email Marketing', 'Reporting', 'Workflow Design',
  'Process Mapping', 'Performance Tracking',
]
const items2TR = [
  'Lead Üretimi', 'Müşteri Destek', 'Randevu Yönetimi', 'CRM Otomasyonu',
  'Veri Analitiği', 'E-posta Pazarlama', 'Raporlama', 'İş Akışı Tasarımı',
  'Süreç Haritalama', 'Performans Takibi',
]

export default function MarqueeSection() {
  const { locale } = useI18n()
  const items = locale === 'en' ? itemsEN : itemsTR
  const items2 = locale === 'en' ? items2EN : items2TR

  const t1 = [...items, ...items, ...items]
  const t2 = [...items2, ...items2, ...items2]

  return (
    <div className="relative bg-cream-soft overflow-hidden py-10 sm:py-14 border-y border-black/[0.06]">
      <div className="flex flex-col gap-3">
        <div className="flex gap-8 w-max animate-[slideLeft_26s_linear_infinite]">
          {t1.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-ink/30 text-[0.85rem] font-semibold tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent/30 text-xs">&#x2022;</span>
            </span>
          ))}
        </div>
        <div className="flex gap-8 w-max animate-[slideRight_30s_linear_infinite]">
          {t2.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-ink/20 text-[0.85rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent/20 text-xs">&#x2022;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

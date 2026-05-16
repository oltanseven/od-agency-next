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
  'WhatsApp Automation', 'Voice AI', 'Lead Capture', 'CRM Integration',
  'Email Automation', 'Review Management', 'Appointment Booking', 'Analytics Dashboard',
  'Invoice Processing', 'Workflow Builder',
]
const items2TR = [
  'WhatsApp Otomasyon', 'Sesli AI', 'Lead Yakalama', 'CRM Entegrasyonu',
  'E-posta Otomasyonu', 'Yorum Yönetimi', 'Randevu Alma', 'Analitik Dashboard',
  'Fatura İşleme', 'İş Akışı Kurulumu',
]

const items3 = [
  'Next.js', 'React', 'n8n', 'Supabase', 'Vercel',
  'TypeScript', 'OpenAI', 'Claude AI', 'Retell', 'Tailwind CSS',
]

export default function MarqueeSection() {
  const { locale } = useI18n()
  const items = locale === 'en' ? itemsEN : itemsTR
  const items2 = locale === 'en' ? items2EN : items2TR

  const t1 = [...items, ...items, ...items]
  const t2 = [...items2, ...items2, ...items2]
  const t3 = [...items3, ...items3, ...items3]

  return (
    <div className="relative bg-[#0f172a] overflow-hidden py-12 sm:py-16">
      <div className="flex flex-col gap-4">
        <div className="flex gap-8 w-max animate-[slideLeft_26s_linear_infinite]">
          {t1.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/40 text-[0.85rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent/40 text-xs">&#x2022;</span>
            </span>
          ))}
        </div>
        <div className="flex gap-8 w-max animate-[slideRight_30s_linear_infinite]">
          {t2.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/25 text-[0.85rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent/30 text-xs">&#x2022;</span>
            </span>
          ))}
        </div>
        <div className="flex gap-8 w-max animate-[slideLeft_34s_linear_infinite]">
          {t3.map((item, i) => (
            <span key={`c-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/15 text-[0.8rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent/20 text-xs">&#x2022;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

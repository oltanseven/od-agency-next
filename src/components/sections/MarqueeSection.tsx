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
    <div className="relative bg-night overflow-hidden" style={{ padding: '3.5rem 0 4.5rem' }}>
      <div aria-hidden className="absolute top-[10%] right-[-5%] w-[60%] h-[80%] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,82,27,0.15), transparent 65%)' }} />
      <div aria-hidden className="absolute bottom-[10%] left-[-5%] w-[50%] h-[80%] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(252,158,79,0.10), transparent 65%)' }} />

      <div className="relative flex flex-col gap-3 -mx-8 sm:-mx-12 md:-mx-20" style={{ transform: 'rotate(-6deg)', marginTop: '-1rem', marginBottom: '-1rem' }}>
        <div className="flex gap-8 w-max animate-[slideLeft_26s_linear_infinite]">
          {t1.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/80 text-[0.92rem] font-semibold tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent text-xs opacity-60">✦</span>
            </span>
          ))}
        </div>
        <div className="flex gap-8 w-max animate-[slideRight_30s_linear_infinite]">
          {t2.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/50 text-[0.92rem] font-semibold tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-coral text-xs opacity-40">✦</span>
            </span>
          ))}
        </div>
        <div className="flex gap-8 w-max animate-[slideLeft_34s_linear_infinite]">
          {t3.map((item, i) => (
            <span key={`c-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/30 text-[0.85rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent text-xs opacity-20">✦</span>
            </span>
          ))}
        </div>
        <div className="flex gap-8 w-max animate-[slideRight_28s_linear_infinite]">
          {t1.map((item, i) => (
            <span key={`d-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/20 text-[0.85rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-coral text-xs opacity-15">✦</span>
            </span>
          ))}
        </div>
        <div className="flex gap-8 w-max animate-[slideLeft_32s_linear_infinite]">
          {t2.map((item, i) => (
            <span key={`e-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/[0.12] text-[0.82rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent text-xs opacity-10">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

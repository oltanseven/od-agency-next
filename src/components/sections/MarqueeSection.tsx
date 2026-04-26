const items = [
  'E-Ticaret', 'SaaS & Teknoloji', 'Restoran & Cafe', 'Hukuk Büroları',
  'Sağlık & Klinik', 'Gayrimenkul', 'Eğitim', 'Fintech',
  'Moda & Lifestyle', 'B2B & Kurumsal',
]

const items2 = [
  'Landing Page', 'AI Chatbot', 'SEO Optimizasyonu', 'WhatsApp Botu',
  'E-posta Otomasyonu', 'CRM Entegrasyonu', 'Blog Sistemi', 'Analitik Dashboard',
  'Ödeme Sistemi', 'Kargo Entegrasyonu',
]

const items3 = [
  'Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Vercel',
  'TypeScript', 'Shopify', 'WooCommerce', 'Stripe', 'Node.js',
]

export default function MarqueeSection() {
  const t1 = [...items, ...items, ...items]
  const t2 = [...items2, ...items2, ...items2]
  const t3 = [...items3, ...items3, ...items3]

  return (
    <div className="relative bg-night overflow-hidden" style={{ padding: '3.5rem 0' }}>

      {/* Glow efektleri — section içinde */}
      <div aria-hidden className="absolute top-[20px] right-[20px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,82,27,0.2), transparent 65%)' }} />
      <div aria-hidden className="absolute bottom-[20px] left-[20px] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(252,158,79,0.15), transparent 65%)' }} />
      <div aria-hidden className="absolute top-[40%] left-[50%] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,82,27,0.1), transparent 65%)' }} />

      {/* Döndürülmüş container — eğimli */}
      <div className="relative flex flex-col gap-3" style={{ transform: 'rotate(-6deg)', margin: '-1.5rem -6rem' }}>

        {/* Satır 1 — sola, parlak */}
        <div className="flex gap-8 w-max animate-[slideLeft_26s_linear_infinite]">
          {t1.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/80 text-[0.92rem] font-semibold tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent text-xs opacity-60">✦</span>
            </span>
          ))}
        </div>

        {/* Satır 2 — sağa, orta */}
        <div className="flex gap-8 w-max animate-[slideRight_30s_linear_infinite]">
          {t2.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/50 text-[0.92rem] font-semibold tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-coral text-xs opacity-40">✦</span>
            </span>
          ))}
        </div>

        {/* Satır 3 — sola, soluk */}
        <div className="flex gap-8 w-max animate-[slideLeft_34s_linear_infinite]">
          {t3.map((item, i) => (
            <span key={`c-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/30 text-[0.85rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-accent text-xs opacity-20">✦</span>
            </span>
          ))}
        </div>

        {/* Satır 4 — sağa, en soluk */}
        <div className="flex gap-8 w-max animate-[slideRight_28s_linear_infinite]">
          {t1.map((item, i) => (
            <span key={`d-${i}`} className="flex items-center gap-8 shrink-0">
              <span className="text-white/20 text-[0.85rem] font-medium tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-coral text-xs opacity-15">✦</span>
            </span>
          ))}
        </div>

        {/* Satır 5 — sola, hayalet */}
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

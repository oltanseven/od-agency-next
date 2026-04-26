import Link from 'next/link'

/* Mini site kartları — her biri farklı sektör/framework sitesi mockup'ı */
const sites = [
  { bg: 'from-[#F5F3FF] to-[#EDE9FE]', label: 'E-Ticaret', accent: '#7c3aed', dark: false },
  { bg: 'from-[#FFF7ED] to-[#FFEDD5]', label: 'Restoran', accent: '#ea580c', dark: false },
  { bg: 'from-[#EFF6FF] to-[#DBEAFE]', label: 'Hukuk', accent: '#2563eb', dark: false },
  { bg: 'from-[#0F1A2E] to-[#1E2D47]', label: 'SaaS', accent: '#38bdf8', dark: true },
  { bg: 'from-[#F0FDF4] to-[#DCFCE7]', label: 'Sağlık', accent: '#16a34a', dark: false },
  { bg: 'from-[#FFFBEB] to-[#FEF3C7]', label: 'Gayrimenkul', accent: '#d97706', dark: false },
  { bg: 'from-[#FDF2F8] to-[#FCE7F3]', label: 'Moda', accent: '#db2777', dark: false },
  { bg: 'from-[#F0FDFA] to-[#CCFBF1]', label: 'Fintech', accent: '#0d9488', dark: false },
  { bg: 'from-[#FEFCE8] to-[#FEF9C3]', label: 'Eğitim', accent: '#ca8a04', dark: false },
]

function MiniCard({ idx }: { idx: number }) {
  const s = sites[idx % sites.length]
  const txt = s.dark ? 'rgba(255,255,255,' : 'rgba(0,0,0,'
  return (
    <div className="w-[200px] h-[138px] shrink-0 rounded-[12px] overflow-hidden border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.15)] bg-white">
      {/* Browser bar */}
      <div className="h-[22px] bg-[#F4F4F6] border-b border-black/5 flex items-center gap-1 px-2">
        <span className="w-[6px] h-[6px] rounded-full bg-[#FF5F57]" />
        <span className="w-[6px] h-[6px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[6px] h-[6px] rounded-full bg-[#28C840]" />
        <div className="flex-1 h-[10px] bg-[#E2E2E6] rounded-sm ml-1" />
      </div>
      {/* Site içerik mockup */}
      <div className={`h-[calc(100%-22px)] bg-gradient-to-br ${s.bg} p-3 flex flex-col`}>
        {/* Nav mockup */}
        <div className="flex items-center justify-between mb-2">
          <div className="h-[6px] w-[40px] rounded-sm" style={{ background: s.accent }} />
          <div className="flex gap-1.5">
            <div className="h-[4px] w-[20px] rounded-sm" style={{ background: `${txt}0.15)` }} />
            <div className="h-[4px] w-[20px] rounded-sm" style={{ background: `${txt}0.15)` }} />
            <div className="h-[4px] w-[20px] rounded-sm" style={{ background: `${txt}0.15)` }} />
          </div>
        </div>
        {/* Hero text mockup */}
        <div className="h-[8px] w-[70%] rounded-sm mb-1.5" style={{ background: `${txt}0.6)` }} />
        <div className="h-[5px] w-[50%] rounded-sm mb-2.5" style={{ background: `${txt}0.2)` }} />
        {/* CTA mockup */}
        <div className="h-[12px] w-[55px] rounded-full mb-2.5" style={{ background: s.accent }} />
        {/* Cards mockup */}
        <div className="flex gap-1.5 mt-auto">
          <div className="flex-1 h-[22px] rounded-[4px]" style={{ background: `${txt}0.06)` }} />
          <div className="flex-1 h-[22px] rounded-[4px]" style={{ background: `${txt}0.06)` }} />
          <div className="flex-1 h-[22px] rounded-[4px]" style={{ background: `${txt}0.06)` }} />
        </div>
        {/* Sektör etiketi */}
        <div className="mt-1.5 text-[6px] font-bold tracking-wider uppercase text-right"
          style={{ color: `${txt}0.25)` }}>
          {s.label}
        </div>
      </div>
    </div>
  )
}

const row1 = [0,1,2,3,4,5,6]
const row2 = [7,8,6,3,1,0,5]
const row3 = [4,2,7,8,0,6,1]

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-40 sm:pt-32 pb-40 sm:pb-36 bg-cream relative overflow-hidden">

      {/* Kayan kart arka planı */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.25] sm:opacity-[0.15]">
        <div className="flex flex-col gap-4 justify-center h-full">
          {/* Satır 1 — sola */}
          <div className="flex gap-4 w-max animate-[slideLeft_38s_linear_infinite]">
            {[...row1,...row1].map((t,i) => <MiniCard key={i} idx={t} />)}
          </div>
          {/* Satır 2 — sağa */}
          <div className="flex gap-4 w-max animate-[slideRight_44s_linear_infinite]">
            {[...row2,...row2].map((t,i) => <MiniCard key={i} idx={t} />)}
          </div>
          {/* Satır 3 — sola */}
          <div className="flex gap-4 w-max animate-[slideLeft_30s_linear_infinite]">
            {[...row3,...row3].map((t,i) => <MiniCard key={i} idx={t} />)}
          </div>
        </div>
      </div>

      {/* Gradient örtü — mobilde daha az kapatma */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{background:'linear-gradient(to bottom,#FFFEF8 0%,transparent 10%,transparent 90%,#FFFEF8 100%), linear-gradient(to right,#FFFEF8 0%,transparent 8%,transparent 92%,#FFFEF8 100%)'}} />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* SOL: metin kartı */}
          <div className="bg-[rgba(255,254,248,0.82)] sm:bg-[rgba(255,254,248,0.88)] backdrop-blur-xl border border-black/10
            shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-3xl p-6 sm:p-9 md:p-12">

            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/40
              px-3 sm:px-4 py-1.5 rounded-full text-accent text-[0.7rem] sm:text-[0.8rem] font-semibold mb-7">
              <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 animate-[blink_2s_ease-in-out_infinite]" />
              Lansman Kampanyası
            </div>

            <h1 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black leading-[1.08] tracking-[-0.03em] mb-4 text-ink">
              Web siteniz<br />
              <span className="gradient-text">satış yapsın,</span><br />
              siz büyüyün.
            </h1>

            <p className="text-ink/50 text-[0.95rem] leading-[1.75] mb-8 max-w-[420px]">
              Telefondan da mükemmel görünen, Google&apos;da üst sıralarda çıkan web siteniz ile dijitalde fark yaratın. Hemen başlayalım.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/iletisim"
                className="bg-accent text-white px-8 rounded-full font-bold text-[0.95rem]
                  no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)]
                  transition-all duration-200 inline-flex items-center gap-1"
                style={{ minHeight: '48px' }}>
                Ücretsiz Web Analizi Al →
              </Link>
              <a href="https://wa.me/905324652031?text=Merhaba%2C%20web%20sitesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer"
                className="bg-[#25D366] text-white px-8 rounded-full font-semibold text-[0.95rem]
                  no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,211,102,0.2)]
                  transition-all duration-200 inline-flex items-center gap-2"
                style={{ minHeight: '48px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>

          {/* SAĞ: browser mockup + metric pills */}
          <div className="hidden lg:block relative h-[400px]">
            {/* Browser mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[360px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.13)]
              border border-black/[0.07] overflow-hidden">
              <div className="bg-[#F2F2F2] border-b border-black/[0.06] px-3 py-2 flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-[#E5E5E5] rounded-full h-[22px] px-2.5 flex items-center text-[0.62rem] text-gray-400">
                  od-agency.com/proje
                </div>
              </div>
              <div className="p-3.5 bg-[#FAFAFA]">
                <div className="h-7 bg-white rounded-lg mb-3 border border-black/5" />
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 mb-3 border border-orange-100/50">
                  <div className="h-3 w-[70%] bg-ink/80 rounded-md mb-2" />
                  <div className="h-2 w-[55%] bg-ink/30 rounded mb-3.5" />
                  <div className="h-5 w-28 bg-accent rounded-full" />
                </div>
                <div className="flex gap-2">
                  {['from-orange-50 to-red-50','from-blue-50 to-indigo-50','from-green-50 to-emerald-50'].map(g => (
                    <div key={g} className={`flex-1 h-14 rounded-lg bg-gradient-to-br ${g} border border-black/5`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Pill 1 — sol üst */}
            <div className="absolute top-2.5 left-[-20px] bg-white border border-black/[0.08]
              shadow-[0_8px_28px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3
              flex items-center gap-3 whitespace-nowrap animate-[floatA_4s_ease-in-out_infinite]">
              <div className="w-9 h-9 rounded-[10px] bg-accent/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                  <path d="M8 12l3 3 5-5" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-[1.15rem] font-black text-ink leading-none">14 gün</div>
                <div className="text-[0.72rem] text-ink/50 font-medium mt-0.5">Memnuniyet Garantisi</div>
              </div>
            </div>

            {/* Pill 2 — sağ alt */}
            <div className="absolute bottom-7 right-[-10px] bg-white border border-black/[0.08]
              shadow-[0_8px_28px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3
              flex items-center gap-3 whitespace-nowrap animate-[floatB_5s_ease-in-out_infinite]">
              <div className="w-9 h-9 rounded-[10px] bg-accent/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                  <path d="M12 6v6l4 2" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="text-[1.15rem] font-black text-ink leading-none">5 gün</div>
                <div className="text-[0.72rem] text-ink/50 font-medium mt-0.5">Hızlı Teslimat</div>
              </div>
            </div>

            {/* Score badge — sağ üst */}
            <div className="absolute top-3.5 right-0 bg-white border border-black/[0.08]
              shadow-[0_8px_28px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3 text-center
              animate-[floatC_4.5s_ease-in-out_infinite]">
              <div className="text-[1.5rem] font-black text-[#28C840] leading-none">100</div>
              <div className="text-[0.7rem] text-ink/50 font-medium mt-1">Performance</div>
              <div className="flex gap-1 justify-center mt-1.5">
                {[0,1,2].map(i => <span key={i} className="w-2 h-2 rounded-full bg-[#28C840]" />)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

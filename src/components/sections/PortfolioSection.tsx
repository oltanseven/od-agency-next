const projects = [
  { bg: 'from-[#3b1060] via-[#6d28d9] to-[#4338ca]', chip: 'Pilates Stüdyo', title: 'Cosmos Pilates', result: 'Online randevu sistemi' },
  { bg: 'from-[#0c1a2e] via-[#1e3a5f] to-[#0f4c75]', chip: 'Kurumsal',  title: 'B2B Konsept', result: 'Dönüşüm odaklı kurumsal site' },
  { bg: 'from-[#2d0a00] via-[#7c2d12] to-[#431407]', chip: 'E-Ticaret',  title: 'E-Ticaret Konsept', result: 'Ödeme & kargo entegrasyonu' },
  { bg: 'from-[#052e16] via-[#14532d] to-[#1a3d2b]', chip: 'AI Otomasyon', title: 'AI Chatbot Demo', result: '7/24 müşteri desteği' },
]

function BrowserMock() {
  return (
    <div className="w-[76%] bg-white/[0.06] border border-white/[0.12] rounded-xl overflow-hidden">
      <div className="px-3 py-2 bg-white/[0.09] border-b border-white/[0.08] flex items-center gap-1.5">
        <span className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
        <span className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
        <div className="flex-1 h-4 bg-white/[0.08] rounded ml-1" />
      </div>
      <div className="p-3 h-[100px] flex flex-col gap-1.5">
        <div className="h-[6px] bg-white/35 rounded w-[35%]" />
        <div className="h-[6px] bg-white/10 rounded" />
        <div className="h-[6px] bg-white/10 rounded w-[55%]" />
        <div className="h-[6px] bg-white/10 rounded" />
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  return (
    <section id="referanslar" className="py-16 sm:py-28 bg-cream border-t border-black/[0.07]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // Referanslar
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            Öne çıkan <span className="gradient-text">projelerimiz</span>
          </h2>
          <p className="text-ink/50 mt-3 leading-[1.7]">Farklı sektörlerden projeler. Her biri özenle tasarlanmış, dönüşüm odaklı.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(({ bg, chip, title, result }) => (
            <div key={title}
              className="relative rounded-[18px] overflow-hidden aspect-[16/10] border border-black/[0.09] cursor-pointer group">

              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bg} transition-transform duration-500 group-hover:scale-[1.04]`} />

              {/* Browser mock */}
              <div className="absolute inset-0 flex items-center justify-center">
                <BrowserMock />
              </div>

              {/* Chip */}
              <span className="absolute top-4 left-4 bg-white text-ink text-[0.7rem] font-bold
                px-3 py-1 rounded-full z-10">
                {chip}
              </span>

              {/* Hover overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10
                bg-gradient-to-t from-black/85 to-transparent
                translate-y-2 opacity-0 transition-all duration-300
                group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-[0.95rem] font-bold text-white mb-0.5">{title}</h3>
                <p className="text-white/65 text-[0.8rem]">{result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

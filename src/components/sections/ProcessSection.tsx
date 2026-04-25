const steps = [
  {
    num: '01',
    title: 'Keşif Görüşmesi',
    desc: 'Hedeflerinizi, sektörünüzü ve rakiplerinizi analiz ederek projenin haritasını çıkarıyoruz.',
    status: 'done',
  },
  {
    num: '02',
    title: 'Strateji & Tasarım',
    desc: 'Marka kimliğinize uygun wireframe ve prototip hazırlıyoruz, onayınızla ilerliyoruz.',
    status: 'active',
  },
  {
    num: '03',
    title: 'Geliştirme',
    desc: 'Hızlı, SEO dostu ve mobil uyumlu yapı kuruyoruz. Her aşamada sizi bilgilendiriyoruz.',
    status: 'queue',
  },
  {
    num: '04',
    title: 'Yayın & Destek',
    desc: 'Sitenizi yayına alıyor, eğitimi veriyoruz. Sonrası için bakım paketi seçeneği sunuyoruz.',
    status: 'upcoming',
  },
]

const statusStyle: Record<string, string> = {
  done:     'bg-white/10 border-white/20 text-white/80',
  active:   'bg-accent border-accent text-white shadow-[0_0_20px_rgba(255,82,27,0.4)] animate-[nodePulse_2s_ease-in-out_infinite]',
  queue:    'bg-night border-accent text-white/80',
  upcoming: 'bg-white/5 border-white/10 text-white/40',
}

export default function ProcessSection() {
  return (
    <section id="surec" className="py-28 bg-night">
      <div className="max-w-[1260px] mx-auto px-8">

        <div className="mb-14">
          <span className="inline-block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3">
            Süreç
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-white">
            Nasıl çalışıyoruz?
          </h2>
          <p className="text-white/40 mt-3 max-w-[500px] leading-[1.7]">
            Şeffaf ve öngörülebilir bir süreçle projenizi zamanında ve bütçe dahilinde teslim ediyoruz.
          </p>
        </div>

        {/* Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map(({ num, title, desc, status }, i) => (
            <div key={num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-full w-4 z-10">
                  <div className="relative h-px bg-white/10">
                    <div className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-accent
                      animate-[flowDot_3s_linear_infinite]" style={{ animationDelay: `${i * 0.75}s` }} />
                  </div>
                </div>
              )}

              <div className={`rounded-[18px] border p-6 h-full transition-all duration-300 ${statusStyle[status]}`}>
                <div className="text-[0.72rem] font-bold tracking-widest opacity-60 mb-4">{num}</div>
                <h3 className="text-[1rem] font-bold mb-2">{title}</h3>
                <p className="text-[0.85rem] leading-[1.7] opacity-70">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {[
            { val: '42+', label: 'Tamamlanan Proje' },
            { val: '98%', label: 'Müşteri Memnuniyeti' },
            { val: '14g', label: 'Ortalama Teslimat' },
            { val: '4.9★', label: 'Ortalama Puan' },
          ].map(({ val, label }) => (
            <div key={label} className="bg-white/[0.03] px-6 py-6 text-center">
              <div className="text-[2rem] font-black text-white leading-none mb-1">{val}</div>
              <div className="text-white/40 text-[0.8rem]">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

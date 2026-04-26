const steps = [
  {
    nodeColor: 'border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.5)]',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#4ade80" strokeWidth="1.5" opacity="0.38"/><path d="M8 8.5A4 4 0 0114.5 11" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/><path d="M16.5 16.5L21 21" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    title: 'Keşif & Strateji',
    badge: { label: 'Tamamlandı', cls: 'bg-[rgba(34,197,94,0.15)] text-[#4ade80] border border-[rgba(34,197,94,0.3)]', dotCls: 'bg-[#4ade80]' },
    desc: 'İşletmenizi, hedef kitlenizi ve rakiplerinizi derinlemesine analiz ediyoruz. Sektörünüzü, güçlü/zayıf yönlerinizi ve büyüme fırsatlarınızı tespit edip size özel bir dijital yol haritası oluşturuyoruz.',
    checks: [
      { done: true,  text: 'Rakip analizi & sektör araştırması' },
      { done: true,  text: 'Hedef kitle ve persona belirleme' },
      { done: true,  text: 'Teknik gereksinimler & scope tanımı' },
      { done: true,  text: 'Proje yol haritası & zaman planı' },
    ],
    progress: { label: 'keşif_fazı.exe', pct: '100%', width: 'w-full' },
    meta: [{ k: 'süre', v: '2-3 gün' }, { k: 'çıktı', v: 'proje_brief.pdf' }],
  },
  {
    nodeColor: 'border-coral shadow-[0_0_20px_rgba(252,158,79,0.5)] animate-[nodePulse_2s_ease-in-out_infinite]',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#fc9e4f" strokeWidth="1.5" opacity="0.38"/><path d="M3 9h18M9 21V9" stroke="#fc9e4f" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'UI/UX Tasarım',
    badge: { label: 'İşleniyor', cls: 'bg-[rgba(252,158,79,0.15)] text-coral border border-[rgba(252,158,79,0.4)]', dotCls: 'bg-coral animate-[blink_1s_infinite]' },
    desc: 'Markanızın kimliğini ve hedef kitlenizin beklentilerini birleştirerek özgün bir arayüz tasarlıyoruz. Wireframe\'den final tasarıma kadar her adımda onayınızı alıyoruz — sürpriz yok, şeffaf süreç.',
    checks: [
      { done: true,  text: 'Wireframe & kullanıcı akışları' },
      { done: true,  text: 'Renk paleti & tipografi sistemi' },
      { done: false, text: 'Mobil & tablet responsive tasarım' },
      { done: false, text: 'Prototype & interaksiyon testi' },
    ],
    progress: { label: 'ui_render.process', pct: '52%', width: 'w-[52%]' },
    meta: [{ k: 'süre', v: '4-6 gün' }, { k: 'araç', v: 'Figma' }],
  },
  {
    nodeColor: 'border-accent shadow-[0_0_16px_rgba(255,82,27,0.3)] opacity-75',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M8 9l-3 3 3 3M16 9l3 3-3 3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.5 6l-5 12" stroke="rgba(255,255,255,0.75)" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Geliştirme',
    badge: { label: 'Kuyrukta', cls: 'bg-white/[0.06] text-white/35 border border-white/10', dotCls: 'bg-white/30' },
    desc: 'Onaylanan tasarımı temiz, hızlı ve sürdürülebilir koda dönüştürüyoruz. SEO dostu yapı, Google Core Web Vitals optimizasyonu ve güvenlik standartları baştan kurgulanır — sonradan eklenmez.',
    checks: [
      { done: false, text: 'Frontend geliştirme & animasyonlar' },
      { done: false, text: 'CMS entegrasyonu & içerik yönetimi' },
      { done: false, text: 'Core Web Vitals & hız optimizasyonu' },
      { done: false, text: 'Cross-browser & cihaz testleri' },
    ],
    progress: { label: 'build.queue', pct: '0%', width: 'w-0' },
    meta: [{ k: 'süre', v: '5-8 gün' }, { k: 'stack', v: 'Next.js / WordPress' }],
  },
  {
    nodeColor: 'border-[#fb923c] shadow-[0_0_20px_rgba(255,107,53,0.5)]',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M22 2L2 9l9 4 4 9 7-20z" stroke="#fc9e4f" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M22 2L11 13M11 13l4 9" stroke="#fc9e4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Yayın & Sürekli Destek',
    badge: { label: 'Canlı', cls: 'bg-[rgba(255,107,53,0.15)] text-[#fb923c] border border-[rgba(255,107,53,0.3)]', dotCls: 'bg-[#fb923c] animate-[blink_1s_infinite]' },
    desc: 'Siteniz yayına girdiğinde iş bitmez — asıl o zaman başlar. Domain, hosting, SSL kurulumundan sonra size kapsamlı bir kullanım eğitimi veriyoruz. Sonrasında aylık bakım ve teknik destek hizmetimizle her zaman yanınızdayız.',
    checks: [
      { done: true, text: 'Domain & hosting kurulumu, SSL' },
      { done: true, text: 'Google Analytics & Search Console bağlantısı' },
      { done: true, text: 'Kullanım eğitimi & dokümantasyon' },
      { done: true, text: 'Aylık bakım & 7/24 teknik destek' },
    ],
    progress: { label: 'deploy.live ██████████', pct: 'ONLINE', width: 'w-full', live: true },
    meta: [{ k: 'uptime', v: '%99.9' }, { k: 'destek', v: '7/24 aktif' }],
  },
]

export default function ProcessSection() {
  return (
    <section id="surec" className="py-16 sm:py-28 bg-night relative overflow-hidden">

      {/* Glow efektleri — section içinde kalacak şekilde konumlandırıldı */}
      <div aria-hidden className="absolute top-[40px] right-[-40px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle,rgba(255,82,27,0.25),transparent 65%)'}} />
      <div aria-hidden className="absolute bottom-[40px] left-[-40px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle,rgba(252,158,79,0.2),transparent 65%)'}} />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">

        <div className="text-center mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // Sürecimiz
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-white">
            4 adımda <span className="gradient-text">hayalinizdeki site</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-[440px] mx-auto leading-[1.7]">
            Şeffaf, hızlı ve stressiz. Her adımda ne olduğunu bilirsiniz.
          </p>
        </div>

        {/* Vertical Pipeline */}
        <div className="relative">
          {/* Sol dikey çizgi */}
          <div className="absolute top-0 bottom-0 left-[23px] sm:left-[31px] w-[2px] rounded-full"
            style={{background:'linear-gradient(180deg,#ff521b 0%,#e8881a 50%,#edd382 100%)',boxShadow:'0 0 12px rgba(255,82,27,0.4)'}} />

          {steps.map(({ nodeColor, icon, title, badge, desc, checks, progress, meta }) => (
            <div key={title} className="grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-4 sm:gap-8 py-8 sm:py-10 border-b border-white/[0.06] last:border-b-0 relative">

              {/* Sol — node */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-night border-2 flex items-center justify-center shrink-0 relative z-10 ${nodeColor}`}>
                  {icon}
                </div>
              </div>

              {/* Sağ — içerik */}
              <div className="pt-3">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-[1.25rem] font-bold text-white">{title}</span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-wide uppercase ${badge.cls}`}>
                    <span className={`w-[5px] h-[5px] rounded-full ${badge.dotCls}`} />
                    {badge.label}
                  </span>
                </div>

                <p className="text-white/55 text-[0.95rem] leading-[1.75] max-w-[680px] mb-5">{desc}</p>

                <div className="flex flex-col gap-2 mb-5">
                  {checks.map(({ done, text }) => (
                    <div key={text} className={`flex items-center gap-2.5 text-[0.88rem] ${done ? 'text-white/75' : 'text-white/35'}`}>
                      <span className={done ? 'text-[#4ade80]' : 'text-white/20'}>
                        {done ? '✓' : '○'}
                      </span>
                      {text}
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-[0.72rem] text-white/35 font-mono mb-1">
                    <span>{progress.label}</span>
                    <span>{progress.pct}</span>
                  </div>
                  <div className="h-[4px] bg-white/[0.08] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${progress.width} ${progress.live ? '' : ''}`}
                      style={{background: progress.live ? 'linear-gradient(90deg,#FF6B35,#fb923c)' : 'linear-gradient(90deg,#ff521b,#e8881a)'}} />
                  </div>
                </div>

                <div className="flex gap-6">
                  {meta.map(({ k, v }) => (
                    <div key={k} className="text-[0.75rem] text-white/30 font-mono">
                      {k}: <span className="text-white/60">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/context'

export default function ServicesSection() {
  const { locale } = useI18n()
  const en = locale === 'en'
  const applyHref = en ? '/apply' : '/tr/apply'

  return (
    <section id="hizmetler" className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            {en ? '// Services' : '// Hizmetler'}
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            {en ? (
              <>Your business, <span className="gradient-text">running on autopilot</span></>
            ) : (
              <>İşletmeniz <span className="gradient-text">otopilotta çalışsın</span></>
            )}
          </h2>
          <p className="text-ink/50 mt-3 max-w-[500px] leading-[1.7]">
            {en
              ? 'Looking good is not enough. Your systems should generate results every single day. Here are the solutions that make it happen.'
              : 'Güzel görünmek yetmez. Sistemleriniz her gün sonuç üretmeli. İşte tam bunu yapan çözümler:'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">

          {/* b1 — AI Automation (7 col, orange) */}
          <div className="col-span-12 lg:col-span-7 bg-accent text-white rounded-[18px] p-9
            border border-transparent transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,82,27,0.25)] cursor-default">
            <div className="text-[5rem] font-black leading-none tracking-tight opacity-[0.18] mb-3 select-none">01</div>
            <h3 className="text-[1.15rem] font-bold mb-3">
              {en ? 'AI Automation' : 'AI Otomasyon'}
            </h3>
            <p className="text-white/80 text-[0.9rem] leading-[1.65]">
              {en
                ? 'We deploy AI systems that handle your operations 24/7. From customer communication to internal workflows, your business keeps running while you sleep.'
                : 'Operasyonlarınızı 7/24 yöneten AI sistemleri kuruyoruz. Müşteri iletişiminden iç süreçlere kadar, siz uyurken işletmeniz çalışmaya devam eder.'}
            </p>
            <span className="inline-block mt-5 bg-white/20 text-white text-[0.72rem] font-bold px-3 py-1 rounded-full">
              {en ? '⭐ Most Popular' : '⭐ En Çok Tercih Edilen'}
            </span>
          </div>

          {/* b2 — Operations Audit (5 col) */}
          <div className="col-span-12 lg:col-span-5 bg-[rgba(232,136,26,0.1)] border border-[#FFD5C2] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:shadow-[0_20px_50px_rgba(255,107,53,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-[rgba(232,136,26,0.15)] flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#e8881a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.38"/>
                <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#e8881a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-coral mb-2">
              {en ? 'Operations Audit' : 'Süreç Analizi'}
            </h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              {en
                ? 'We map your workflows end to end and find every automation opportunity. You get a clear roadmap before a single line of code is written.'
                : 'İş akışlarınızı uçtan uca haritalıyor ve her otomasyon fırsatını belirliyoruz. Tek satır kod yazılmadan net bir yol haritası elinizde olur.'}
            </p>
            <span className="inline-block mt-5 bg-[rgba(232,136,26,0.1)] text-coral border border-[rgba(232,136,26,0.25)] text-[0.72rem] font-bold px-3 py-1 rounded-full">
              {en ? 'Strategic Planning' : 'Stratejik Planlama'}
            </span>
          </div>

          {/* b3 — Integration (4 col) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="2" width="14" height="20" rx="2.5" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                <path d="M9 6h6M12 18h.01" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">
              {en ? 'Integration' : 'Entegrasyon'}
            </h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              {en
                ? 'We connect your existing tools into one intelligent system. No more switching between apps or copy-pasting data manually.'
                : 'Mevcut araçlarınızı tek bir akıllı sisteme bağlıyoruz. Artık uygulamalar arasında geçiş yapmak veya verileri elle kopyalamak yok.'}
            </p>
          </div>

          {/* b4 — Performance (4 col) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-[#D1FAE5] flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L4 13.5h7L9.5 22 20 10.5h-7z" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/>
                <path d="M13 2L7.5 11H13" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">
              {en ? 'Performance' : 'Performans'}
            </h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              {en
                ? 'Real-time dashboards showing actual business results. You see exactly what is working, what is not, and where to optimize next.'
                : 'Gerçek iş sonuçlarını gösteren anlık panolar. Neyin işe yaradığını, neyin yaramadığını ve bir sonraki optimizasyonu net olarak görürsünüz.'}
            </p>
          </div>

          {/* b5 — Scaling (4 col) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/>
                <path d="M6 14l6-6 4 4 5-5" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">
              {en ? 'Scaling' : 'Ölçekleme'}
            </h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              {en
                ? 'Grow your capacity without growing your headcount. AI handles the volume so your team can focus on high-value work.'
                : 'Kadronuzu büyütmeden kapasitenizi artırın. AI hacmi yönetir, ekibiniz yüksek değerli işlere odaklanır.'}
            </p>
          </div>

          {/* b6 — CTA strip (full width) */}
          <div className="col-span-12 bg-cream-soft border border-black/[0.09] rounded-[18px] p-9
            flex flex-col md:flex-row items-start md:items-center justify-between gap-6
            transition-all duration-300 hover:border-accent/20">
            <div>
              <h3 className="text-[1.1rem] font-bold text-ink mb-1">
                {en
                  ? 'Let\u0027s figure out which processes we can automate together'
                  : 'Hangi süreçlerinizi otomatikleştirebileceğimizi birlikte belirleyelim'}
              </h3>
              <p className="text-ink/50 text-[0.9rem] max-w-[500px] leading-[1.65]">
                {en
                  ? 'Book a free discovery call. We will walk through your operations and show you the quickest wins.'
                  : 'Ücretsiz bir keşif görüşmesi planlayın. Operasyonlarınızı birlikte inceleyelim ve en hızlı kazanımları gösterelim.'}
              </p>
            </div>
            <Link href={applyHref}
              className="shrink-0 bg-accent text-white px-7 py-3 rounded-full font-bold text-[0.9rem]
                no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200">
              {en ? 'Get a Proposal →' : 'Teklif Al →'}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

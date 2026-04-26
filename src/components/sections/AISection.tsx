import Link from 'next/link'

const cards = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#ff521b" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    iconBg: 'bg-accent/10',
    title: 'AI Chatbot',
    desc: 'Ziyaretçilerin sorularını anında yanıtlar, ürün önerir ve potansiyel müşteriyi sıcak tutar. Gece 3\'te bile.',
    tag: '7/24 Destek', tagColor: 'text-accent bg-accent/10 border-accent/20',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#e8881a" strokeWidth="1.5" opacity="0.38"/><path d="M22 6l-10 7L2 6" stroke="#e8881a" strokeWidth="2" strokeLinecap="round"/></svg>,
    iconBg: 'bg-[rgba(232,136,26,0.1)]',
    title: 'E-posta Otomasyonu',
    desc: 'Karşılama, terk sepeti, doğum günü kampanyaları — doğru kişiye doğru anda otomatik gönderilir.',
    tag: 'Dönüşüm Artırır', tagColor: 'text-coral bg-[rgba(232,136,26,0.1)] border-[rgba(232,136,26,0.25)]',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 3H2l8 9.46V19l4 2V12.46z" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M2 3h20" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    iconBg: 'bg-[#D1FAE5]',
    title: 'Lead Yakalama & CRM',
    desc: 'Form dolduran ziyaretçi anında CRM\'e kaydedilir, otomatik takip e-postası gider, satış ekibine bildirim düşer.',
    tag: 'Satış Hattı', tagColor: 'text-[#166534] bg-[#D1FAE5] border-[rgba(22,163,74,0.25)]',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2.5" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/><path d="M9 8h6M9 12h4" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/><path d="M15 17l2 2 3-3" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    iconBg: 'bg-accent/10',
    title: 'WhatsApp Botu',
    desc: 'WhatsApp\'tan gelen mesajlara anında AI yanıtı, randevu alma, sipariş takibi ve yönlendirme.',
    tag: 'Anlık Yanıt', tagColor: 'text-accent bg-accent/10 border-accent/20',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#e8881a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M14 2v6h6M12 13v4M10 15h4" stroke="#e8881a" strokeWidth="2" strokeLinecap="round"/></svg>,
    iconBg: 'bg-[rgba(232,136,26,0.1)]',
    title: 'SEO İçerik Üretimi',
    desc: 'Belirlenen anahtar kelimelere göre AI her hafta yeni blog yazısı üretir, sitede yayınlar, Google\'a bildirir.',
    tag: 'Organik Büyüme', tagColor: 'text-coral bg-[rgba(232,136,26,0.1)] border-[rgba(232,136,26,0.25)]',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/><path d="M3 20h18M6 14l6-6 4 4 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    iconBg: 'bg-[#D1FAE5]',
    title: 'Haftalık Analiz Raporu',
    desc: 'Ziyaretçi, dönüşüm ve gelir verileri her hafta düzenli rapor olarak e-posta ile iletilir. Siz sadece okuyun.',
    tag: 'Otomatik Raporlama', tagColor: 'text-[#166534] bg-[#D1FAE5] border-[rgba(22,163,74,0.25)]',
  },
]

import NeuralBackground from '@/components/NeuralBackground'

export default function AISection() {
  return (
    <section id="otomasyon" className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-cream-soft relative overflow-hidden">
      <NeuralBackground />
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header — centered */}
        <div className="text-center mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // AI Otomasyon
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            Gece 3&apos;te bile <span className="gradient-text">müşterinize yanıt verin</span>
          </h2>
          <p className="text-ink/50 mt-3 max-w-[500px] mx-auto leading-[1.7]">
            Siz uyurken chatbot müşteri sorularını yanıtlasın, lead&apos;ler otomatik kayıt olsun, terk sepeti e-postaları gönderilsin.
          </p>
        </div>

        {/* AI Flow Diagram */}
        <div className="flex flex-col sm:flex-row items-center max-w-[720px] mx-auto bg-cream border border-black/[0.09]
          rounded-[20px] px-5 sm:px-10 py-8 gap-4 sm:gap-0 mb-14">

          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <div className="w-[54px] h-[54px] rounded-[14px] bg-accent/10 border border-accent/20
              flex items-center justify-center mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/>
                <circle cx="12" cy="7" r="4" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                <path d="M8 11l4 4 4-4" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[0.8rem] font-bold text-ink">Müşteri Aksiyonu</span>
            <span className="text-[0.7rem] text-ink/50">Form, mesaj, ziyaret...</span>
          </div>

          {/* Connector 1 */}
          <div className="hidden sm:block flex-none w-[60px] h-[2px] bg-black/[0.09] relative overflow-visible mx-2">
            <div className="absolute -top-[3px] w-2 h-2 rounded-full bg-accent
              shadow-[0_0_6px_rgba(255,82,27,0.6)] animate-[flowDot_2s_linear_infinite]" />
          </div>
          <div className="sm:hidden w-[2px] h-8 bg-black/[0.09] relative">
            <div className="absolute -left-[3px] w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(255,82,27,0.6)]" />
          </div>

          {/* Step 2 — center (AI) */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <div className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center mb-1
              border border-accent/30 shadow-[0_0_24px_rgba(255,82,27,0.15)]"
              style={{background:'linear-gradient(135deg,rgba(255,82,27,0.12),rgba(232,136,26,0.12))'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6L15 19H9l-.3-4.1A7 7 0 0112 2z" stroke="#ff521b" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/>
                <path d="M9 21h6M8 9h.01M12 7v4M16 9h.01" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-[0.8rem] font-bold text-accent">AI Motor</span>
            <span className="text-[0.7rem] text-ink/50">Analiz & karar</span>
          </div>

          {/* Connector 2 */}
          <div className="hidden sm:block flex-none w-[60px] h-[2px] bg-black/[0.09] relative overflow-visible mx-2">
            <div className="absolute -top-[3px] w-2 h-2 rounded-full bg-accent
              shadow-[0_0_6px_rgba(255,82,27,0.6)] animate-[flowDot_2s_linear_infinite_1s]" />
          </div>
          <div className="sm:hidden w-[2px] h-8 bg-black/[0.09] relative">
            <div className="absolute -left-[3px] w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(255,82,27,0.6)]" />
          </div>

          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <div className="w-[54px] h-[54px] rounded-[14px] bg-accent/10 border border-accent/20
              flex items-center justify-center mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/>
                <path d="M22 4L12 14.01l-3-3" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[0.8rem] font-bold text-ink">Otomatik Aksiyon</span>
            <span className="text-[0.7rem] text-ink/50">E-posta, yanıt, kayıt...</span>
          </div>
        </div>

        {/* 6 AI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ icon, iconBg, title, desc, tag, tagColor }) => (
            <div key={title}
              className="bg-cream border border-black/[0.09] rounded-[18px] p-8
                transition-all duration-300 hover:-translate-y-1 hover:border-accent/30
                hover:shadow-[0_16px_40px_rgba(255,82,27,0.10)]">
              <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                {icon}
              </div>
              <h3 className="text-[1.05rem] font-bold text-ink mb-2">{title}</h3>
              <p className="text-ink/50 text-[0.88rem] leading-[1.65]">{desc}</p>
              <span className={`inline-block mt-4 text-[0.68rem] font-bold px-3 py-1 rounded-full border ${tagColor}`}>
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Alt CTA şeridi */}
        <div className="mt-8 bg-cream border border-black/[0.09] rounded-[20px] px-5 sm:px-10 py-8
          flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[1.05rem] font-bold text-ink mb-1">
              Hangi otomasyonun size uygun olduğundan emin değil misiniz?
            </h3>
            <p className="text-ink/50 text-[0.9rem] max-w-[480px]">
              İşletmenizin iş akışını anlatalım, size en hızlı ROI getirecek otomasyon setini birlikte belirleyelim.
            </p>
          </div>
          <Link href="/iletisim"
            className="shrink-0 bg-accent text-white px-7 py-3 rounded-full font-bold text-[0.9rem]
              no-underline hover:bg-coral transition-colors whitespace-nowrap">
            Ücretsiz Analiz Al →
          </Link>
        </div>

      </div>
    </section>
  )
}

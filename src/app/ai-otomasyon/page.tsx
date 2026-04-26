import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Otomasyon Hizmetleri | Chatbot, E-posta, CRM | OD Agency',
  description: 'Gece 3\'te bile müşterinize yanıt verin. AI chatbot, e-posta otomasyonu, WhatsApp botu ve lead yakalama. 15.000₺\'den başlayan fiyatlar.',
  keywords: ['AI otomasyon', 'chatbot', 'e-posta otomasyonu', 'whatsapp botu', 'lead yakalama', 'CRM entegrasyonu', 'yapay zeka'],
  alternates: { canonical: 'https://odagency.com/ai-otomasyon' },
}

const services = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#ff521b" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    title: 'AI Chatbot',
    desc: 'Ziyaretçilerin sorularını anında yanıtlar, ürün önerir ve potansiyel müşteriyi sıcak tutar. Gece 3\'te bile.',
    tag: '7/24 Destek',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#e8881a" strokeWidth="1.5" opacity="0.38"/><path d="M22 6l-10 7L2 6" stroke="#e8881a" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'E-posta Otomasyonu',
    desc: 'Karşılama, terk sepeti, doğum günü kampanyaları. Doğru kişiye doğru anda otomatik gönderilir.',
    tag: 'Dönüşüm Artırır',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2.5" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/><path d="M9 8h6M9 12h4" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'WhatsApp Botu',
    desc: 'WhatsApp\'tan gelen mesajlara anında AI yanıtı, randevu alma, sipariş takibi ve yönlendirme.',
    tag: 'Anlık Yanıt',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 3H2l8 9.46V19l4 2V12.46z" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M2 3h20" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    title: 'Lead Yakalama & CRM',
    desc: 'Form dolduran ziyaretçi anında CRM\'e kaydedilir, otomatik takip e-postası gider, size bildirim düşer.',
    tag: 'Satış Hattı',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#e8881a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M14 2v6h6M12 13v4M10 15h4" stroke="#e8881a" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'SEO İçerik Üretimi',
    desc: 'Belirlenen anahtar kelimelere göre AI her hafta yeni blog yazısı üretir, sitenizde yayınlar.',
    tag: 'Organik Büyüme',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/><path d="M6 14l6-6 4 4 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Haftalık Analiz Raporu',
    desc: 'Ziyaretçi, dönüşüm ve gelir verileri her hafta düzenli rapor olarak e-posta ile iletilir.',
    tag: 'Otomatik Raporlama',
  },
]

export default function AIOtomasyonPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// AI Otomasyon</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Siz uyurken bile <span className="gradient-text">işiniz çalışsın</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Yapay zeka ile müşterilerinize 7/24 yanıt verin, lead&apos;leri otomatik yakalayın, satışlarınızı artırın.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon, title, desc, tag }) => (
              <div key={title} className="bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-8
                transition-all duration-200 hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(255,82,27,0.08)]">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-[1.05rem] font-bold text-ink mb-2">{title}</h3>
                <p className="text-ink/50 text-[0.88rem] leading-[1.65] mb-3">{desc}</p>
                <span className="text-[0.7rem] font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-ink mb-4">
              Hangi otomasyon size uygun?
            </h2>
            <p className="text-ink/50 max-w-[440px] mx-auto mb-8 leading-[1.75]">
              15.000₺&apos;den başlayan fiyatlarla. İş akışınızı analiz edelim, en hızlı sonuç getirecek otomasyon setini birlikte belirleyelim.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/iletisim" className="bg-accent text-white px-8 py-3.5 rounded-full font-bold text-[0.95rem] no-underline hover:opacity-90 transition-opacity">
                Ücretsiz Analiz Al →
              </Link>
              <Link href="/paketler" className="border-[1.5px] border-black/[0.09] text-ink px-8 py-3.5 rounded-full font-semibold text-[0.95rem] no-underline hover:border-accent hover:text-accent transition-colors">
                Paketleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

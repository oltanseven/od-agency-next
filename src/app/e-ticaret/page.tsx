import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-Ticaret Sitesi Kurma | Online Mağazanızı Açın | OD Agency',
  description: 'Ödeme, stok, kargo entegrasyonu dahil e-ticaret sitesi. Terk sepeti otomasyonu ile kaçan satışları yakalayın. 35.000₺\'den başlayan fiyatlar.',
  keywords: ['e-ticaret sitesi', 'online mağaza', 'e-ticaret kurma', 'shopify', 'woocommerce', 'iyzico entegrasyonu', 'e-ticaret fiyatları'],
  alternates: { canonical: 'https://odagency.com/e-ticaret' },
}

const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 7v13a2 2 0 002 2h14a2 2 0 002-2V7l-3-5H6z" stroke="#ff521b" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M3 7h18M16 11a4 4 0 01-8 0" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Sınırsız Ürün Kataloğu',
    desc: 'İstediğiniz kadar ürün ekleyin. Kategoriler, filtreler ve arama ile müşterileriniz aradığını hızla bulsun.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/><path d="M2 10h20M6 16h4" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Ödeme Entegrasyonu',
    desc: 'İyzico, Stripe veya banka sanal POS ile güvenli ödeme. Müşterileriniz kredi kartı, havale veya kapıda ödeme seçsin.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#ff521b" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Stok & Sipariş Yönetimi',
    desc: 'Tek panelden stok takibi, sipariş durumu ve müşteri yönetimi. Stok azaldığında otomatik uyarı.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/><path d="M22 6l-10 7L2 6" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Terk Sepeti Otomasyonu',
    desc: 'Sepetini bırakıp giden müşterilere otomatik hatırlatma e-postası gönderilsin. Kaçan satışları yakalayın.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 2L2 9l9 4 4 9 7-20z" stroke="#ff521b" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M22 2L11 13" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Kargo Entegrasyonu',
    desc: 'Yurtiçi Kargo, Aras, MNG ve diğer firmalarla otomatik entegrasyon. Takip numarası müşteriye otomatik iletilsin.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/><path d="M6 14l6-6 4 4 5-5" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'SEO & Hız Optimizasyonu',
    desc: 'Ürün sayfalarınız Google\'da üst sıralarda çıksın. Hızlı yüklenen site ile müşteri kaybetmeyin.',
  },
]

export default function EticaretPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// E-Ticaret</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Online satışa <span className="gradient-text">hemen başlayın</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Ürünlerinizi 7/24 satışa açın. Ödeme, stok, kargo tek panelden. Terk sepeti otomasyonu ile kaçan satışları yakalayın.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-8
                transition-all duration-200 hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(255,82,27,0.08)]">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-[1.05rem] font-bold text-ink mb-2">{title}</h3>
                <p className="text-ink/50 text-[0.88rem] leading-[1.65]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-ink mb-4">
              E-ticaret siteniz hazır olsun
            </h2>
            <p className="text-ink/50 max-w-[440px] mx-auto mb-8 leading-[1.75]">
              35.000₺&apos;den başlayan fiyatlarla. 15 iş gününde teslim, 14 gün para iade garantisi.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/iletisim" className="bg-accent text-white px-8 py-3.5 rounded-full font-bold text-[0.95rem] no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200">
                Ücretsiz Analiz Al →
              </Link>
              <Link href="/paketler" className="border-[1.5px] border-black/[0.09] text-ink px-8 py-3.5 rounded-full font-semibold text-[0.95rem] no-underline hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200">
                Paketleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

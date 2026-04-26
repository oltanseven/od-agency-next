import type { Metadata } from 'next'
import Link from 'next/link'
import PricingFAQ from '@/components/PricingFAQ'

export const metadata: Metadata = {
  title: 'Web Sitesi Fiyatları 2026 — Paketler & Ücretler | OD Agency',
  description: '2026 web sitesi fiyatları: Landing page ₺7.500\'den, kurumsal site ₺20.000\'den, e-ticaret ₺35.000\'den başlıyor. Şeffaf paket fiyatları, 14 gün memnuniyet garantisi. Web tasarım fiyatları için hemen inceleyin.',
  keywords: ['web sitesi fiyatları 2026', 'web tasarım fiyatları', 'kurumsal web sitesi fiyatı', 'e-ticaret sitesi kurma maliyeti', 'landing page tasarım fiyatı', 'web sitesi yenileme ücreti', 'profesyonel web sitesi fiyatları'],
  alternates: { canonical: 'https://odagency.com/paketler' },
  openGraph: {
    title: 'Web Sitesi Fiyatları 2026 | OD Agency',
    description: 'Landing page ₺7.500\'den, kurumsal site ₺20.000\'den, e-ticaret ₺35.000\'den. 14 gün memnuniyet garantisi.',
    url: 'https://odagency.com/paketler',
  },
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function Chk({ coral }: { coral?: boolean }) {
  return (
    <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
      style={{
        background: coral ? 'rgba(252,158,79,0.15)' : 'rgba(255,82,27,0.1)',
        border: coral ? '1px solid rgba(252,158,79,0.3)' : '1px solid rgba(255,82,27,0.3)',
      }}>
      <svg viewBox="0 0 10 10" fill="none" width="9" height="9">
        <path d="M2 5l2.5 2.5L8 3" stroke={coral ? '#fc9e4f' : '#ff521b'} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </span>
  )
}

function DimChk() {
  return (
    <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full"
      style={{ background: '#F6F2E8', border: '1px solid rgba(0,0,0,0.09)' }} />
  )
}

export default function PaketlerPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// Fiyatlandırma</span>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/40 px-4 py-1.5 rounded-full text-accent text-[0.8rem] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-[blink_2s_ease-in-out_infinite]" />
            2026 Lansman Kampanyası — Sınırlı Kontenjan
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            İşletmenize uygun<br /><span className="gradient-text">planı seçin</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Ne alacağınızı baştan bilirsiniz. Gizli ücret yok, sürpriz fatura yok. Beğenmezseniz 14 gün içinde paranız iade.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">

            {/* Lansman */}
            <div className="bg-cream border-[1.5px] border-black/[0.09] rounded-[24px] p-6 sm:p-9 relative
              transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(255,82,27,0.1)]
              hover:border-[rgba(255,82,27,0.25)]">
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-2">Başlangıç</div>
              <div className="text-[1.3rem] font-extrabold text-ink mb-3">Lansman</div>
              <p className="text-ink/50 text-[0.85rem] leading-[1.65] mb-7">
                Ziyaretçileri müşteriye çeviren, dönüşüm odaklı landing page. 5 günde dijitalde yerinizi alın.
              </p>
              <div className="mb-7 pb-7 border-b border-black/[0.09]">
                <div className="text-[2.4rem] font-black tracking-tight text-ink leading-none">
                  7.500<span className="text-[1.1rem] font-bold ml-1">₺</span>
                  <span className="text-[0.75rem] font-medium text-ink/40 ml-1">&apos;den</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-ink/40 text-[0.75rem]">
                  <ClockIcon /> 5 iş günü teslim
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 text-[0.85rem]">
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Tek sayfa landing site</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Mobil uyumlu tasarım</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> İletişim formu + WhatsApp</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Temel SEO ayarları</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Google Analytics & GSC</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 2 revizyon hakkı</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 3 ay teknik destek</li>
                <li className="flex items-start gap-2.5 text-ink/30"><DimChk /> CMS / içerik yönetimi</li>
              </ul>
              <Link href="/iletisim"
                className="block w-full text-center py-3 rounded-full font-bold text-[0.9rem] no-underline
                  border-[1.5px] border-accent text-accent transition-all duration-200
                  hover:bg-accent hover:text-white">
                Projeni Başlat →
              </Link>
            </div>

            {/* Profesyonel (popular) */}
            <div className="bg-cream border-[1.5px] border-accent rounded-[24px] p-6 sm:p-9 relative
              shadow-[0_8px_40px_rgba(255,82,27,0.12)]
              transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(255,82,27,0.2)]">
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-accent text-white
                text-[0.7rem] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                En Çok Tercih
              </div>
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-2">Kurumsal</div>
              <div className="text-[1.3rem] font-extrabold text-ink mb-3">Profesyonel</div>
              <p className="text-ink/50 text-[0.85rem] leading-[1.65] mb-7">
                Google&apos;da üst sıralarda çıkan, müşterilerinize güven veren kurumsal web siteniz.
              </p>
              <div className="mb-7 pb-7 border-b border-black/[0.09]">
                <div className="text-[2.4rem] font-black tracking-tight text-ink leading-none">
                  20.000<span className="text-[1.1rem] font-bold ml-1">₺</span>
                  <span className="text-[0.75rem] font-medium text-ink/40 ml-1">&apos;den</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-ink/40 text-[0.75rem]">
                  <ClockIcon /> 10 iş günü teslim
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 text-[0.85rem]">
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 5 sayfaya kadar kurumsal site</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> CMS ile içerik yönetimi</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Detaylı SEO optimizasyonu</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> İletişim formu + WhatsApp + CRM</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Blog / haber modülü</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Google Analytics & GSC</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 3 revizyon hakkı</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 6 ay teknik destek</li>
              </ul>
              <Link href="/iletisim"
                className="block w-full text-center py-3 rounded-full font-bold text-[0.9rem] no-underline
                  bg-accent text-white transition-all duration-200 hover:opacity-90">
                Projeni Başlat →
              </Link>
            </div>

            {/* Mağaza */}
            <div className="bg-cream border-[1.5px] border-black/[0.09] rounded-[24px] p-6 sm:p-9 relative
              transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(255,82,27,0.1)]
              hover:border-[rgba(255,82,27,0.25)]">
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-2">E-Ticaret</div>
              <div className="text-[1.3rem] font-extrabold text-ink mb-3">Mağaza</div>
              <p className="text-ink/50 text-[0.85rem] leading-[1.65] mb-7">
                Satışlarınızı artıracak, yönetimi kolay e-ticaret altyapısı. Ödeme, stok, kargo tek panelde.
              </p>
              <div className="mb-7 pb-7 border-b border-black/[0.09]">
                <div className="text-[2.4rem] font-black tracking-tight text-ink leading-none">
                  35.000<span className="text-[1.1rem] font-bold ml-1">₺</span>
                  <span className="text-[0.75rem] font-medium text-ink/40 ml-1">&apos;den</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-ink/40 text-[0.75rem]">
                  <ClockIcon /> 15 iş günü teslim
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 text-[0.85rem]">
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Sınırsız ürün kataloğu</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Ödeme entegrasyonu (İyzico)</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Stok & sipariş yönetimi</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Terk sepeti e-postası</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> SEO & hız optimizasyonu</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Kargo entegrasyonu</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 5 revizyon hakkı</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 1 yıl teknik destek</li>
              </ul>
              <Link href="/iletisim"
                className="block w-full text-center py-3 rounded-full font-bold text-[0.9rem] no-underline
                  border-[1.5px] border-accent text-accent transition-all duration-200
                  hover:bg-accent hover:text-white">
                Projeni Başlat →
              </Link>
            </div>

            {/* AI Pro (dark) */}
            <div className="rounded-[24px] p-6 sm:p-9 relative border-[1.5px]
              transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: '#0D0B1E', borderColor: 'rgba(255,82,27,0.2)' }}>
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-2"
                style={{ color: '#fc9e4f' }}>AI Pro</div>
              <div className="text-[1.3rem] font-extrabold mb-3 text-white">Tam Otomasyon</div>
              <p className="text-[0.85rem] leading-[1.65] mb-7" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Web siteniz + yapay zeka otomasyonları. Siz uyurken bile müşterilerinizle iletişimde kalın.
              </p>
              <div className="mb-7 pb-7" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-[2.4rem] font-black tracking-tight text-white leading-none">
                  15.000<span className="text-[1.1rem] font-bold ml-1">₺</span>
                  <span className="text-[0.75rem] font-medium ml-1" style={{ color: 'rgba(255,255,255,0.4)' }}>&apos;den</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-[0.75rem]"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  <ClockIcon /> Projeye göre planlanır
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 text-[0.85rem]">
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> Kurumsal site (tüm özellikler)</li>
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> AI chatbot entegrasyonu</li>
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> E-posta otomasyon sistemi</li>
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> WhatsApp botu</li>
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> Lead yakalama & CRM</li>
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> Haftalık analiz raporu</li>
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> Özel geliştirmeler</li>
                <li className="flex items-start gap-2.5" style={{ color: 'rgba(255,255,255,0.75)' }}><Chk coral /> Öncelikli destek hattı</li>
              </ul>
              <Link href="/iletisim"
                className="block w-full text-center py-3 rounded-full font-bold text-[0.9rem] no-underline
                  bg-accent text-white transition-all duration-200 hover:opacity-90">
                Projeni Başlat →
              </Link>
            </div>

          </div>

          {/* Bakım add-on strip */}
          <div className="mt-8 bg-cream-soft border-[1.5px] border-black/[0.09] rounded-[20px] px-5 sm:px-10 py-6 sm:py-8
            flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-[1.1rem] font-bold text-ink mb-1.5">Yıllık Bakım & Destek Paketi</h3>
              <p className="text-ink/50 text-[0.88rem] max-w-[500px]">
                Güncelleme, güvenlik yamaları, içerik düzenlemeleri ve teknik destek. Siteniz her zaman güncel ve güvende kalsın.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap shrink-0">
              <div className="text-[1.6rem] font-black text-accent whitespace-nowrap">
                ₺2.500 <span className="text-ink/40 font-medium text-[0.8rem]">/ yıl</span>
              </div>
              <Link href="/iletisim"
                className="border-[1.5px] border-black/[0.09] text-ink px-6 py-2.5 rounded-full
                  font-semibold text-[0.88rem] no-underline transition-all hover:border-accent hover:text-accent">
                Pakete Ekle →
              </Link>
            </div>
          </div>

          {/* Güven bandı */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[0.8rem] font-semibold text-ink/60 bg-cream border border-black/[0.07]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#22c55e" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              14 Gün Memnuniyet Garantisi
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[0.8rem] font-semibold text-ink/60 bg-cream border border-black/[0.07]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#ff521b" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/></svg>
              Süre Garantisi — Gecikme = %10 İndirim
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[0.8rem] font-semibold text-ink/60 bg-cream border border-black/[0.07]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#e8881a" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#e8881a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Next.js — 100 Performance Score
            </div>
          </div>

        </div>
      </section>

      {/* Nasıl Çalışır (dark strip) */}
      <div style={{ background: '#0D0B1E', padding: '5rem 0' }}>
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="block text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: '#fc9e4f' }}>// Süreç</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white leading-[1.1] tracking-[-0.02em]">
              Başlamak <span className="gradient-text">çok kolay</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {[
              { num: '1', title: 'Teklif İsteyin', desc: 'Formu doldurun, ihtiyaçlarınızı paylaşın. 2 saat içinde geri dönelim.' },
              { num: '2', title: 'Keşif Görüşmesi', desc: 'Projenizi birlikte konuşalım, en uygun paketi belirleyelim.' },
              { num: '3', title: 'Tasarım & Geliştirme', desc: 'Şeffaf süreçle çalışıyoruz. Her adımda ne olduğunu bilirsiniz.' },
              { num: '4', title: 'Yayın & Destek', desc: 'Siteniz canlıya alınır. Sonrasında da yanınızdayız.' },
            ].map(({ num, title, desc }, i) => (
              <div key={num} className="px-4 md:px-8 text-center relative">
                {i < 3 && (
                  <span className="absolute right-[-0.5rem] top-6 text-[1.2rem] hidden md:block"
                    style={{ color: 'rgba(255,82,27,0.4)' }}>→</span>
                )}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4
                  font-extrabold text-[1rem] text-accent"
                  style={{ background: 'rgba(255,82,27,0.15)', border: '1.5px solid rgba(255,82,27,0.35)' }}>
                  {num}
                </div>
                <h4 className="text-[0.95rem] font-bold text-white mb-2">{title}</h4>
                <p className="text-[0.8rem] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.45)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-16 sm:py-28 bg-cream-soft">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="mb-12">
            <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
              // Sıkça Sorulan Sorular
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
              Aklınızdaki <span className="gradient-text">sorular</span>
            </h2>
          </div>
          <PricingFAQ />
        </div>
      </section>

      {/* CTA dark */}
      <div className="text-center" style={{ background: '#0D0B1E', padding: '5rem 0' }}>
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-white mb-4">
            Hangi paket size uygun <span className="gradient-text">emin değil misiniz?</span>
          </h2>
          <p className="max-w-[440px] mx-auto mb-10 leading-[1.75]"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            Her proje benzersizdir. Projenizi anlatın, birlikte en doğru çözümü belirleyelim. Ücretsiz keşif görüşmesi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim"
              className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold
                text-[0.95rem] no-underline hover:opacity-90 transition-opacity">
              Ücretsiz Web Sitesi Analizi Al →
            </Link>
            <a href="https://wa.me/905324652031?text=Merhaba%2C%20web%20sitesi%20paketi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold
                text-[0.95rem] no-underline hover:opacity-90 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp&apos;tan Sor
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

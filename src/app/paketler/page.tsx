import type { Metadata } from 'next'
import Link from 'next/link'
import PricingFAQ from '@/components/PricingFAQ'

export const metadata: Metadata = {
  title: 'Paketler & Fiyatlandırma — OD Agency',
  description: 'OD Agency web tasarım ve AI otomasyon paketleri. Şeffaf fiyatlandırma, net hizmet kapsamları.',
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
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// Fiyatlandırma</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Şeffaf fiyat,<br /><span className="gradient-text">net hizmet</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Sürpriz ek ücret yok. Ne alacağınızı baştan bilirsiniz. İşletmenizin büyüklüğüne ve ihtiyacına göre doğru paketi seçin.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">

            {/* Lansman */}
            <div className="bg-cream border-[1.5px] border-black/[0.09] rounded-[24px] p-9 relative
              transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(255,82,27,0.1)]
              hover:border-[rgba(255,82,27,0.25)]">
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-2">Başlangıç</div>
              <div className="text-[1.3rem] font-extrabold text-ink mb-3">Lansman</div>
              <p className="text-ink/50 text-[0.85rem] leading-[1.65] mb-7">
                Dijitale ilk adımını atmak isteyen işletmeler için hızlı ve etkili landing page çözümü.
              </p>
              <div className="mb-7 pb-7 border-b border-black/[0.09]">
                <div className="text-[2.4rem] font-black tracking-tight text-ink leading-none">
                  <sup className="text-[1.1rem] font-bold align-super">₺</sup>15.000
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-ink/40 text-[0.75rem]">
                  <ClockIcon /> 5 iş günü teslim
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 text-[0.85rem]">
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Tek sayfa landing site</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Mobil uyumlu tasarım</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> İletişim formu</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Temel SEO ayarları</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Google Analytics</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 3 ay teknik destek</li>
                <li className="flex items-start gap-2.5 text-ink/30"><DimChk /> CMS / içerik yönetimi</li>
                <li className="flex items-start gap-2.5 text-ink/30"><DimChk /> AI otomasyon</li>
              </ul>
              <Link href="/iletisim"
                className="block w-full text-center py-3 rounded-full font-bold text-[0.9rem] no-underline
                  border-[1.5px] border-accent text-accent transition-all duration-200
                  hover:bg-accent hover:text-white">
                Başlayalım →
              </Link>
            </div>

            {/* Profesyonel (popular) */}
            <div className="bg-cream border-[1.5px] border-accent rounded-[24px] p-9 relative
              shadow-[0_8px_40px_rgba(255,82,27,0.12)]
              transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(255,82,27,0.2)]">
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-accent text-white
                text-[0.7rem] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                En Çok Tercih
              </div>
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-2">Kurumsal</div>
              <div className="text-[1.3rem] font-extrabold text-ink mb-3">Profesyonel</div>
              <p className="text-ink/50 text-[0.85rem] leading-[1.65] mb-7">
                Güçlü kurumsal kimlik, CMS yönetimi ve detaylı SEO ile rakiplerinizin önüne geçin.
              </p>
              <div className="mb-7 pb-7 border-b border-black/[0.09]">
                <div className="text-[2.4rem] font-black tracking-tight text-ink leading-none">
                  <sup className="text-[1.1rem] font-bold align-super">₺</sup>35.000
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-ink/40 text-[0.75rem]">
                  <ClockIcon /> 10 iş günü teslim
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 text-[0.85rem]">
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 5 sayfaya kadar kurumsal site</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> CMS ile içerik yönetimi</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Detaylı SEO optimizasyonu</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> İletişim formu + CRM</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Blog / haber modülü</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> Google Analytics & GSC</li>
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 6 ay teknik destek</li>
                <li className="flex items-start gap-2.5 text-ink/30"><DimChk /> AI otomasyon</li>
              </ul>
              <Link href="/iletisim"
                className="block w-full text-center py-3 rounded-full font-bold text-[0.9rem] no-underline
                  bg-accent text-white transition-all duration-200 hover:opacity-90">
                Başlayalım →
              </Link>
            </div>

            {/* Mağaza */}
            <div className="bg-cream border-[1.5px] border-black/[0.09] rounded-[24px] p-9 relative
              transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(255,82,27,0.1)]
              hover:border-[rgba(255,82,27,0.25)]">
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-accent mb-2">E-Ticaret</div>
              <div className="text-[1.3rem] font-extrabold text-ink mb-3">Mağaza</div>
              <p className="text-ink/50 text-[0.85rem] leading-[1.65] mb-7">
                Online satışa hazır, dönüşüm odaklı e-ticaret altyapısı. Ödeme, stok, sipariş tek panelde.
              </p>
              <div className="mb-7 pb-7 border-b border-black/[0.09]">
                <div className="text-[2.4rem] font-black tracking-tight text-ink leading-none">
                  <sup className="text-[1.1rem] font-bold align-super">₺</sup>55.000
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
                <li className="flex items-start gap-2.5 text-ink/70"><Chk /> 1 yıl teknik destek</li>
                <li className="flex items-start gap-2.5 text-ink/30"><DimChk /> AI otomasyon</li>
              </ul>
              <Link href="/iletisim"
                className="block w-full text-center py-3 rounded-full font-bold text-[0.9rem] no-underline
                  border-[1.5px] border-accent text-accent transition-all duration-200
                  hover:bg-accent hover:text-white">
                Başlayalım →
              </Link>
            </div>

            {/* AI Pro (dark) */}
            <div className="rounded-[24px] p-9 relative border-[1.5px]
              transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: '#0D0B1E', borderColor: 'rgba(255,82,27,0.2)' }}>
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-2"
                style={{ color: '#fc9e4f' }}>AI Pro</div>
              <div className="text-[1.3rem] font-extrabold mb-3 text-white">Tam Otomasyon</div>
              <p className="text-[0.85rem] leading-[1.65] mb-7" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Kurumsal site + yapay zeka otomasyonları. Müşterilerinizle 7/24 temas halinde olun.
              </p>
              <div className="mb-7 pb-7" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-[1.6rem] font-black tracking-tight text-white leading-none">
                  Teklif Al
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
                Teklif İste →
              </Link>
            </div>

          </div>

          {/* Bakım add-on strip */}
          <div className="mt-8 bg-cream-soft border-[1.5px] border-black/[0.09] rounded-[20px] px-10 py-8
            flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-[1.1rem] font-bold text-ink mb-1.5">Aylık Bakım & Destek Paketi</h3>
              <p className="text-ink/50 text-[0.88rem] max-w-[500px]">
                Güncelleme, güvenlik, içerik düzenlemeleri ve 7/24 teknik destek. Tüm paketlere eklenebilir.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap shrink-0">
              <div className="text-[1.6rem] font-black text-accent whitespace-nowrap">
                ₺2.500 <span className="text-ink/40 font-medium text-[0.8rem]">/ ay</span>
              </div>
              <Link href="/iletisim"
                className="border-[1.5px] border-black/[0.09] text-ink px-6 py-2.5 rounded-full
                  font-semibold text-[0.88rem] no-underline transition-all hover:border-accent hover:text-accent">
                Bilgi Al →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Nasıl Çalışır (dark strip) */}
      <div style={{ background: '#0D0B1E', padding: '5rem 0' }}>
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="text-center mb-14">
            <span className="block text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: '#fc9e4f' }}>// Süreç</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white leading-[1.1] tracking-[-0.02em]">
              Başlamak <span className="gradient-text">çok kolay</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: '1', title: 'Teklif İsteyin', desc: 'Formu doldurun, ihtiyaçlarınızı paylaşın. 2 saat içinde geri dönelim.' },
              { num: '2', title: 'Keşif Görüşmesi', desc: 'Projenizi birlikte konuşalım, en uygun paketi belirleyelim.' },
              { num: '3', title: 'Tasarım & Geliştirme', desc: 'Şeffaf süreçle çalışıyoruz. Her adımda ne olduğunu bilirsiniz.' },
              { num: '4', title: 'Yayın & Destek', desc: 'Siteniz canlıya alınır. Sonrasında da yanınızdayız.' },
            ].map(({ num, title, desc }, i) => (
              <div key={num} className="px-8 text-center relative">
                {i < 3 && (
                  <span className="absolute right-[-0.5rem] top-6 text-[1.2rem]"
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
      <section className="py-28 bg-cream-soft">
        <div className="max-w-[1260px] mx-auto px-8">
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
      <div className="text-center" style={{ background: '#0D0B1E', padding: '7rem 0' }}>
        <div className="max-w-[1260px] mx-auto px-8">
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-white mb-4">
            Hangi paket size uygun <span className="gradient-text">emin değil misiniz?</span>
          </h2>
          <p className="max-w-[440px] mx-auto mb-10 leading-[1.75]"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            Projenizi anlatın, birlikte en doğru çözümü belirleyelim. Ücretsiz keşif görüşmesi.
          </p>
          <Link href="/iletisim"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold
              text-[0.95rem] no-underline hover:opacity-90 transition-opacity">
            Ücretsiz Görüşme Ayarlayın →
          </Link>
        </div>
      </div>
    </>
  )
}

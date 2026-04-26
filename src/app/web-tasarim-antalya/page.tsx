import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Tasarım Antalya | Profesyonel Web Sitesi Hizmetleri | OD Agency',
  description: 'Antalya\'da web sitesi yaptırmak mı istiyorsunuz? OD Agency ile kurumsal web tasarım, e-ticaret ve dijital çözümler. Yerel ajans avantajı, Türkiye geneli hizmet. Ücretsiz keşif görüşmesi.',
  keywords: ['web tasarım Antalya', 'Antalya web sitesi yaptır', 'Antalya dijital ajans', 'Antalya web tasarım fiyatları', 'Antalya kurumsal web sitesi', 'web sitesi Antalya'],
  alternates: { canonical: 'https://odagency.com/web-tasarim-antalya' },
  openGraph: {
    title: 'Web Tasarım Antalya | OD Agency',
    description: 'Antalya\'nın profesyonel web tasarım ajansı. Kurumsal site, e-ticaret ve AI çözümleri.',
    url: 'https://odagency.com/web-tasarim-antalya',
  },
}

const localPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Tasarım Antalya',
  provider: {
    '@type': 'LocalBusiness',
    name: 'OD Agency',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antalya',
      addressCountry: 'TR',
    },
    telephone: '+905324652031',
    url: 'https://odagency.com',
  },
  areaServed: { '@type': 'City', name: 'Antalya' },
  serviceType: 'Web Tasarım ve Geliştirme',
}

const services = [
  {
    title: 'Kurumsal Web Sitesi',
    desc: 'Markanızı en iyi şekilde yansıtan, hızlı ve dönüşüm odaklı kurumsal web siteleri.',
    price: '₺15.000\'den',
    tag: 'En Çok Tercih',
  },
  {
    title: 'E-Ticaret Sitesi',
    desc: 'Shopify, WooCommerce veya özel altyapı ile satışa hazır e-ticaret çözümleri.',
    price: '₺35.000\'den',
    tag: 'Yüksek ROI',
  },
  {
    title: 'Landing Page',
    desc: 'Reklam trafiğini müşteriye dönüştüren, A/B test edilmiş landing sayfaları.',
    price: '₺8.000\'den',
    tag: 'Hızlı Teslim',
  },
  {
    title: 'Web Sitesi Yenileme',
    desc: 'Mevcut sitenizi modern, hızlı ve mobil uyumlu hale getiriyoruz.',
    price: '₺10.000\'den',
    tag: 'Çabuk Sonuç',
  },
]

const faqs = [
  {
    q: 'Antalya\'da web sitesi fiyatları ne kadar?',
    a: '2026 yılı itibarıyla Antalya\'da basit tanıtım siteleri ₺8.000–₺20.000, kurumsal web siteleri ₺15.000–₺55.000, e-ticaret siteleri ₺35.000\'den başlıyor. Fiyatlar projenin kapsamına göre değişir.',
  },
  {
    q: 'Yerel ajans mı, uzak ajans mı tercih etmeliyim?',
    a: 'Yerel ajans avantajı: yüz yüze toplantı imkânı, aynı saat dilimi, şehre özel pazara hakimiyet. OD Agency hem Antalya\'daki yerel müşterilere yakın çalışır hem de Türkiye genelinde hizmet verir.',
  },
  {
    q: 'Proje ne kadar sürede teslim edilir?',
    a: 'Kurumsal web siteleri 5–10 gün, e-ticaret projeleri 10–20 gün, landing page\'ler 3–5 gün içinde teslim edilir. Proje başlamadan önce net bir takvim paylaşılır.',
  },
  {
    q: 'Antalya\'da sektöre özel web sitesi yapıyor musunuz?',
    a: 'Evet. Antalya\'nın güçlü olduğu sektörler için (turizm, otel, restoran, sağlık, gayrimenkul, hukuk) sektöre özel özelleştirilmiş web siteleri tasarlıyoruz.',
  },
]

export default function AntalyaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localPageSchema) }}
      />

      {/* Hero */}
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="max-w-[720px]">
            <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">
              // Web Tasarım Antalya
            </span>
            <h1 className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-5">
              Antalya&apos;nın <span className="gradient-text">Profesyonel</span><br />
              Web Tasarım Ajansı
            </h1>
            <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75] mb-8">
              Antalya merkezli OD Agency olarak işletmenize özel, hızlı ve dönüşüm odaklı web siteleri tasarlıyoruz. Yerel pazar bilgisi, Türkiye geneli erişim.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/iletisim"
                className="bg-accent text-white px-8 rounded-full font-bold text-[0.95rem]
                  no-underline hover:bg-coral hover:-translate-y-0.5 inline-flex items-center
                  hover:shadow-[0_16px_36px_rgba(252,158,79,0.3)]
                  focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                style={{ minHeight: '48px' }}>
                Ücretsiz Keşif Görüşmesi →
              </Link>
              <Link href="/paketler"
                className="bg-transparent text-ink px-8 rounded-full font-semibold text-[0.95rem]
                  no-underline border border-black/[0.09] hover:border-accent hover:text-accent
                  inline-flex items-center
                  focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                style={{ minHeight: '48px' }}>
                Fiyatları İncele
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hizmetler + Fiyatlar */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="mb-12">
            <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">// Hizmetler & Fiyatlar</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
              Antalya web sitesi <span className="gradient-text">fiyatları</span>
            </h2>
            <p className="text-ink/50 mt-3 max-w-[480px] leading-[1.7]">
              Net paket fiyatları, sürpriz fatura yok. Projenin kapsamına göre özel teklif de hazırlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ title, desc, price, tag }) => (
              <div key={title}
                className="bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] p-7
                  hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,82,27,0.1)]
                  transition-all duration-300 flex flex-col">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-accent
                  bg-accent/10 px-3 py-1 rounded-full self-start mb-5">
                  {tag}
                </span>
                <h3 className="text-[1rem] font-bold text-ink mb-2">{title}</h3>
                <p className="text-ink/50 text-[0.88rem] leading-[1.65] flex-1 mb-5">{desc}</p>
                <div className="text-[1.3rem] font-black text-accent">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Yerel Ajans */}
      <section className="py-24 bg-cream-soft border-t border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">// Neden OD Agency?</span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-5">
                Antalya&apos;yı bilen bir ajansla çalışın
              </h2>
              <p className="text-ink/50 leading-[1.75] mb-8">
                Antalya&apos;nın turizm, sağlık, gayrimenkul ve restoran sektörlerinin dijital dinamiklerini iyi biliyoruz. Siteniz sadece güzel görünmekle kalmaz, doğru kitleye doğru mesajla ulaşır.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'Yüz yüze toplantı ve yerinde destek imkânı',
                  'Antalya\'ya özel SEO ve yerel arama optimizasyonu',
                  'Turizm, sağlık, restoran, hukuk sektörü deneyimi',
                  'Proje sonrası aylık bakım ve teknik destek',
                  'Şeffaf fiyatlandırma, sürpriz fatura yok',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[0.92rem] text-ink/70">
                    <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '42+', label: 'Tamamlanan Proje' },
                { n: '98%', label: 'Müşteri Memnuniyeti' },
                { n: '5 Gün', label: 'Ortalama Teslim' },
                { n: '3 Yıl', label: 'Sektör Deneyimi' },
              ].map(({ n, label }) => (
                <div key={label}
                  className="bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] p-7 text-center">
                  <div className="text-[2rem] font-black text-accent leading-none mb-2">{n}</div>
                  <div className="text-ink/50 text-[0.82rem] font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream border-t border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="max-w-[780px]">
            <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">// Sıkça Sorulan Sorular</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-10">
              Antalya web tasarım hakkında merak edilenler
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-cream-soft border-[1.5px] border-black/[0.09] rounded-[18px] p-7">
                  <h3 className="font-bold text-[0.95rem] text-ink mb-3">{q}</h3>
                  <p className="text-ink/50 text-[0.9rem] leading-[1.75]">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-soft border-t border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="bg-night rounded-3xl px-12 py-16 text-center relative overflow-hidden border border-white/[0.06]">
            <div aria-hidden className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(255,82,27,0.25),transparent 65%)' }} />
            <div className="relative z-10">
              <span className="text-coral text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4 block">
                // Antalya&apos;da Web Sitesi
              </span>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white leading-[1.1] tracking-[-0.02em] mb-4">
                Projenizi <span className="gradient-text">birlikte başlatalım</span>
              </h2>
              <p className="text-white/60 max-w-[380px] mx-auto leading-[1.75] mb-8">
                Ücretsiz keşif görüşmesiyle ihtiyaçlarınızı anlayalım. Taahhüt yok, baskı yok.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/iletisim"
                  className="inline-flex items-center justify-center bg-white text-accent px-9 rounded-full
                    font-bold text-[0.95rem] no-underline hover:-translate-y-0.5
                    hover:shadow-[0_16px_36px_rgba(0,0,0,0.2)]
                    focus-visible:ring-2 focus-visible:ring-white/60"
                  style={{ minHeight: '52px' }}>
                  Ücretsiz Görüşme Başlat →
                </Link>
                <a href="tel:+905324652031"
                  className="inline-flex items-center justify-center bg-white/10 text-white/80
                    border border-white/25 px-9 rounded-full font-semibold text-[0.95rem]
                    no-underline hover:border-white/60 hover:text-white
                    focus-visible:ring-2 focus-visible:ring-white/50"
                  style={{ minHeight: '52px' }}>
                  +90 532 465 20 31
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

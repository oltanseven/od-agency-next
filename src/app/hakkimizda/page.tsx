import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hakkımızda | Oder Agency — Web Tasarım & AI Otomasyon Ajansı',
  description: 'Oder Agency, Antalya merkezli web tasarım, e-ticaret ve AI otomasyon ajansıdır. Modern teknolojilerle işletmelere dijital çözümler sunuyoruz.',
  keywords: ['Oder Agency', 'hakkımızda', 'web tasarım ajansı', 'Antalya ajans', 'dijital ajans'],
  alternates: { canonical: 'https://oder.agency/hakkimizda' },
  openGraph: {
    title: 'Hakkımızda | Oder Agency',
    description: 'Antalya merkezli web tasarım, e-ticaret ve AI otomasyon ajansı.',
    url: 'https://oder.agency/hakkimizda',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://oder.agency' },
    { '@type': 'ListItem', position: 2, name: 'Hakkımızda', item: 'https://oder.agency/hakkimizda' },
  ],
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oltan Seven',
  jobTitle: 'Kurucu & Geliştirici',
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://oder.agency/#organization',
    name: 'Oder Agency',
  },
  url: 'https://oder.agency/hakkimizda',
  knowsAbout: ['Web Tasarım', 'Next.js', 'React', 'AI Otomasyon', 'E-Ticaret', 'SEO', 'SwiftUI'],
  sameAs: [
    'https://www.instagram.com/oder.agency',
    'https://www.linkedin.com/company/oderagency',
  ],
}

function Chk() {
  return (
    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
      style={{ background: 'rgba(255,82,27,0.1)', border: '1px solid rgba(255,82,27,0.3)' }}>
      <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
        <path d="M2 5l2.5 2.5L8 3" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export default function HakkimizdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero */}
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">
            // Hakkımızda
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Dijitalde <span className="gradient-text">fark yaratıyoruz</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[600px] leading-[1.75]">
            Oder Agency, Antalya merkezli bir web tasarım ve dijital çözümler ajansıdır.
            Modern teknolojiler ve yapay zeka ile işletmelerin dijital dönüşümünü hızlandırıyoruz.
          </p>
        </div>
      </div>

      {/* Hikaye */}
      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-[1.6rem] font-black text-ink mb-6">Neden Oder Agency?</h2>
          <div className="space-y-5 text-ink/70 text-[0.95rem] leading-[1.85]">
            <p>
              Bircogu ajans &quot;web sitesi yaparız&quot; der ama sonucu garanti etmez. Biz farklıyız:
              <strong className="text-ink"> sitenizin satış yapmasını hedefliyoruz.</strong> Her projede
              dönüşüm oranı, hız ve SEO performansını en ust düzeyde tutmak birincil önceliğimizdir.
            </p>
            <p>
              Next.js, React ve modern AI araçlarıyla geliştirdiğimiz siteler, PageSpeed&apos;de
              <strong className="text-ink"> 95+ puan</strong> alır. Şablon kullanmayız — her proje
              sıfırdan, müşterinin ihtiyacına göre tasarlanır.
            </p>
            <p>
              14 gün memnuniyet garantisi sunuyoruz. Beğenmezseniz paranızı iade ediyoruz.
              Bu kadar emin olmamızın sebebi, işimize olan güvenimizdir.
            </p>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="py-16 sm:py-24 bg-cream-soft">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <h2 className="text-[1.6rem] font-black text-ink mb-10 text-center">
            Çalışma <span className="gradient-text">prensiplerimiz</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Şeffaflık',
                desc: 'Gizli ücret yok, sürpriz fatura yok. Ne alacağınızı baştan bilirsiniz. Süreç boyunca her adımda bilgilendirilirsiniz.',
              },
              {
                title: 'Performans Odaklı',
                desc: 'Sadece güzel görünen değil, hızlı yüklenen ve Google\'da üst sıralarda çıkan siteler yapıyoruz. PageSpeed 95+ standart.',
              },
              {
                title: 'Modern Teknoloji',
                desc: 'En güncel ve performanslı altyapılarla çalışıyoruz. WordPress şablonları değil, özel geliştirme yapıyoruz.',
              },
            ].map(({ title, desc }) => (
              <div key={title}
                className="bg-cream border-[1.5px] border-black/[0.09] rounded-[20px] p-8
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,82,27,0.08)]
                  hover:border-[rgba(255,82,27,0.2)]">
                <h3 className="text-[1.1rem] font-bold text-ink mb-3">{title}</h3>
                <p className="text-ink/50 text-[0.88rem] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-[1.6rem] font-black text-ink mb-8">Neler yapıyoruz?</h2>
          <ul className="space-y-4">
            {[
              'Kurumsal web sitesi tasarım ve geliştirme',
              'E-ticaret sitesi kurma (ödeme, stok, kargo entegrasyonu)',
              'Landing page tasarımı (dönüşüm odaklı)',
              'AI chatbot ve otomasyon entegrasyonu',
              'E-posta otomasyon sistemleri',
              'Marka kimliği tasarımı (logo, renk, tipografi)',
              'SEO optimizasyonu ve Google Ads yönetimi',
              'Teknik destek ve bakım hizmeti',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/70 text-[0.95rem]">
                <Chk /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-cream text-center">
        <div className="max-w-[600px] mx-auto px-5 sm:px-8">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-ink mb-4">
            Projenizi <span className="gradient-text">konuşalım</span>
          </h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.75] mb-8">
            Dijital hedeflerinizi birlikte belirleyelim. Ücretsiz keşif görüşmesi ile projenize en uygun çözümü sunalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim"
              className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold
                text-[0.95rem] no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200">
              Ücretsiz Keşif Görüşmesi →
            </Link>
            <Link href="/paketler"
              className="inline-block border-[1.5px] border-black/[0.12] text-ink px-8 py-4 rounded-full font-bold
                text-[0.95rem] no-underline hover:border-accent hover:text-accent transition-all duration-200">
              Paketleri İncele
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

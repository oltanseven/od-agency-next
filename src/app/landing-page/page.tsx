import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Landing Page Tasarımı | Dönüşüm Odaklı Tek Sayfa | OD Agency',
  description: 'Ziyaretçileri müşteriye çeviren landing page. 5 iş gününde teslim, mobil uyumlu, SEO dahil. 7.500₺\'den başlayan fiyatlar.',
  keywords: ['landing page', 'landing page tasarımı', 'tek sayfa site', 'dönüşüm odaklı tasarım', 'landing page fiyatı'],
  alternates: { canonical: 'https://odagency.com/landing-page' },
}

const includes = [
  { title: 'Tek Sayfa Tasarım', desc: 'Hedefinize özel, dönüşüm odaklı tek sayfa. Her element bir amaca hizmet eder.' },
  { title: 'Mobil Uyumlu', desc: 'Müşterilerinizin %70\'i telefondan geliyor. Siteniz her ekranda mükemmel görünsün.' },
  { title: 'İletişim Formu + WhatsApp', desc: 'Ziyaretçiler size anında ulaşsın. Form doldurma veya direkt WhatsApp ile.' },
  { title: 'Temel SEO Ayarları', desc: 'Meta etiketler, yapısal veri, hız optimizasyonu. Google\'da görünür olun.' },
  { title: 'Google Analytics & GSC', desc: 'Kaç kişi geldi, nereden geldi, ne yaptı. Verilerinizi takip edin.' },
  { title: '2 Revizyon Hakkı', desc: 'Tasarımda değişiklik istediğiniz noktaları 2 tur revizyon ile düzeltiyoruz.' },
]

export default function LandingPagePage() {
  return (
    <>
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// Landing Page</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            5 günde dijitalde <span className="gradient-text">yerinizi alın</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            İşletmenizi tanıtan, ziyaretçileri müşteriye çeviren tek sayfa site. Hızlı, etkili, uygun fiyatlı.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

          <div className="mb-14">
            <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">// Neler Dahil?</span>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-ink">
              Lansman paketinizde <span className="gradient-text">her şey var</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {includes.map(({ title, desc }, i) => (
              <div key={title} className="flex gap-4 items-start p-6 bg-black/[0.025] border border-black/[0.09] rounded-[18px]
                transition-all duration-200 hover:border-accent/30">
                <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0
                  text-[0.8rem] font-bold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-bold text-ink mb-1">{title}</h3>
                  <p className="text-ink/50 text-[0.85rem] leading-[1.65]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-cream-soft border border-black/[0.09] rounded-[20px] px-5 sm:px-10 py-8
            flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[1.2rem] font-bold text-ink mb-1">7.500₺&apos;den başlayan fiyatlarla</h3>
              <p className="text-ink/50 text-[0.9rem] max-w-[440px]">
                5 iş gününde teslim. 14 gün para iade garantisi. 3 ay teknik destek dahil.
              </p>
            </div>
            <Link href="/iletisim"
              className="shrink-0 bg-accent text-white px-8 py-3.5 rounded-full font-bold text-[0.95rem]
                no-underline hover:opacity-90 transition-opacity whitespace-nowrap">
              Projeni Başlat →
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}

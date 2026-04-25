import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paketler & Fiyatlandırma',
  description: 'OD Agency web tasarım ve AI otomasyon paketleri. Lansman, Profesyonel, Mağaza ve AI Pro seçenekleri.',
}

const packages = [
  {
    name: 'Lansman',
    price: '₺15.000',
    desc: 'Yeni işletmeler ve startup\'lar için hızlı, etkili giriş paketi.',
    features: ['5 sayfa kurumsal site','Mobil uyumlu tasarım','Temel SEO kurulumu','İletişim formu','1 ay ücretsiz destek'],
    cta: 'Başlayalım →',
    popular: false,
    variant: 'outline',
  },
  {
    name: 'Profesyonel',
    price: '₺35.000',
    desc: 'Büyüyen işletmeler için güçlü dijital varlık ve dönüşüm odaklı yapı.',
    features: ['10 sayfa + Blog sistemi','UI/UX tasarım süreci','Gelişmiş SEO + hız optimizasyonu','CRM entegrasyonu','3 ay ücretsiz destek'],
    cta: 'En Çok Tercih Edilen →',
    popular: true,
    variant: 'primary',
  },
  {
    name: 'Mağaza',
    price: '₺55.000',
    desc: 'E-ticaret odaklı, satış artıran tam donanımlı online mağaza.',
    features: ['Sınırsız ürün','Ödeme sistemi entegrasyonu','Stok & sipariş yönetimi','Sepet & favoriler','6 ay ücretsiz destek'],
    cta: 'Başlayalım →',
    popular: false,
    variant: 'outline',
  },
  {
    name: 'AI Pro',
    price: 'Teklif',
    desc: 'Chatbot, otomasyon ve AI entegrasyonlarıyla iş süreçlerini dönüştürün.',
    features: ['Özel AI chatbot','İş akışı otomasyonu','CRM & ERP entegrasyonu','Aylık AI raporu','Öncelikli destek'],
    cta: 'Teklif İste →',
    popular: false,
    variant: 'dark',
  },
]

export default function PaketlerPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">Fiyatlandırma</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Şeffaf fiyatlandırma,<br /><span className="gradient-text">sürpriz yok.</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Her ölçekteki işletme için farklı paketler. Bütçenize ve hedeflerinize uygun başlangıç noktasını birlikte belirleyelim.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section className="py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map(({ name, price, desc, features, cta, popular, variant }) => (
              <div key={name}
                className={`rounded-[18px] p-8 border relative flex flex-col
                  ${popular
                    ? 'bg-accent text-white border-accent shadow-[0_20px_60px_rgba(255,82,27,0.25)]'
                    : 'bg-cream border-black/[0.09]'}`}>

                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-night text-white
                    text-[0.72rem] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    En Çok Tercih Edilen
                  </div>
                )}

                <div className="mb-6">
                  <h2 className={`text-[1.2rem] font-bold mb-1 ${popular ? 'text-white' : 'text-ink'}`}>{name}</h2>
                  <div className={`text-[2rem] font-black leading-none mb-3 ${popular ? 'text-white' : 'text-ink'}`}>
                    {price}
                  </div>
                  <p className={`text-[0.88rem] leading-[1.6] ${popular ? 'text-white/75' : 'text-ink/50'}`}>{desc}</p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {features.map(f => (
                    <li key={f} className={`text-[0.88rem] flex items-start gap-2 ${popular ? 'text-white/90' : 'text-ink/70'}`}>
                      <span className={`mt-0.5 shrink-0 ${popular ? 'text-white' : 'text-accent'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/iletisim"
                  className={`text-center py-3 rounded-full font-bold text-[0.9rem] no-underline transition-all duration-200
                    ${variant === 'primary' ? 'bg-white text-accent hover:bg-cream-soft'
                    : variant === 'dark'    ? 'bg-night text-white hover:bg-night/90'
                    :                         'bg-accent text-white hover:bg-coral'}`}>
                  {cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Bakım paketi */}
          <div className="mt-8 bg-cream-soft border border-black/[0.09] rounded-[18px] p-8
            flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[1.1rem] font-bold text-ink mb-1">Bakım & Destek Paketi</h3>
              <p className="text-ink/50 text-[0.9rem]">Güvenlik güncellemeleri, içerik değişiklikleri, uptime izleme ve aylık performans raporu.</p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-[1.5rem] font-black text-ink">₺2.500 <span className="text-ink/40 font-normal text-base">/ ay</span></div>
              <Link href="/iletisim"
                className="bg-transparent text-ink border border-black/[0.09] px-6 py-2.5 rounded-full
                  font-semibold text-[0.88rem] no-underline hover:border-accent hover:text-accent transition-all">
                Bilgi Al →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-night text-center">
        <div className="max-w-[1260px] mx-auto px-8">
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black text-white mb-4">Hangi paketi seçeceğinizden emin değil misiniz?</h2>
          <p className="text-white/40 mb-8">Ücretsiz görüşmede projenizi anlatalım, birlikte en doğru seçimi yapalım.</p>
          <Link href="/iletisim"
            className="bg-accent text-white px-10 py-4 rounded-full font-bold no-underline
              hover:bg-coral transition-colors inline-block">
            Ücretsiz Görüşme Ayarlayın →
          </Link>
        </div>
      </section>
    </>
  )
}

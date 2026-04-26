import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // Hizmetler
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            Web siteniz <span className="gradient-text">müşteri getirsin</span>
          </h2>
          <p className="text-ink/50 mt-3 max-w-[500px] leading-[1.7]">
            Güzel görünmek yetmez. Siteniz her gün yeni müşteri kazandırmalı. İşte tam bunu yapan çözümler:
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">

          {/* b1 — büyük turuncu kart (7 kolon) */}
          <div className="col-span-12 lg:col-span-7 bg-accent text-white rounded-[18px] p-9
            border border-transparent transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,82,27,0.25)] cursor-default">
            <div className="text-[5rem] font-black leading-none tracking-tight opacity-[0.18] mb-3 select-none">01</div>
            <h3 className="text-[1.15rem] font-bold mb-3">Web Tasarımı & Geliştirme</h3>
            <p className="text-white/80 text-[0.9rem] leading-[1.65]">
              Müşterileriniz sitenize girdiğinde 3 saniyede ne yaptığınızı anlasın, güvensin ve iletişime geçsin. Google&apos;da ilk sayfada çıkın.
            </p>
            <span className="inline-block mt-5 bg-white/20 text-white text-[0.72rem] font-bold px-3 py-1 rounded-full">
              ⭐ En Çok Tercih Edilen
            </span>
          </div>

          {/* b2 — e-ticaret (5 kolon) */}
          <div className="col-span-12 lg:col-span-5 bg-[rgba(232,136,26,0.1)] border border-[#FFD5C2] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:shadow-[0_20px_50px_rgba(255,107,53,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-[rgba(232,136,26,0.15)] flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 7v13a2 2 0 002 2h14a2 2 0 002-2V7l-3-5H6z" stroke="#e8881a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/>
                <path d="M3 7h18M16 11a4 4 0 01-8 0" stroke="#e8881a" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-coral mb-2">E-Ticaret Çözümleri</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              Ürünlerinizi online satışa açın. Ödeme, stok, kargo tek panelden yönetin. Sepet terk eden müşterilere otomatik hatırlatma gönderilsin.
            </p>
            <span className="inline-block mt-5 bg-[rgba(232,136,26,0.1)] text-coral border border-[rgba(232,136,26,0.25)] text-[0.72rem] font-bold px-3 py-1 rounded-full">
              Shopify & WooCommerce
            </span>
          </div>

          {/* b3 — Mobil (4 kolon) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="2" width="14" height="20" rx="2.5" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                <path d="M9 6h6M12 18h.01" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">Mobil Uyumluluk</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              Müşterilerinizin %70&apos;i telefondan geliyor. Siteniz telefonda da mükemmel çalışsın, satış kaçırmayın.
            </p>
          </div>

          {/* b4 — SEO (4 kolon) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-[#D1FAE5] flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L4 13.5h7L9.5 22 20 10.5h-7z" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/>
                <path d="M13 2L7.5 11H13" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">Performans & SEO</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              Siteniz 1 saniyede açılsın, Google&apos;da ilk sayfada çıksın. Rakipleriniz reklam verirken siz organik trafik kazanın.
            </p>
          </div>

          {/* b5 — Marka (4 kolon) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-9
            transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(255,82,27,0.12)] cursor-default">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.38"/>
                <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-2">Marka Kimliği</h3>
            <p className="text-ink/50 text-[0.9rem] leading-[1.65]">
              Müşterileriniz sizi bir bakışta tanısın. Logo, renk paleti ve görsel diliniz profesyonel bir bütün oluştursun.
            </p>
          </div>

          {/* b6 — Bakım & Destek (tam genişlik) */}
          <div className="col-span-12 bg-cream-soft border border-black/[0.09] rounded-[18px] p-9
            flex flex-col md:flex-row items-start md:items-center justify-between gap-6
            transition-all duration-300 hover:border-accent/20">
            <div>
              <h3 className="text-[1.1rem] font-bold text-ink mb-1">Bakım & Teknik Destek</h3>
              <p className="text-ink/50 text-[0.9rem] max-w-[500px] leading-[1.65]">
                Siteniz yayına girdikten sonra da yanınızdayız. Güncelleme, güvenlik ve teknik destek hizmetleriyle kesintisiz çalışmanızı sağlıyoruz.
              </p>
            </div>
            <Link href="/iletisim"
              className="shrink-0 bg-accent text-white px-7 py-3 rounded-full font-bold text-[0.9rem]
                no-underline hover:bg-coral transition-colors">
              Teklif Al →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

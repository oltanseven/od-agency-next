import Link from 'next/link'

const IgIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="2" y="2" width="20" height="20" rx="4"/>
    <path d="M7 10v7M7 7v.01M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4M12 10v7"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-black/[0.09] pt-20 pb-10">
      <div className="max-w-[1260px] mx-auto px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="text-[1.4rem] font-black tracking-[-0.05em] mb-3 text-ink">
              OD<span className="text-accent">.</span>Agency
            </div>
            <p className="text-ink/50 text-[0.87rem] leading-[1.8] mb-6 max-w-[280px]">
              İşletmenizi dijitalde en güçlü şekilde konumlandırmak için buradayız. Modern, hızlı ve dönüşüm odaklı.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <IgIcon />, title: 'Instagram', href: 'https://instagram.com/odagency' },
                { icon: <XIcon />,  title: 'Twitter / X', href: 'https://x.com/odagency' },
                { icon: <LiIcon />, title: 'LinkedIn', href: 'https://linkedin.com/company/odagency' },
              ].map(({ icon, title, href }) => (
                <a
                  key={title} href={href} title={title} target="_blank" rel="noreferrer"
                  className="w-11 h-11 rounded-lg border border-black/[0.09]
                    flex items-center justify-center text-ink/50
                    hover:border-accent hover:text-accent
                    focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-ink/50 mb-5">Hizmetler</h4>
            <ul className="flex flex-col gap-3">
              {[
                ['Web Tasarımı', '/#hizmetler'],
                ['E-Ticaret',    '/#hizmetler'],
                ['AI Otomasyon', '/#otomasyon'],
                ['Marka Kimliği','/#hizmetler'],
                ['Landing Page', '/#hizmetler'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-ink2 text-[0.88rem] no-underline hover:text-accent rounded focus-visible:outline-2 focus-visible:outline-accent/50">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-ink/50 mb-5">Şirket</h4>
            <ul className="flex flex-col gap-3">
              {[
                ['Referanslar', '/#referanslar'],
                ['Projeler',   '/projeler'],
                ['Paketler',   '/paketler'],
                ['Blog',       '/blog'],
                ['İletişim',   '/iletisim'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-ink2 text-[0.88rem] no-underline hover:text-accent rounded focus-visible:outline-2 focus-visible:outline-accent/50">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-ink/50 mb-5">İletişim</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:merhaba@odagency.com" className="text-ink2 text-[0.88rem] no-underline hover:text-accent rounded focus-visible:outline-2 focus-visible:outline-accent/50">
                  merhaba@odagency.com
                </a>
              </li>
              <li>
                <a href="tel:+905324652031" className="text-ink2 text-[0.88rem] no-underline hover:text-accent rounded focus-visible:outline-2 focus-visible:outline-accent/50">
                  +90 532 465 20 31
                </a>
              </li>
              <li>
                <span className="text-ink2 text-[0.88rem]">Antalya, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/[0.09] pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-ink/50 text-[0.82rem]">© 2026 OD Agency. Tüm hakları saklıdır.</p>
          <p className="text-[0.82rem]">
            <Link href="/gizlilik" className="text-ink/50 no-underline hover:text-accent transition-colors">Gizlilik Politikası</Link>
            <span className="text-ink/30 mx-2">·</span>
            <Link href="/kullanim-kosullari" className="text-ink/50 no-underline hover:text-accent transition-colors">Kullanım Koşulları</Link>
          </p>
        </div>

      </div>
    </footer>
  )
}

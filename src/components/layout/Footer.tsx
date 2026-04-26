import Link from 'next/link'

const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

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
    <footer className="bg-cream border-t border-black/[0.09] pt-14 sm:pt-20 pb-10">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-[1.4rem] font-black tracking-[-0.05em] mb-3 text-ink">
              OD<span className="text-accent">.</span>Agency
            </div>
            <p className="text-ink/50 text-[0.87rem] leading-[1.8] mb-6 max-w-[280px]">
              İşletmenizi dijitalde en güçlü şekilde konumlandırmak için buradayız. Modern, hızlı ve dönüşüm odaklı.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <WaIcon />, title: 'WhatsApp', href: 'https://wa.me/905324652031' },
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
                ['E-Ticaret',    '/e-ticaret'],
                ['AI Otomasyon', '/ai-otomasyon'],
                ['Marka Kimliği','/marka-kimligi'],
                ['Landing Page', '/landing-page'],
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

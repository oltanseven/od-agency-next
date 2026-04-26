import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marka Kimliği Tasarımı | Logo, Renk Paleti, Görsel Dil | OD Agency',
  description: 'Müşterileriniz sizi bir bakışta tanısın. Profesyonel logo, renk paleti, tipografi ve görsel dil tasarımı ile markanızı güçlendirin.',
  keywords: ['marka kimliği', 'logo tasarımı', 'kurumsal kimlik', 'marka tasarımı', 'görsel kimlik', 'renk paleti', 'tipografi'],
  alternates: { canonical: 'https://odagency.com/marka-kimligi' },
}

const deliverables = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Logo Tasarımı',
    desc: 'Markanızı temsil eden, her boyutta net görünen, akılda kalan bir logo. Farklı kullanım alanları için varyasyonlar dahil.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#e8881a" strokeWidth="1.5" opacity="0.38"/><circle cx="12" cy="12" r="4" stroke="#e8881a" strokeWidth="2"/></svg>,
    title: 'Renk Paleti',
    desc: 'Markanızın duygusunu yansıtan ana ve yardımcı renkler. Web, baskı ve sosyal medya için uyumlu.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7V4h16v3M9 20h6M12 4v16" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Tipografi Sistemi',
    desc: 'Başlıklar, alt başlıklar ve gövde metin için uyumlu font çifti. Okunabilir, modern ve tutarlı.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#16a34a" strokeWidth="1.5" opacity="0.38"/><path d="M3 9h18M9 21V9" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Görsel Dil & İkon Seti',
    desc: 'Web siteniz ve sosyal medyanızda tutarlı görsel anlatım. İkon stili, fotoğraf tonu ve illüstrasyon dili.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#e8881a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/><path d="M14 2v6h6" stroke="#e8881a" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Marka Kılavuzu',
    desc: 'Tüm tasarım kurallarını içeren dijital rehber. Ekibiniz veya ajansınız bu kılavuzu takip ederek tutarlı kalır.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#16a34a" strokeWidth="1.5" opacity="0.38"/><path d="M12 22V12M3 7l9 5 9-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Sosyal Medya Şablonları',
    desc: 'Instagram, LinkedIn ve diğer platformlar için hazır tasarım şablonları. Canva veya Figma dosyaları olarak.',
  },
]

export default function MarkaKimligiPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// Marka Kimliği</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Müşterileriniz sizi <span className="gradient-text">bir bakışta tanısın</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Profesyonel logo, renk paleti ve görsel diliniz bir bütün oluştursun. İlk izlenim güçlü olsun.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">// Neler Alırsınız?</span>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black text-ink">
              Marka kimliği <span className="gradient-text">paketiniz</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(({ icon, title, desc }) => (
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
              Markanızı güçlendirelim
            </h2>
            <p className="text-ink/50 max-w-[440px] mx-auto mb-8 leading-[1.75]">
              Mevcut logonuzu ve görsel kimliğinizi birlikte değerlendirelim. Ücretsiz, bağlayıcı değil.
            </p>
            <Link href="/iletisim" className="bg-accent text-white px-8 py-3.5 rounded-full font-bold text-[0.95rem] no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200 inline-block">
              Ücretsiz Marka Analizi Al →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

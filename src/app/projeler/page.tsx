import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Tasarım Portföy & Projeler | OD Agency',
  description: 'OD Agency tarafından hayata geçirilen kurumsal web sitesi, e-ticaret ve AI otomasyon projeleri. Gerçek müşteri çalışmalarını inceleyin.',
  keywords: ['web tasarım portföy', 'web sitesi örnekleri', 'e-ticaret projeleri', 'kurumsal web tasarım örnekleri'],
  alternates: { canonical: 'https://odagency.com/projeler' },
}

// Projeler Cloudinary'den gelecek. Şimdilik placeholder.
const projects = [
  {
    slug: 'cosmos-pilates',
    title: 'Cosmos Pilates',
    cat: 'Web Tasarım',
    desc: 'Reformer pilates stüdyosu için mobil öncelikli kurumsal site ve online randevu sistemi.',
    tags: ['Next.js', 'Supabase', 'Randevu'],
    color: 'from-violet-100 to-purple-50',
    year: '2026',
  },
  {
    slug: 'eticaret-projesi',
    title: 'Örnek E-Ticaret',
    cat: 'E-Ticaret',
    desc: 'Ödeme entegrasyonu, stok yönetimi ve mobil alışveriş deneyimi.',
    tags: ['Next.js', 'Stripe', 'Supabase'],
    color: 'from-orange-100 to-amber-50',
    year: '2026',
  },
  {
    slug: 'kurumsal-site',
    title: 'Kurumsal Konsept',
    cat: 'Kurumsal',
    desc: 'B2B hizmet şirketi için güven odaklı, dönüşüm optimize edilmiş kurumsal site.',
    tags: ['Next.js', 'SEO', 'CRM'],
    color: 'from-blue-100 to-indigo-50',
    year: '2026',
  },
]

export default function ProjelerPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">Portföy</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Hayata geçirdiğimiz<br /><span className="gradient-text">projeler.</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Her proje, müşterimizin hedeflerine ulaşmasına katkı sağlamak için özenle tasarlandı.
          </p>
        </div>
      </div>

      <section className="py-24 bg-cream">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ slug, title, cat, desc, tags, color, year }) => (
              <div key={slug}
                className="group bg-cream border border-black/[0.09] rounded-[18px] overflow-hidden
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:border-accent/20">

                {/* Görsel alanı — Cloudinary URL gelince next/image olacak */}
                <div className={`h-52 bg-gradient-to-br ${color} relative flex items-center justify-center`}>
                  <span className="text-ink/20 text-sm font-medium">Görsel eklenecek</span>
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm
                    text-ink text-[0.72rem] font-bold px-3 py-1 rounded-full">
                    {year}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-accent text-[0.72rem] font-bold tracking-wider uppercase mb-2 block">{cat}</span>
                  <h3 className="text-[1.1rem] font-bold text-ink mb-2 group-hover:text-accent transition-colors">{title}</h3>
                  <p className="text-ink/50 text-[0.88rem] leading-[1.65] mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag}
                        className="text-[0.72rem] font-semibold text-ink/50 bg-cream-soft
                          border border-black/[0.07] px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-ink/50 mb-6">Projenizi birlikte hayata geçirelim.</p>
            <Link href="/iletisim"
              className="bg-accent text-white px-10 py-4 rounded-full font-bold no-underline
                hover:bg-coral transition-colors inline-block">
              Ücretsiz Keşif Görüşmesi →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

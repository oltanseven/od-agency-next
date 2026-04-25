import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Web Tasarım, SEO & AI İpuçları',
  description: 'Dijital dünya, web tasarım ve AI otomasyon hakkında güncel yazılar.',
}

const posts = [
  {
    slug: 'web-sitesi-hizi-seo',
    cat: 'SEO',
    title: 'Web Sitesi Hızı Neden En Önemli SEO Faktörü?',
    excerpt: 'Core Web Vitals skorları artık Google sıralamalarında doğrudan etkili. Sitenizi nasıl hızlandıracağınızı anlattık.',
    date: 'Nisan 2026',
    readTime: '5 dk',
    color: 'from-orange-100 to-amber-50',
  },
  {
    slug: 'ai-chatbot-musteri-hizmetleri',
    cat: 'AI Otomasyon',
    title: '7/24 Müşteri Hizmetleri: AI Chatbot Nasıl Kurulur?',
    excerpt: 'Müşteri sorularını otomatik yanıtlayan, lead toplayan ve randevu alan chatbot sistemi.',
    date: 'Nisan 2026',
    readTime: '7 dk',
    color: 'from-blue-100 to-indigo-50',
  },
  {
    slug: 'eticaret-donusum-optimizasyonu',
    cat: 'E-Ticaret',
    title: 'E-Ticaret Dönüşüm Oranınızı %30 Artıracak 8 Değişiklik',
    excerpt: 'Sepet terk oranını düşürmek ve ortalama sipariş değerini artırmak için kanıtlanmış yöntemler.',
    date: 'Mart 2026',
    readTime: '6 dk',
    color: 'from-green-100 to-emerald-50',
  },
  {
    slug: 'marka-kimlik-rehberi',
    cat: 'Marka',
    title: 'Güçlü Marka Kimliği Oluşturmanın 5 Adımı',
    excerpt: 'Logo\'dan renk paletine, tipografiden ses tonuna kadar tutarlı bir marka kimliği rehberi.',
    date: 'Mart 2026',
    readTime: '4 dk',
    color: 'from-purple-100 to-violet-50',
  },
  {
    slug: 'nextjs-neden-tercih-ediyoruz',
    cat: 'Teknoloji',
    title: 'Next.js\'i Neden Tercih Ediyoruz?',
    excerpt: 'WordPress\'ten Next.js\'e geçişin avantajları ve müşterilerimize nasıl fayda sağladığı.',
    date: 'Şubat 2026',
    readTime: '5 dk',
    color: 'from-slate-100 to-gray-50',
  },
  {
    slug: 'antalya-dijital-pazarlama',
    cat: 'Yerel SEO',
    title: 'Antalya\'da İşletmenizi Google\'da Üst Sıralara Taşıyın',
    excerpt: 'Yerel SEO stratejileri ile bölgenizdeki müşterilere ulaşmanın pratik yolları.',
    date: 'Şubat 2026',
    readTime: '6 dk',
    color: 'from-teal-100 to-cyan-50',
  },
]

const cats = ['Tümü', 'SEO', 'AI Otomasyon', 'E-Ticaret', 'Marka', 'Teknoloji', 'Yerel SEO']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">Blog</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Dijital dünyadan<br /><span className="gradient-text">güncel yazılar.</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Web tasarım, SEO, AI otomasyon ve dijital strateji hakkında uygulanabilir rehberler.
          </p>
        </div>
      </div>

      <section className="py-20 bg-cream">
        <div className="max-w-[1260px] mx-auto px-8">

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {cats.map((cat, i) => (
              <button key={cat}
                className={`px-4 py-2 rounded-full text-[0.82rem] font-semibold transition-all
                  ${i === 0
                    ? 'bg-accent text-white'
                    : 'bg-cream-soft border border-black/[0.09] text-ink/60 hover:border-accent hover:text-accent'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(({ slug, cat, title, excerpt, date, readTime, color }) => (
              <Link key={slug} href={`/blog/${slug}`}
                className="group bg-cream border border-black/[0.09] rounded-[18px] overflow-hidden
                  no-underline transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-accent/20">

                {/* Thumbnail */}
                <div className={`h-44 bg-gradient-to-br ${color} flex items-end p-5`}>
                  <span className="text-[0.72rem] font-bold tracking-wider uppercase
                    bg-white/80 text-ink px-3 py-1 rounded-full backdrop-blur-sm">
                    {cat}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[1rem] font-bold text-ink leading-[1.4] mb-2
                    group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  <p className="text-ink/50 text-[0.88rem] leading-[1.65] mb-4">{excerpt}</p>
                  <div className="flex items-center justify-between text-[0.78rem] text-ink/40">
                    <span>{date}</span>
                    <span>{readTime} okuma</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import { getPublishedPosts } from '@/lib/supabase'
import ServiceHeroBg from '@/components/ServiceHeroBg'

export const metadata: Metadata = {
  title: 'Web Tasarım Blog | Fiyatlar, Trendler & Rehberler | Oder Agency',
  description: 'Web sitesi kurma maliyeti, e-ticaret nasıl kurulur, freelancer mı ajans mı? Web tasarım ve dijital büyüme üzerine pratik rehberler.',
  keywords: ['web sitesi kurma maliyeti', 'web tasarım ajansı nasıl seçilir', 'e-ticaret sitesi nasıl kurulur', 'freelancer mı ajans mı', 'web tasarım blog'],
  alternates: { canonical: 'https://oder.agency/blog' },
  openGraph: {
    title: 'Web Tasarım Blog | Fiyatlar, Trendler & Rehberler | Oder Agency',
    description: 'Web tasarım ve dijital büyüme üzerine pratik rehberler.',
    url: 'https://oder.agency/blog',
  },
}

const catColors: Record<string, string> = {
  'Web Tasarımı':   'rgba(255,82,27,0.9)',
  'AI & Otomasyon': 'rgba(232,136,26,0.9)',
  'SEO':            'rgba(22,163,74,0.9)',
  'E-Ticaret':      'rgba(37,99,235,0.9)',
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const featured = posts[0]
  const grid = posts.slice(1)

  return (
    <>
      {/* Hero */}
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09] relative">
        <ServiceHeroBg theme="blog" />
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// Blog & İçerikler</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Dijitalde <span className="gradient-text">bilgi</span> paylaşıyoruz
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Web tasarımı, AI otomasyon ve dijital büyüme üzerine içerikler. İşletmenizi güçlendiren bilgiler.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

          {posts.length === 0 && (
            <p className="text-ink/50 text-center py-20">Henüz yayınlanmış yazı yok. Yakında burada olacak!</p>
          )}

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`}
              className="rounded-[18px] overflow-hidden
                border-[1.5px] border-black/[0.09] mb-8 no-underline text-inherit
                transition-all duration-300 hover:shadow-[0_24px_60px_rgba(255,82,27,0.1)]
                hover:border-[rgba(255,82,27,0.25)] group block">
              <div className="p-10 flex flex-col justify-center bg-cream">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white px-3 py-1 rounded-full inline-block mb-3"
                  style={{ background: catColors[featured.category] || 'rgba(255,82,27,0.9)' }}>
                  {featured.category}
                </span>
                <h2 className="text-[1.6rem] font-black leading-[1.3] text-ink mb-3
                  group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-ink/50 leading-[1.75] mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-[0.75rem] text-ink/40 mb-5">
                  {featured.published_at && (
                    <span>{new Date(featured.published_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  )}
                  <span>{featured.read_time} okuma</span>
                </div>
                <span className="text-accent font-bold text-[0.82rem]">Okumaya Devam Et →</span>
              </div>
            </Link>
          )}

          {/* Blog grid */}
          {grid.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] overflow-hidden
                    no-underline text-inherit flex flex-col
                    transition-all duration-300 hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(255,82,27,0.1)] hover:border-[rgba(255,82,27,0.25)]">
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white px-3 py-1 rounded-full inline-block mb-3 self-start"
                      style={{ background: catColors[post.category] || 'rgba(255,82,27,0.9)' }}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 mb-3 text-[0.75rem] text-ink/40">
                      {post.published_at && (
                        <span>{new Date(post.published_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      )}
                      <span>{post.read_time}</span>
                    </div>
                    <h3 className="text-[1rem] font-bold text-ink leading-[1.45] mb-2
                      group-hover:text-accent transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-ink/50 text-[0.83rem] leading-[1.65] mb-4">{post.excerpt}</p>
                    <span className="text-accent font-bold text-[0.82rem]">Oku →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-16 rounded-[20px] px-6 sm:px-14 py-10 sm:py-14 flex flex-col md:flex-row items-center
            justify-between gap-8 flex-wrap"
            style={{ background: '#0D0B1E' }}>
            <div>
              <h3 className="text-white font-black text-[1.4rem] mb-1">Yeni içeriklerden haberdar olun</h3>
              <p className="text-[0.9rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>Haftada bir, işinize yarayacak içerikler. Spam yok.</p>
            </div>
            <NewsletterForm />
          </div>

        </div>
      </section>
    </>
  )
}

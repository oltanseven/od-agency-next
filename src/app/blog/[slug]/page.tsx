import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/supabase'

const catColors: Record<string, string> = {
  'Web Tasarımı':   'rgba(255,82,27,0.9)',
  'AI & Otomasyon': 'rgba(232,136,26,0.9)',
  'SEO':            'rgba(22,163,74,0.9)',
  'E-Ticaret':      'rgba(37,99,235,0.9)',
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Yazı Bulunamadı' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://odagency.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://odagency.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <>
      {/* Hero */}
      <div className="pt-28 sm:pt-36 pb-16 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <Link href="/blog" className="text-accent text-[0.82rem] font-semibold no-underline hover:underline mb-6 inline-block">
            ← Blog&apos;a Dön
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white px-3 py-1 rounded-full"
              style={{ background: catColors[post.category] || 'rgba(255,82,27,0.9)' }}>
              {post.category}
            </span>
            <span className="text-ink/40 text-[0.8rem]">{date}</span>
            <span className="text-ink/40 text-[0.8rem]">{post.read_time} okuma</span>
          </div>
          <h1 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.12] tracking-[-0.02em] text-ink">
            {post.title}
          </h1>
          <p className="text-ink/50 mt-4 text-[1.05rem] leading-[1.75]">{post.excerpt}</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-[760px] mx-auto px-5 sm:px-8 py-16">
        <div
          className="prose prose-lg max-w-none
            [&_h2]:text-[1.4rem] [&_h2]:font-black [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-[1.1rem] [&_h3]:font-bold [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-ink/70 [&_p]:leading-[1.85] [&_p]:mb-5
            [&_ul]:mb-5 [&_ul]:pl-6 [&_li]:text-ink/70 [&_li]:leading-[1.75] [&_li]:mb-2
            [&_ol]:mb-5 [&_ol]:pl-6
            [&_strong]:text-ink [&_strong]:font-bold
            [&_a]:text-accent [&_a]:no-underline [&_a]:font-semibold hover:[&_a]:underline
            [&_blockquote]:border-l-4 [&_blockquote]:border-accent/30 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-ink/50"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-cream-soft border border-black/[0.09] rounded-2xl p-10 text-center">
          <h3 className="text-[1.3rem] font-black text-ink mb-2">Projenizi konuşalım</h3>
          <p className="text-ink/50 mb-6 text-[0.92rem]">
            Bu yazıda bahsettiğimiz konularda size nasıl yardımcı olabileceğimizi anlatmak isteriz.
          </p>
          <Link href="/iletisim"
            className="bg-accent text-white px-8 rounded-full font-bold text-[0.92rem]
              no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200 inline-flex items-center"
            style={{ minHeight: '48px' }}>
            Ücretsiz Keşif Görüşmesi →
          </Link>
        </div>
      </article>
    </>
  )
}

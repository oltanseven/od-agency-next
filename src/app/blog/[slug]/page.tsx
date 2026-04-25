import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog Yazısı',
  robots: { index: false },
}

export default function BlogPostPage() {
  return (
    <>
      <div className="pt-36 pb-16 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[760px] mx-auto px-8">
          <Link href="/blog" className="text-accent text-[0.82rem] font-semibold no-underline hover:underline mb-6 inline-block">
            ← Blog&apos;a Dön
          </Link>
          <h1 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.12] tracking-[-0.02em] text-ink">
            Yazı yakında yayınlanacak
          </h1>
          <p className="text-ink/40 text-sm mt-3">Bu içerik hazırlanıyor.</p>
        </div>
      </div>
      <div className="max-w-[760px] mx-auto px-8 py-16 text-center">
        <p className="text-ink/50 mb-6">Bu blog yazısı henüz yayınlanmadı. Diğer yazılarımıza göz atabilirsiniz.</p>
        <Link href="/blog"
          className="bg-accent text-white px-8 py-3 rounded-full font-bold no-underline hover:bg-coral transition-colors inline-block">
          Tüm Yazılar →
        </Link>
      </div>
    </>
  )
}

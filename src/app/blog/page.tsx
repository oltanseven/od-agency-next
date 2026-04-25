import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Web Tasarım, AI & Dijital Büyüme',
  description: 'Web tasarımı, AI otomasyon ve dijital pazarlama üzerine içerikler. OD Agency Blog.',
}

const thumbs = {
  1: 'linear-gradient(135deg,#1e1060,#4338ca,#2d1b69)',
  2: 'linear-gradient(135deg,#0c1a2e,#1e3a5f,#0f4c75)',
  3: 'linear-gradient(135deg,#14532d,#166534,#052e16)',
  4: 'linear-gradient(135deg,#431407,#7c2d12,#2d0a00)',
  5: 'linear-gradient(135deg,#1e3a5f,#1e40af,#1e1060)',
  6: 'linear-gradient(135deg,#064e3b,#065f46,#022c22)',
  7: 'linear-gradient(135deg,#3b0764,#6b21a8,#2e1065)',
}

const catColors: Record<string, string> = {
  'Web Tasarımı':    'rgba(255,82,27,0.9)',
  'AI & Otomasyon':  'rgba(232,136,26,0.9)',
  'SEO':             'rgba(22,163,74,0.9)',
  'E-Ticaret':       'rgba(37,99,235,0.9)',
}

function CatBadge({ cat }: { cat: string }) {
  return (
    <span className="absolute top-4 left-4 z-10 text-[0.68rem] font-bold uppercase tracking-[0.08em]
      text-white px-3 py-1 rounded-full"
      style={{ background: catColors[cat] || 'rgba(255,82,27,0.9)' }}>
      {cat}
    </span>
  )
}

const cats = ['Tümü', 'Web Tasarımı', 'AI & Otomasyon', 'SEO', 'E-Ticaret', 'İpuçları']

const posts = [
  {
    slug: 'ai-chatbot-musteri-hizmetleri',
    cat: 'AI & Otomasyon',
    thumb: 4,
    title: 'AI Chatbotlar Müşteri Hizmetlerini Nasıl Dönüştürüyor?',
    excerpt: '7/24 otomatik yanıt, maliyet tasarrufu ve müşteri memnuniyeti. Gerçek verilerle analiz ettik.',
    date: '15 Nisan 2026',
    readTime: '5 dk',
  },
  {
    slug: 'core-web-vitals-nedir',
    cat: 'SEO',
    thumb: 3,
    title: 'Google Core Web Vitals Nedir ve İşletmeniz İçin Neden Önemlidir?',
    excerpt: 'LCP, FID, CLS metriklerini sadeleştirdik. Sitenizi nasıl optimize edersiniz, adım adım anlattık.',
    date: '10 Nisan 2026',
    readTime: '6 dk',
  },
  {
    slug: 'eticaret-donusum-10-taktik',
    cat: 'E-Ticaret',
    thumb: 5,
    title: 'E-Ticaret Siteniz İçin 10 Dönüşüm Artırma Taktiği',
    excerpt: 'Sepet terk oranını düşürmekten ürün sayfası optimizasyonuna kadar test edilmiş yöntemler.',
    date: '5 Nisan 2026',
    readTime: '8 dk',
  },
  {
    slug: 'whatsapp-business-api',
    cat: 'AI & Otomasyon',
    thumb: 7,
    title: 'WhatsApp Business API ile Müşteri İletişimini Otomatikleştirin',
    excerpt: 'Randevu hatırlatmaları, sipariş bildirimleri ve AI destekli otomatik yanıtlar için kapsamlı rehber.',
    date: '1 Nisan 2026',
    readTime: '4 dk',
  },
  {
    slug: 'kurumsal-web-sitesi-8-soru',
    cat: 'Web Tasarımı',
    thumb: 2,
    title: 'Kurumsal Web Sitesi Yaptırırken Sormanız Gereken 8 Soru',
    excerpt: 'Ajans seçiminden teknik detaylara, proje başlamadan önce netleştirmeniz gereken sorular.',
    date: '25 Mart 2026',
    readTime: '5 dk',
  },
  {
    slug: 'lead-toplama-formlari',
    cat: 'SEO',
    thumb: 6,
    title: 'Lead Toplama Formları Neden Çalışmaz ve Nasıl Düzeltirsiniz?',
    excerpt: 'Form tasarımı, CTA metinleri ve A/B testi ile lead formlarınızın dönüşümünü 3 katına çıkarın.',
    date: '18 Mart 2026',
    readTime: '6 dk',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// Blog & İçerikler</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Dijitalde <span className="gradient-text">bilgi</span> paylaşıyoruz
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Web tasarımı, AI otomasyon ve dijital büyüme üzerine içerikler. İşletmenizi güçlendiren bilgiler.
          </p>
        </div>
      </div>

      <section className="py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-8">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-14">
            {cats.map((cat, i) => (
              <span key={cat}
                className={`px-4 py-2 rounded-full text-[0.8rem] font-semibold border-[1.5px]
                  ${i === 0
                    ? 'bg-accent border-accent text-white'
                    : 'bg-cream border-black/[0.09] text-ink/50'}`}>
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <Link href="/blog/web-tasarimi-trendleri-2026"
            className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] rounded-[18px] overflow-hidden
              border-[1.5px] border-black/[0.09] mb-8 no-underline text-inherit
              transition-all duration-300 hover:shadow-[0_24px_60px_rgba(255,82,27,0.1)]
              hover:border-[rgba(255,82,27,0.25)] group">
            <div className="relative min-h-[280px] md:min-h-[320px] flex items-center justify-center"
              style={{ background: thumbs[1] }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <svg viewBox="0 0 24 24" fill="none" width="64" height="64">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                  <path d="M3 9h18M9 21V9" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="absolute top-4 left-4 z-10 text-[0.68rem] font-bold uppercase tracking-[0.08em]
                text-white px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,82,27,0.9)' }}>
                Web Tasarımı
              </span>
            </div>
            <div className="p-10 flex flex-col justify-center bg-cream">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-accent mb-3 block">
                Öne Çıkan Yazı
              </span>
              <h2 className="text-[1.6rem] font-black leading-[1.3] text-ink mb-3
                group-hover:text-accent transition-colors">
                2026&apos;da Web Tasarımı: Trendler ve İşletmeniz İçin Anlamı
              </h2>
              <p className="text-ink/50 leading-[1.75] mb-6">
                Glassmorphism, AI destekli tasarım araçları, micro-animasyonlar ve daha fazlası.
                Bu yıl öne çıkan tasarım trendlerini ve dönüşüm oranlarına etkisini inceliyoruz.
              </p>
              <div className="flex items-center gap-4 text-[0.75rem] text-ink/40 mb-5">
                <span>20 Nisan 2026</span>
                <span>7 dk okuma</span>
              </div>
              <span className="text-accent font-bold text-[0.82rem]">Okumaya Devam Et →</span>
            </div>
          </Link>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(({ slug, cat, thumb, title, excerpt, date, readTime }) => (
              <Link key={slug} href={`/blog/${slug}`}
                className="group bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] overflow-hidden
                  no-underline text-inherit flex flex-col
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(255,82,27,0.1)] hover:border-[rgba(255,82,27,0.25)]">

                {/* Thumbnail */}
                <div className="relative aspect-[16/9]"
                  style={{ background: thumbs[thumb as keyof typeof thumbs] }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-60">
                    <svg viewBox="0 0 24 24" fill="none" width="48" height="48">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <CatBadge cat={cat} />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3 text-[0.75rem] text-ink/40">
                    <span>{date}</span>
                    <span>{readTime}</span>
                  </div>
                  <h3 className="text-[1rem] font-bold text-ink leading-[1.45] mb-2
                    group-hover:text-accent transition-colors flex-1">
                    {title}
                  </h3>
                  <p className="text-ink/50 text-[0.83rem] leading-[1.65] mb-4">{excerpt}</p>
                  <span className="text-accent font-bold text-[0.82rem]">Oku →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-14">
            {['1', '2', '3', '→'].map((p, i) => (
              <span key={p}
                className={`w-10 h-10 rounded-[10px] border-[1.5px] text-[0.88rem] font-semibold
                  flex items-center justify-center cursor-pointer
                  ${i === 0
                    ? 'bg-accent border-accent text-white'
                    : 'bg-cream border-black/[0.09] text-ink/50'}`}>
                {p}
              </span>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 rounded-[20px] px-14 py-14 flex flex-col md:flex-row items-center
            justify-between gap-8 flex-wrap"
            style={{ background: '#0D0B1E' }}>
            <div>
              <h3 className="text-white font-black text-[1.4rem] mb-1">Yeni yazıları kaçırmayın</h3>
              <p className="text-[0.9rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>Haftada bir, işinize yarayacak içerikler. Spam yok.</p>
            </div>
            <form className="flex gap-2 flex-wrap" action="#">
              <input type="email" placeholder="E-posta adresiniz"
                className="px-5 py-3 rounded-full text-[0.88rem] text-white w-[240px] outline-none
                  transition-colors focus:border-accent"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                }} />
              <button type="submit"
                className="bg-accent text-white px-6 py-3 rounded-full font-bold text-[0.88rem]
                  hover:opacity-90 transition-opacity cursor-pointer">
                Abone Ol →
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

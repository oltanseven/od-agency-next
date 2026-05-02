import type { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://oder.agency'
  const posts = await getPublishedPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/paketler`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/e-ticaret`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ai-otomasyon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/marka-kimligi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/landing-page`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/web-tasarim-antalya`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/gizlilik`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/kullanim-kosullari`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.published_at ? new Date(post.published_at) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}

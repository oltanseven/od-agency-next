import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://odagency.com'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/paketler`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/web-tasarim-antalya`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gizlilik`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/kullanim-kosullari`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}

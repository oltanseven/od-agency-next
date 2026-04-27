import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim | Projenizi Birlikte Değerlendirelim | Oder Agency',
  description: 'Web tasarım, e-ticaret veya AI otomasyon projeniz için bizimle iletişime geçin. Pzt-Cmt 09:00-18:00. Antalya merkezli, Türkiye geneli hizmet.',
  keywords: ['iletişim', 'teklif al', 'web tasarım iletişim', 'Oder Agency iletişim', 'proje başlat'],
  alternates: { canonical: 'https://oder.agency/iletisim' },
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return children
}

'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Fiyatlara KDV dahil mi?', a: 'Belirtilen fiyatlar KDV hariçtir. Fatura kesilirken %20 KDV eklenir. Kurumsal faturalarınız için KDV iadesi sürecinizi de destekliyoruz.' },
  { q: 'Ödeme nasıl yapılır?', a: '%50 proje başlangıcında, %50 teslimat ve onayında. Büyük projelerde taksitli ödeme planı da düzenleyebiliriz.' },
  { q: 'Hosting ve domain dahil mi?', a: 'Hosting ve domain paket fiyatına dahil değildir ancak kurulum ve bağlantıyı biz yapıyoruz. Size özel en uygun çözümü birlikte belirleriz.' },
  { q: 'Pakete dahil olmayan özellikler eklenebilir mi?', a: 'Evet. Her proje biraz farklıdır. Paket dışı geliştirmeler için ayrı fiyatlandırma yapılır ve önceden onayınız alınır. Sürpriz fatura gönderme prensibimiz yoktur.' },
  { q: 'Mevcut sitemin yenilenmesi için hangi paketi seçmeliyim?', a: 'Mevcut sitenizin içerik aktarımı dahil olmak üzere Profesyonel veya E-Ticaret paketi uygundur. İletişim formundan projenizi anlatın, size özel fiyat çıkaralım.' },
]

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="flex flex-col gap-3 max-w-[780px]">
      {faqs.map(({ q, a }, i) => (
        <div key={i}
          className="bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-7 py-5
              text-left font-semibold text-[0.95rem] text-ink cursor-pointer
              hover:text-accent transition-colors"
          >
            {q}
            <span className="text-[1.2rem] text-accent shrink-0 transition-transform duration-300 inline-block"
              style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          <div style={{ maxHeight: open === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
            <p className="px-7 pb-5 text-[0.9rem] leading-[1.75] text-ink/50">{a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

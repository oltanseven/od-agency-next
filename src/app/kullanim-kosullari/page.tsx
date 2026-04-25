import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  robots: { index: false },
}

export default function KullanimKosullariPage() {
  return (
    <>
      <div className="pt-36 pb-16 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">Yasal</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ink">Kullanım Koşulları</h1>
          <p className="text-ink/40 text-sm mt-2">Son güncelleme: Nisan 2026</p>
        </div>
      </div>
      <div className="max-w-[760px] mx-auto px-8 py-16">
        {[
          ['Hizmet Kapsamı', 'OD Agency; web tasarımı, e-ticaret, AI otomasyon ve dijital strateji hizmetleri sunar. Her proje ayrı sözleşmeyle belirlenir.'],
          ['Fikri Mülkiyet', 'Üretilen tüm tasarım, kod ve içerik ödeme tamamlanana kadar ajansa aittir. Ödeme sonrası kullanım hakları devredilir. OD Agency tamamlanan projeleri portföyde kullanma hakkını saklı tutar.'],
          ['Ödeme Koşulları', 'Projeler %50 ön ödemeyle başlar. Kalan tutar teslimden önce ödenir. Gecikmeli ödemelerde proje duraklama hakkı saklıdır.'],
          ['Revizyon', 'Her paketteki revizyon hakkı sözleşmede belirtilir. Üzerindeki talepler ayrıca faturalandırılır.'],
          ['Uygulanacak Hukuk', 'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda Antalya mahkemeleri yetkilidir.'],
        ].map(([title, body]) => (
          <div key={title} className="mb-8">
            <h2 className="text-[1.2rem] font-bold text-ink mb-2">{title}</h2>
            <p className="text-ink/50 leading-[1.85] text-[0.95rem]">{body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

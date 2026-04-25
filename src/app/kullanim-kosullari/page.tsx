import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları — OD Agency',
  robots: { index: false },
}

export default function KullanimKosullariPage() {
  return (
    <>
      <div className="pt-36 pb-16 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">Yasal</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ink">Kullanım Koşulları</h1>
          <p className="text-ink/40 text-[0.82rem] mt-2">Son güncelleme: Nisan 2026</p>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-8 py-16">
        <p className="text-ink/50 text-[0.95rem] leading-[1.85] mb-8">
          Bu web sitesini ve OD Agency hizmetlerini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Lütfen bu koşulları dikkatlice okuyunuz.
        </p>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">1. Hizmet Kapsamı</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            OD Agency; web tasarımı, e-ticaret çözümleri, yapay zeka otomasyonu ve dijital strateji hizmetleri sunan bir ajans olarak faaliyet göstermektedir. Sunulan hizmetler, her proje için ayrı bir sözleşme ile belirlenir.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">2. Fikri Mülkiyet</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85] mb-2">
            OD Agency tarafından üretilen tüm tasarım, kod ve içerik; ödeme tamamlanana kadar ajansın mülkiyetindedir. Tam ödeme gerçekleştiğinde proje dosyaları müşteriye teslim edilir ve kullanım hakları devredilir.
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-ink/50 text-[0.95rem] leading-[1.85]">
            <li>Teslimattan önce kaynak dosyalar üçüncü taraflarla paylaşılamaz</li>
            <li>OD Agency, tamamlanan projeleri portföy olarak kullanma hakkını saklı tutar</li>
            <li>Müşteri, ajansın kullandığı üçüncü taraf lisanslı bileşenlere ilişkin koşulları kabul eder</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">3. Ödeme Koşulları</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Projeler genellikle %50 ön ödeme ile başlatılır. Kalan tutar projenin tesliminden önce ödenir. Gecikmeli ödemelerde proje sürecinde duraklama hakkı saklıdır.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">4. Revizyon ve Değişiklikler</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Her paket için belirlenen revizyon hakkı proje sözleşmesinde belirtilir. Bu hakkın üzerindeki değişiklik talepleri ayrıca faturalandırılır.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">5. Sorumluluk Sınırı</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            OD Agency; üçüncü taraf hizmetleri (hosting, domain, ödeme altyapısı vb.) nedeniyle oluşabilecek kesinti ya da kayıplardan sorumlu tutulamaz. Müşteri, kendi altyapı tercihlerine ait riskleri üstlenir.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">6. Sözleşme Feshi</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Müşteri, yazılı bildirimle sözleşmeyi feshedebilir. Bu durumda tamamlanan çalışma oranında ücret talep edilir, ön ödeme iade edilmez.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">7. Uygulanacak Hukuk</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda Antalya mahkemeleri yetkilidir.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">8. İletişim</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Kullanım koşullarına ilişkin sorularınız için{' '}
            <Link href="mailto:merhaba@odagency.com" className="text-accent no-underline hover:underline">merhaba@odagency.com</Link>{' '}
            adresine veya{' '}
            <Link href="tel:+905324652031" className="text-accent no-underline hover:underline">+90 532 465 20 31</Link>{' '}
            numarasına ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </>
  )
}

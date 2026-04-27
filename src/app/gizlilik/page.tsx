import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Oder Agency',
  robots: { index: false },
}

export default function GizlilikPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36 pb-16 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">Yasal</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ink">Gizlilik Politikası</h1>
          <p className="text-ink/40 text-[0.82rem] mt-2">Son güncelleme: Nisan 2026</p>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-5 sm:px-8 py-16">
        <p className="text-ink/50 text-[0.95rem] leading-[1.85] mb-8">
          Oder Agency olarak kişisel verilerinizin güvenliği ve gizliliği bizim için büyük önem taşımaktadır. Bu politika, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda hangi verileri topladığımızı, bu verileri nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.
        </p>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">1. Toplanan Veriler</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85] mb-2">Aşağıdaki kişisel bilgiler toplanabilir:</p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-ink/50 text-[0.95rem] leading-[1.85]">
            <li>Ad ve soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>Şirket adı ve web sitesi</li>
            <li>İletişim formu aracılığıyla iletilen mesajlar</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">2. Verilerin Kullanım Amacı</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85] mb-2">Topladığımız veriler şu amaçlarla kullanılmaktadır:</p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-ink/50 text-[0.95rem] leading-[1.85]">
            <li>Teklif hazırlama ve proje görüşmelerini yürütme</li>
            <li>Hizmetlerimiz hakkında bilgi sağlama</li>
            <li>Müşteri desteği sunma</li>
            <li>Yasal yükümlülükleri yerine getirme</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">3. Verilerin Saklanması</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Kişisel verileriniz, hizmet ilişkimizin devam ettiği süre boyunca ve yasal saklama sürelerince güvenli sistemlerde saklanmaktadır. Gereksiz hale gelen veriler periyodik olarak silinmektedir.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">4. Üçüncü Taraflarla Paylaşım</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Verileriniz; yasal zorunluluk olmadığı sürece, açık onayınız olmadan üçüncü taraflarla paylaşılmamaktadır. Hizmet sunumu için çalıştığımız teknik altyapı sağlayıcıları (örn. Supabase) GDPR uyumlu veri işleme sözleşmeleri kapsamında çalışmaktadır.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">5. Çerezler</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Web sitemiz yalnızca temel işlevsellik için gerekli çerezleri kullanmaktadır. Analitik veya pazarlama çerezleri kullanılmamaktadır.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">6. Haklarınız</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85] mb-2">KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-ink/50 text-[0.95rem] leading-[1.85]">
            <li>Verilerinize erişim talep etme</li>
            <li>Hatalı verilerin düzeltilmesini isteme</li>
            <li>Verilerinizin silinmesini talep etme</li>
            <li>Veri işlemeye itiraz etme</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-[1.3rem] font-bold text-ink mb-3 mt-10">7. İletişim</h2>
          <p className="text-ink/50 text-[0.95rem] leading-[1.85]">
            Gizlilik politikamıza ilişkin sorularınız için{' '}
            <Link href="mailto:merhaba@oder.agency" className="text-accent no-underline hover:underline">merhaba@oder.agency</Link>{' '}
            adresine veya{' '}
            <Link href="tel:+905324652031" className="text-accent no-underline hover:underline">+90 532 465 20 31</Link>{' '}
            numarasına ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </>
  )
}

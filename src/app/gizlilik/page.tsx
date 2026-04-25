import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  robots: { index: false },
}

export default function GizlilikPage() {
  return (
    <>
      <div className="pt-36 pb-16 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">Yasal</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ink">Gizlilik Politikası</h1>
          <p className="text-ink/40 text-sm mt-2">Son güncelleme: Nisan 2026</p>
        </div>
      </div>
      <div className="max-w-[760px] mx-auto px-8 py-16">
        {[
          ['Toplanan Veriler', 'Ad soyad, e-posta, telefon numarası, şirket adı ve iletişim formu aracılığıyla iletilen mesajlar toplanabilir.'],
          ['Kullanım Amacı', 'Veriler; teklif hazırlama, hizmet sunumu, müşteri desteği ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır.'],
          ['Saklama', 'Kişisel verileriniz hizmet ilişkisi süresince ve yasal süreler boyunca güvenli sistemlerde saklanır.'],
          ['Üçüncü Taraflar', 'Yasal zorunluluk olmadığı sürece verileriniz üçüncü taraflarla paylaşılmaz. Teknik altyapı sağlayıcıları GDPR uyumlu çalışmaktadır.'],
          ['Haklarınız', 'KVKK kapsamında verilerinize erişim, düzeltme, silme ve itiraz haklarına sahipsiniz. merhaba@odagency.com adresinden ulaşabilirsiniz.'],
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

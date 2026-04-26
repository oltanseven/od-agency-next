import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 sm:px-8">
      <div className="text-center max-w-[480px]">
        <div className="text-[6rem] font-black leading-none tracking-[-0.05em] text-ink/10 mb-4">404</div>
        <h1 className="text-[1.8rem] font-black text-ink mb-3 tracking-[-0.02em]">
          Sayfa bulunamadı
        </h1>
        <p className="text-ink/50 leading-[1.75] mb-8">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/"
            className="bg-accent text-white px-7 rounded-full font-bold text-[0.9rem]
              no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200 inline-flex items-center"
            style={{ minHeight: '44px' }}>
            Ana Sayfa →
          </Link>
          <Link href="/iletisim"
            className="bg-transparent text-ink px-7 rounded-full font-semibold text-[0.9rem]
              no-underline border border-black/[0.09] hover:border-accent hover:text-accent
              inline-flex items-center"
            style={{ minHeight: '44px' }}>
            İletişim
          </Link>
        </div>
      </div>
    </div>
  )
}

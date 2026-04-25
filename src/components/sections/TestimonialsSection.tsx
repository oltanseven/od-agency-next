const reviews = [
  {
    text: '"OD Agency ile çalışmak inanılmaz bir deneyimdi. Web sitemiz yayına girdikten sonra müşteri talebimiz %180 arttı. Kesinlikle tavsiye ederim."',
    initials: 'AK',
    name: 'Ahmet Kaya',
    role: 'Kurucu — ModaShop',
  },
  {
    text: '"Hukuk büromuz için yaptıkları site tam istediğimiz gibiydi. Profesyonel, hızlı ve iletişimleri mükemmeldi. Süreçte hiç stres yaşamadık."',
    initials: 'SY',
    name: 'Selin Yıldız',
    role: 'Avukat — LexHukuk',
  },
  {
    text: '"Restoran sitemiz açıldıktan sonra online rezervasyonlarımız 3 katına çıktı. Tasarım hem göze hitap ediyor hem de çok kullanışlı."',
    initials: 'MB',
    name: 'Mehmet Boz',
    role: 'İşletme Sahibi — Bella Cucina',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="yorumlar" className="py-28 bg-cream border-t border-black/[0.07]">
      <div className="max-w-[1260px] mx-auto px-8">

        <div className="mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            // Müşterilerimiz
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
            Gerçek <span className="gradient-text">başarı hikayeleri</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map(({ text, initials, name, role }) => (
            <div key={name}
              className="bg-black/[0.025] border border-black/[0.09] rounded-[18px] p-8
                transition-all duration-300 hover:border-accent/30 hover:shadow-[0_12px_36px_rgba(255,82,27,0.1)]">
              <div className="text-[#F59E0B] text-[0.82rem] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-ink/60 text-[0.92rem] leading-[1.75] mb-6">{text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center
                  font-black text-[0.82rem] text-white shrink-0"
                  style={{background:'linear-gradient(135deg,#ff521b,#fc9e4f)'}}>
                  {initials}
                </div>
                <div>
                  <div className="font-bold text-[0.88rem] text-ink">{name}</div>
                  <div className="text-ink/50 text-[0.78rem]">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

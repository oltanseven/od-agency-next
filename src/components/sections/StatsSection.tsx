const stats = [
  { val: '50+',    label: 'Tamamlanan Proje' },
  { val: '98%',    label: 'Müşteri Memnuniyeti' },
  { val: '14 gün', label: 'Ortalama Teslimat' },
  { val: '3x',     label: 'Dönüşüm Artışı' },
]

export default function StatsSection() {
  return (
    <div className="bg-accent">
      <div className="max-w-[1260px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ val, label }, i) => (
            <div key={label}
              className={`py-16 px-8 text-center border-white/15 ${i < stats.length - 1 ? 'border-r' : ''}`}>
              <div className="text-[3rem] font-black tracking-tight text-white leading-none mb-1">{val}</div>
              <div className="text-white/70 text-[0.88rem]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

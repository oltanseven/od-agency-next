const stats = [
  { val: '100',    label: 'Performance Score' },
  { val: '14 gün', label: 'Memnuniyet Garantisi' },
  { val: '5 gün',  label: 'En Hızlı Teslimat' },
  { val: 'Next.js', label: 'Premium Teknoloji' },
]

export default function StatsSection() {
  return (
    <div className="bg-accent pb-10 sm:pb-16">
      <div className="max-w-[1260px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ val, label }, i) => (
            <div key={label}
              className={`py-8 sm:py-16 px-4 sm:px-8 text-center border-white/15 ${i < stats.length - 1 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''}`}>
              <div className="text-[1.3rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[3rem] font-black tracking-tight text-white leading-none mb-1">{val}</div>
              <div className="text-white/70 text-[0.68rem] sm:text-[0.75rem] md:text-[0.88rem]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

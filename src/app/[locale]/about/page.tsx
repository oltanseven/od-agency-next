import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { notFound } from 'next/navigation'

type PrincipleItem = { title: string; desc: string }
type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) return {}
  return {
    title: locale === 'en' ? 'About' : 'Hakkımızda',
    description: locale === 'en'
      ? 'Built by operators, for operators. Meet the team behind Oder Agency.'
      : 'Operatörler tarafından, operatörler için kuruldu. Oder Agency ekibini tanıyın.',
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()
  const dict = await getDictionary(locale as Locale)
  const about = dict.about as Record<string, unknown>
  const principles = about.principles as { title: string; items: PrincipleItem[] }
  const prefix = locale === 'en' ? '' : '/tr'

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-cream">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 text-center">
          <span className="text-accent text-[0.8rem] font-semibold uppercase tracking-wider">{about.eyebrow as string}</span>
          <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black text-ink tracking-[-0.03em] mt-3 mb-6">
            {about.headline as string}
          </h1>
          <p className="text-ink/50 text-[1.05rem] leading-[1.85] mb-4 max-w-[640px] mx-auto">
            {about.story as string}
          </p>
          <p className="text-ink/50 text-[1.05rem] leading-[1.85] max-w-[640px] mx-auto">
            {about.story2 as string}
          </p>
        </div>
      </div>

      {/* Principles */}
      <section className="py-24 bg-cream-soft">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <h2 className="text-[1.8rem] font-black text-ink tracking-[-0.02em] mb-12 text-center">{principles.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.items.map((item, i) => (
              <div key={i} className="od-card">
                <h3 className="text-[1.05rem] font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-ink/45 text-[0.88rem] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
              {locale === 'en' ? 'Team' : 'Ekip'}
            </span>
            <h2 className="text-[1.8rem] font-black text-ink tracking-[-0.02em] mb-4">
              {locale === 'en' ? 'The people behind the systems' : 'Sistemlerin arkasındaki insanlar'}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
            {([
              { name: 'Oltan Seven', role: locale === 'en' ? 'Co-Founder & Developer' : 'Kurucu Ortak & Geliştirici', img: '/team/oltan-seven.jpg' },
              { name: 'Kerim Embel', role: locale === 'en' ? 'Solution Architect' : 'Çözüm Mimarı', img: '/team/kerim-embel.jpg' },
              { name: 'Tutku Muriz', role: locale === 'en' ? 'R&D Specialist' : 'Ar-Ge Uzmanı', img: '/team/tutku-muriz.jpg' },
              { name: locale === 'en' ? 'Coming Soon' : 'Yakında', role: locale === 'en' ? 'Operations Lead' : 'Operasyon Lideri', img: null },
            ]).map((member, i) => (
              <div key={i} className={`od-card !p-0 overflow-hidden ${!member.img ? '!border-dashed !border-ink/10' : ''}`}>
                {member.img ? (
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image src={member.img} alt={member.name} fill className="object-cover" style={{ objectPosition: 'center 30%' }} />
                  </div>
                ) : (
                  <div className="aspect-[3/4] flex items-center justify-center">
                    <span className="text-[2rem] font-black text-ink/10">?</span>
                  </div>
                )}
                <div className="p-5 text-center">
                  <h3 className={`text-[1rem] font-bold mb-1 ${member.img ? 'text-ink' : 'text-ink/25'}`}>{member.name}</h3>
                  <p className={`text-[0.82rem] ${member.img ? 'text-ink/50' : 'text-ink/15'}`}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-[600px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-[1.6rem] font-black text-ink mb-4">
            {locale === 'en' ? 'Ready to work together?' : 'Birlikte çalışmaya hazır mısınız?'}
          </h2>
          <Link
            href={`${prefix}/apply`}
            className="bg-accent text-white px-8 rounded-full font-bold text-[0.95rem]
              no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.25)]
              transition-all duration-200 inline-flex items-center"
            style={{ minHeight: '52px' }}
          >
            {locale === 'en' ? 'Book a Strategy Call' : 'Strateji Görüşmesi'} →
          </Link>
        </div>
      </section>
    </>
  )
}

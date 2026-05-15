import { redirect } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'

type Props = { params: Promise<{ locale: string }> }

export default async function BlogLocalePage({ params }: Props) {
  const { locale } = await params
  // Blog is still on legacy route — redirect there
  // Only /tr/blog reaches here (middleware skips /blog)
  if (locale === 'tr') {
    redirect('/blog')
  }
  // /en/blog comes from middleware rewrite of /blog... but we skip /blog in middleware
  // So this should only fire for /en/blog direct access or /tr/blog
  redirect('/blog')
}

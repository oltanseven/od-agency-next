import { NextRequest, NextResponse } from 'next/server'

const LOCALE_PREFIX = /^\/(en|tr)(\/|$)/

// Legacy pages that should NOT be rewritten to locale routes
const LEGACY_PAGES = [
  '/blog', '/admin', '/gizlilik', '/kullanim-kosullari',
  '/paketler', '/landing-page', '/e-ticaret', '/ai-otomasyon',
  '/marka-kimligi', '/web-tasarim-antalya', '/hakkimizda', '/iletisim',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Already has locale prefix → pass through
  if (LOCALE_PREFIX.test(pathname)) {
    return NextResponse.next()
  }

  // Legacy pages → pass through (they have their own routes)
  if (LEGACY_PAGES.some(p => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next()
  }

  // Root or new pages without locale → rewrite to /en/...
  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}

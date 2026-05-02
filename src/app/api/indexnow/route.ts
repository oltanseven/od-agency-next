import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = '49c8d01493b715773280a173359364a2'
const HOST = 'https://oder.agency'

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { urls } = await req.json() as { urls?: string[] }
  if (!urls || urls.length === 0) {
    return NextResponse.json({ error: 'No URLs provided' }, { status: 400 })
  }

  const body = {
    host: 'oder.agency',
    key: INDEXNOW_KEY,
    keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls.map(u => u.startsWith('http') ? u : `${HOST}${u}`),
  }

  const results = await Promise.allSettled([
    fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
    fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
  ])

  return NextResponse.json({
    submitted: urls.length,
    indexnow: results[0].status,
    bing: results[1].status,
  })
}

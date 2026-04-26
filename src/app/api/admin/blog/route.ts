import { NextRequest, NextResponse } from 'next/server'
import { getAllPostsAdmin, publishPost, unpublishPost } from '@/lib/supabase'

const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'odagency2026'

function checkAuth(req: NextRequest) {
  const pass = req.headers.get('x-admin-password')
  return pass === ADMIN_PASS
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const posts = await getAllPostsAdmin()
  return NextResponse.json(posts)
}

export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, action } = await req.json()
  const ok = action === 'publish' ? await publishPost(id) : await unpublishPost(id)
  return NextResponse.json({ ok })
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const SUPABASE_SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  thumb: number
  read_time: string
  published: boolean
  published_at: string | null
  created_at: string
}

async function query(path: string, options?: RequestInit & { admin?: boolean }) {
  const key = options?.admin ? SUPABASE_SERVICE : SUPABASE_ANON
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      ...options?.headers,
    },
    next: { revalidate: 60 },
  })
  if (!res.ok) return null
  const text = await res.text()
  return text ? JSON.parse(text) : null
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  return (await query('blog_posts?published=eq.true&order=published_at.desc')) || []
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await query(`blog_posts?slug=eq.${slug}&published=eq.true&limit=1`)
  return posts?.[0] || null
}

export async function getAllPostsAdmin(): Promise<BlogPost[]> {
  return (await query('blog_posts?order=created_at.desc', { admin: true })) || []
}

export async function publishPost(id: number): Promise<boolean> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_SERVICE,
      'Authorization': `Bearer ${SUPABASE_SERVICE}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({ published: true, published_at: new Date().toISOString() }),
  })
  return res.ok
}

export async function unpublishPost(id: number): Promise<boolean> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_SERVICE,
      'Authorization': `Bearer ${SUPABASE_SERVICE}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({ published: false, published_at: null }),
  })
  return res.ok
}

export type { BlogPost }

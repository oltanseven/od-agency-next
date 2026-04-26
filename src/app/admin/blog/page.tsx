'use client'

import { useState, useEffect, useCallback } from 'react'

type Post = {
  id: number; slug: string; title: string; category: string
  published: boolean; published_at: string | null; created_at: string
}

export default function AdminBlogPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = useCallback(async (pass: string) => {
    const res = await fetch('/api/admin/blog', { headers: { 'x-admin-password': pass } })
    if (res.ok) {
      setPosts(await res.json())
      setAuthed(true)
    }
  }, [])

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_pass')
    if (saved) { setPassword(saved); fetchPosts(saved) }
  }, [fetchPosts])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    await fetchPosts(password)
    if (!authed) sessionStorage.setItem('admin_pass', password)
  }

  async function togglePublish(id: number, action: 'publish' | 'unpublish') {
    setLoading(true)
    await fetch('/api/admin/blog', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ id, action }),
    })
    await fetchPosts(password)
    setLoading(false)
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 bg-cream">
        <form onSubmit={handleLogin} className="bg-white rounded-2xl p-10 shadow-lg border border-black/[0.09] w-full max-w-[380px]">
          <h1 className="text-xl font-black text-ink mb-6">Blog Admin</h1>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Admin şifre"
            className="od-input mb-4"
          />
          <button type="submit"
            className="w-full bg-accent text-white rounded-full font-bold text-[0.9rem] cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200"
            style={{ minHeight: '44px' }}>
            Giriş Yap
          </button>
        </form>
      </div>
    )
  }

  const drafts = posts.filter(p => !p.published)
  const published = posts.filter(p => p.published)

  return (
    <div className="min-h-screen bg-cream pt-28 pb-16 px-8">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-2xl font-black text-ink mb-2">Blog Yönetimi</h1>
        <p className="text-ink/50 text-sm mb-10">Yazıları buradan yayınlayabilir veya geri çekebilirsiniz.</p>

        {/* Taslaklar */}
        {drafts.length > 0 && (
          <>
            <h2 className="text-sm font-bold uppercase tracking-widest text-ink/40 mb-4">
              Taslaklar ({drafts.length})
            </h2>
            <div className="flex flex-col gap-3 mb-12">
              {drafts.map(post => (
                <div key={post.id}
                  className="bg-white border border-black/[0.09] rounded-xl p-5 flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-[0.95rem] font-bold text-ink mt-1.5 truncate">{post.title}</h3>
                    <p className="text-ink/40 text-xs mt-1">{post.slug}</p>
                  </div>
                  <button
                    onClick={() => togglePublish(post.id, 'publish')}
                    disabled={loading}
                    className="shrink-0 bg-[#22c55e] text-white px-5 py-2.5 rounded-full text-sm font-bold
                      hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:translate-y-0">
                    Yayınla
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Yayınlananlar */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink/40 mb-4">
          Yayında ({published.length})
        </h2>
        {published.length === 0 ? (
          <p className="text-ink/40 text-sm">Henüz yayınlanmış yazı yok.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {published.map(post => (
              <div key={post.id}
                className="bg-white border border-black/[0.09] rounded-xl p-5 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider text-ink/40">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-[0.95rem] font-bold text-ink mt-1.5 truncate">{post.title}</h3>
                  <p className="text-ink/40 text-xs mt-1">
                    {post.published_at ? new Date(post.published_at).toLocaleDateString('tr-TR') : ''}
                  </p>
                </div>
                <button
                  onClick={() => togglePublish(post.id, 'unpublish')}
                  disabled={loading}
                  className="shrink-0 bg-ink/10 text-ink/60 px-5 py-2.5 rounded-full text-sm font-semibold
                    hover:bg-red-50 hover:text-red-500 cursor-pointer disabled:opacity-50">
                  Geri Çek
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const email = new FormData(e.currentTarget).get('email') as string
    if (!email) return setStatus('error')

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email, created_at: new Date().toISOString() }),
      })
      if (res.ok) {
        // Hoşgeldin e-postası gönder
        fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
      }
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-[0.9rem] font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>
        Abone oldunuz! Teşekkürler.
      </p>
    )
  }

  return (
    <form className="flex gap-2 flex-wrap" onSubmit={handleSubmit}>
      <input type="email" name="email" required placeholder="E-posta adresiniz"
        className="px-5 rounded-full text-[0.88rem] text-white w-full sm:w-[240px]
          outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(255,82,27,0.2)]"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1.5px solid rgba(255,255,255,0.15)',
          minHeight: '44px',
        }} />
      <button type="submit" disabled={status === 'loading'}
        className="bg-accent text-white px-6 py-3 rounded-full font-bold text-[0.88rem]
          hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none">
        {status === 'loading' ? 'Gönderiliyor...' : 'Abone Ol →'}
      </button>
      {status === 'error' && (
        <p className="w-full text-[0.78rem] mt-1" style={{ color: '#ef4444' }}>Bir hata oluştu, tekrar deneyin.</p>
      )}
    </form>
  )
}

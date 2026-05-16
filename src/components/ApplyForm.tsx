'use client'

import { useState } from 'react'

type ApplyDict = {
  fields: {
    name: string
    email: string
    company: string
    solution: string
    solutionOptions: string[]
    employees: string
    employeeOptions: string[]
    timeline: string
    timelineOptions: string[]
    message: string
    submit: string
    sending: string
  }
  success: { title: string; message: string }
}

export default function ApplyForm({ dict }: { dict: Record<string, unknown> }) {
  const fields = (dict.fields as ApplyDict['fields'])
  const success = (dict.success as ApplyDict['success'])
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [loadedAt] = useState(Date.now())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (Date.now() - loadedAt < 3000) return

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot check
    if (data.get('website')) return

    setSending(true)
    try {
      await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company'),
          solution: data.get('solution'),
          employees: data.get('employees'),
          timeline: data.get('timeline'),
          message: data.get('message'),
        }),
      })
      setSent(true)
    } catch {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="bg-cream-soft border border-[#22c55e]/20 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 className="text-[1.3rem] font-bold text-ink mb-2">{success.title}</h2>
        <p className="text-ink/50 text-[0.92rem]">{success.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[0.8rem] font-semibold text-ink/60 mb-1.5 block">{fields.name}</label>
          <input name="name" required minLength={2} className="od-input" />
        </div>
        <div>
          <label className="text-[0.8rem] font-semibold text-ink/60 mb-1.5 block">{fields.email}</label>
          <input name="email" type="email" required className="od-input" />
        </div>
      </div>

      <div>
        <label className="text-[0.8rem] font-semibold text-ink/60 mb-1.5 block">{fields.company}</label>
        <input name="company" required className="od-input" />
      </div>

      <div>
        <label className="text-[0.8rem] font-semibold text-ink/60 mb-1.5 block">{fields.solution}</label>
        <select name="solution" required className="od-input">
          <option value="">—</option>
          {fields.solutionOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[0.8rem] font-semibold text-ink/60 mb-1.5 block">{fields.employees}</label>
          <select name="employees" required className="od-input">
            <option value="">—</option>
            {fields.employeeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[0.8rem] font-semibold text-ink/60 mb-1.5 block">{fields.timeline}</label>
          <select name="timeline" required className="od-input">
            <option value="">—</option>
            {fields.timelineOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-[0.8rem] font-semibold text-ink/60 mb-1.5 block">{fields.message}</label>
        <textarea name="message" required minLength={10} rows={4} className="od-input resize-y" />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-accent text-white rounded-full font-bold text-[0.95rem]
          hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.25)]
          transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        style={{ minHeight: '52px' }}
      >
        {sending ? fields.sending : fields.submit}
      </button>
    </form>
  )
}

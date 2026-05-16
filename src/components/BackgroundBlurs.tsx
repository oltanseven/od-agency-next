'use client'

import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export default function BackgroundBlurs() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const dark = mounted && theme === 'dark'

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Top right */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full animate-[floatA_20s_ease-in-out_infinite]"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(255,82,27,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,82,27,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Center left */}
      <div
        className="absolute top-[30%] -left-[15%] w-[500px] h-[500px] rounded-full animate-[floatB_25s_ease-in-out_infinite]"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(255,107,61,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(232,136,26,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Right middle */}
      <div
        className="absolute top-[55%] right-[5%] w-[450px] h-[450px] rounded-full animate-[floatC_22s_ease-in-out_infinite]"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(255,82,27,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,82,27,0.04) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Bottom left */}
      <div
        className="absolute -bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full animate-[floatA_28s_ease-in-out_infinite]"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(232,136,26,0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,82,27,0.03) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  )
}

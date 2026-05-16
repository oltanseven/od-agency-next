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
      {/* Top right - large warm blob */}
      <div
        className="absolute -top-[200px] right-[-100px] w-[900px] h-[900px] rounded-full animate-[floatA_20s_ease-in-out_infinite]"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(255,82,27,0.15) 0%, rgba(255,82,27,0.05) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,82,27,0.12) 0%, rgba(255,82,27,0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Left middle - coral glow */}
      <div
        className="absolute top-[35%] -left-[200px] w-[800px] h-[800px] rounded-full animate-[floatB_25s_ease-in-out_infinite]"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(232,136,26,0.12) 0%, rgba(232,136,26,0.04) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(232,136,26,0.08) 0%, rgba(232,136,26,0.03) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Bottom right - accent */}
      <div
        className="absolute bottom-[10%] right-[-50px] w-[700px] h-[700px] rounded-full animate-[floatC_22s_ease-in-out_infinite]"
        style={{
          background: dark
            ? 'radial-gradient(circle, rgba(255,82,27,0.12) 0%, rgba(255,82,27,0.04) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,82,27,0.08) 0%, rgba(255,82,27,0.02) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}

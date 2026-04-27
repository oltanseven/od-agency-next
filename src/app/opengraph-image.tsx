import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'OD Agency - Web Tasarım & AI Otomasyon'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0D0B1E 0%, #1a1535 50%, #0D0B1E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,82,27,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: '#FFFEF8',
            letterSpacing: '-0.05em',
            marginBottom: 24,
            display: 'flex',
          }}
        >
          OD
          <span style={{ color: '#ff521b' }}>.</span>
          Agency
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: '#FFFEF8',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          Web Tasarım & AI Otomasyon
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: 'rgba(255,254,248,0.5)',
            lineHeight: 1.6,
            maxWidth: 700,
            display: 'flex',
          }}
        >
          Dönüşüm odaklı web sitesi, e-ticaret ve yapay zeka otomasyon çözümleri. Antalya merkezli, Türkiye geneli.
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
          {['Web Tasarım', 'E-Ticaret', 'AI Otomasyon', 'Landing Page'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(255,82,27,0.15)',
                border: '1px solid rgba(255,82,27,0.3)',
                borderRadius: 50,
                padding: '8px 20px',
                fontSize: 16,
                fontWeight: 600,
                color: '#ff521b',
                display: 'flex',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #ff521b, #e8881a, #ff521b)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}

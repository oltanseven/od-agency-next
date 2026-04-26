/**
 * SVG dalga ayırıcı — section geçişlerinde organik akış sağlar.
 *
 * @param topColor    — üstteki section'ın arka plan rengi
 * @param bottomColor — alttaki section'ın arka plan rengi
 * @param flip        — dalgayı ters çevir (farklı geçişler için varyasyon)
 * @param variant     — dalga şekli: 'wave' | 'slope' | 'curve'
 * @param className   — ek CSS sınıfları
 */

type Props = {
  topColor: string
  bottomColor: string
  flip?: boolean
  variant?: 'wave' | 'slope' | 'curve'
  className?: string
}

export default function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  variant = 'wave',
  className = '',
}: Props) {
  const paths: Record<string, string> = {
    wave: 'M0,0 L0,40 Q120,100 240,40 Q360,-20 480,40 Q600,100 720,40 Q840,-20 960,40 Q1080,100 1200,40 Q1320,-20 1440,40 L1440,0 Z',
    slope: 'M0,0 L0,60 Q360,100 720,50 Q1080,0 1440,30 L1440,0 Z',
    curve: 'M0,0 L0,30 C240,90 480,90 720,30 C960,-30 1200,-30 1440,30 L1440,0 Z',
  }

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{
        marginTop: '-1px',
        marginBottom: '-1px',
        background: bottomColor,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: 'clamp(40px, 6vw, 80px)' }}
      >
        <path d={paths[variant]} fill={topColor} />
      </svg>
    </div>
  )
}

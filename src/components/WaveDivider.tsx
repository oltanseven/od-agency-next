type Props = {
  topColor: string
  bottomColor: string
  variant?: 'soft' | 'wide' | 'tilt'
  flip?: boolean
}

export default function WaveDivider({
  topColor,
  bottomColor,
  variant = 'soft',
  flip = false,
}: Props) {
  const paths: Record<string, string> = {
    soft: 'M0,0 L0,100 C360,200 1080,200 1440,100 L1440,0 Z',
    wide: 'M0,0 L0,130 C300,180 600,150 900,100 C1100,60 1300,50 1440,70 L1440,0 Z',
    tilt: 'M0,0 L0,50 C480,110 960,110 1440,50 L1440,0 Z',
  }

  return (
    <div
      className="relative w-full leading-[0]"
      style={{
        marginTop: 'clamp(-100px, -10vw, -70px)',
        marginBottom: '-2px',
        background: bottomColor,
        transform: flip ? 'scaleX(-1)' : undefined,
        position: 'relative',
        zIndex: 2,
      }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: 'clamp(80px, 10vw, 160px)' }}
      >
        <path d={paths[variant]} fill={topColor} />
      </svg>
    </div>
  )
}

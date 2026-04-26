/**
 * SVG dalga ayırıcı — section geçişlerinde organik akış.
 * Dalga, önceki section'ın içinden başlayıp sonraki section'a akar.
 *
 * @param topColor    — üstteki section'ın arka plan rengi
 * @param bottomColor — alttaki section'ın arka plan rengi
 * @param variant     — 'soft' (tek geniş dalga) | 'wide' (asimetrik eğim) | 'tilt' (hafif açılı)
 * @param flip        — yatayda ters çevir
 */

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
  /* Tek yumuşak dalga — keskin nokta yok, tamamen oval */
  const paths: Record<string, string> = {
    /* Geniş tek dalga — sayfanın ortasında yumuşak bir tepe */
    soft: 'M0,0 L0,50 C360,110 1080,110 1440,50 L1440,0 Z',
    /* Asimetrik geniş eğim — soldan sağa hafif kayma */
    wide: 'M0,0 L0,70 C300,100 600,90 900,60 C1100,40 1300,30 1440,40 L1440,0 Z',
    /* Hafif açılı eğim — minimal, yakın renkler için */
    tilt: 'M0,0 L0,30 C480,70 960,70 1440,30 L1440,0 Z',
  }

  return (
    <div
      className="relative w-full overflow-hidden leading-[0]"
      style={{
        /* Negatif margin ile önceki section'ın içine girer */
        marginTop: '-2px',
        marginBottom: '-2px',
        background: bottomColor,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: 'clamp(50px, 7vw, 90px)' }}
      >
        <path d={paths[variant]} fill={topColor} />
      </svg>
    </div>
  )
}

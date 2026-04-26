/**
 * SVG dalga ayırıcı — önceki section'ın içinden başlayıp sonrakine akar.
 * Negatif margin ile üstteki section'a biner → "devam ediyor" hissi.
 *
 * @param topColor    — üstteki section rengi (dalganın fill'i)
 * @param bottomColor — alttaki section rengi (dalganın arka planı)
 * @param variant     — 'soft' | 'wide' | 'tilt'
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
  const paths: Record<string, string> = {
    /* Geniş tek dalga — ortada yumuşak oval tepe */
    soft: 'M0,0 L0,80 C360,160 1080,160 1440,80 L1440,0 Z',
    /* Asimetrik eğim — soldan sağa organik kayma */
    wide: 'M0,0 L0,100 C300,140 600,120 900,80 C1100,50 1300,40 1440,60 L1440,0 Z',
    /* Minimal eğim — yakın renkler için ince geçiş */
    tilt: 'M0,0 L0,40 C480,90 960,90 1440,40 L1440,0 Z',
  }

  return (
    <div
      className="relative w-full leading-[0]"
      style={{
        /* Üstteki section'ın içine girer — dalga oradan başlıyor gibi */
        marginTop: 'clamp(-60px, -6vw, -40px)',
        /* Alttaki section'a da hafif biner — boşluk kalmasın */
        marginBottom: '-2px',
        background: bottomColor,
        transform: flip ? 'scaleX(-1)' : undefined,
        position: 'relative',
        zIndex: 2,
      }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: 'clamp(60px, 8vw, 120px)' }}
      >
        <path d={paths[variant]} fill={topColor} />
      </svg>
    </div>
  )
}

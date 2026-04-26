'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  pulseSpeed: number
  pulsePhase: number
  color: 'accent' | 'coral' | 'white'
}

const COLORS = {
  accent: { r: 255, g: 82, b: 27 },
  coral: { r: 232, g: 136, b: 26 },
  white: { r: 255, g: 200, b: 150 },
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let w = 0
    let h = 0
    let nodes: Node[] = []
    let breathPhase = 0
    let time = 0
    let isVisible = true
    let lastFrame = 0

    const isMobile = window.innerWidth < 768
    const isSmall = window.innerWidth < 400
    const nodeCount = isSmall ? 35 : isMobile ? 50 : 100
    const connectionDist = isMobile ? 130 : 170
    const connectionDistSq = connectionDist * connectionDist
    const targetInterval = 1000 / 30 // 30fps

    // IntersectionObserver: görünmediğinde durdur
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio, 2)
      w = parent.clientWidth
      h = parent.clientHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = w + 'px'
      canvas!.style.height = h + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const padX = isSmall ? 15 : isMobile ? 25 : 60
    const padY = isSmall ? 30 : isMobile ? 40 : 80

    function createNodes() {
      nodes = []
      const colorKeys: Node['color'][] = ['accent', 'coral', 'white']
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: padX + Math.random() * (w - padX * 2),
          y: padY + Math.random() * (h - padY * 2),
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0,
          radius: 1.5 + Math.random() * 2.5,
          opacity: 0.4 + Math.random() * 0.6,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          pulsePhase: Math.random() * Math.PI * 2,
          color: colorKeys[Math.floor(Math.random() * colorKeys.length)],
        })
      }
    }

    function draw(timestamp: number) {
      animRef.current = requestAnimationFrame(draw)

      // Görünmüyorsa çizme
      if (!isVisible) return

      // 30fps throttle
      const delta = timestamp - lastFrame
      if (delta < targetInterval) return
      lastFrame = timestamp - (delta % targetInterval)

      ctx!.clearRect(0, 0, w, h)
      time += 1
      breathPhase += 0.003

      const breathScale = 1 + Math.sin(breathPhase) * 0.025
      const cx = w / 2
      const cy = h / 2

      ctx!.save()
      ctx!.translate(cx, cy)
      ctx!.scale(breathScale, breathScale)
      ctx!.translate(-cx, -cy)

      // Noktaları güncelle
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < padX || node.x > w - padX) node.vx *= -1
        if (node.y < padY || node.y > h - padY) node.vy *= -1
        node.x = Math.max(padX, Math.min(w - padX, node.x))
        node.y = Math.max(padY, Math.min(h - padY, node.y))
      }

      // Bağlantı çizgileri: distSq ile sqrt'den kaçın
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distSq = dx * dx + dy * dy

          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq)
            const strength = 1 - dist / connectionDist
            const c1 = COLORS[nodes[i].color]
            const c2 = COLORS[nodes[j].color]
            const mr = (c1.r + c2.r) >> 1
            const mg = (c1.g + c2.g) >> 1
            const mb = (c1.b + c2.b) >> 1

            // Tek path ile iki çizgiyi birleştir
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = `rgba(${mr},${mg},${mb},${strength * 0.12})`
            ctx!.lineWidth = 4
            ctx!.stroke()

            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = `rgba(${mr},${mg},${mb},${strength * 0.4})`
            ctx!.lineWidth = 1
            ctx!.stroke()
          }
        }
      }

      // Noktalar
      for (const node of nodes) {
        const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase)
        const glowSize = node.radius * (3.5 + pulse * 1.5)
        const c = COLORS[node.color]
        const nodeOpacity = node.opacity * (0.7 + pulse * 0.3)

        // Dış neon glow
        const gradient = ctx!.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowSize
        )
        gradient.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${nodeOpacity * 0.35})`)
        gradient.addColorStop(0.5, `rgba(${c.r},${c.g},${c.b},${nodeOpacity * 0.1})`)
        gradient.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`)

        ctx!.beginPath()
        ctx!.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx!.fillStyle = gradient
        ctx!.fill()

        // Orta glow
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, node.radius * 1.8, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${c.r},${c.g},${c.b},${nodeOpacity * 0.5})`
        ctx!.fill()

        // İç çekirdek
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, node.radius * 0.8, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255,255,255,${nodeOpacity * 0.7})`
        ctx!.fill()
      }

      ctx!.restore()
    }

    resize()
    createNodes()
    animRef.current = requestAnimationFrame(draw)

    const handleResize = () => { resize(); createNodes() }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
      aria-hidden
    />
  )
}

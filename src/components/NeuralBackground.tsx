'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Reduced motion kontrolü
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let w = 0
    let h = 0
    let nodes: Node[] = []
    let breathPhase = 0

    // Mobilde daha az nokta
    const isMobile = window.innerWidth < 768
    const nodeCount = isMobile ? 30 : 55

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

    function createNodes() {
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: 1.5 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.5,
        })
      }
    }

    const connectionDist = isMobile ? 120 : 160

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      // Nefes efekti — yavaş zoom
      breathPhase += 0.003
      const breathScale = 1 + Math.sin(breathPhase) * 0.02
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

        // Sınırlardan yumuşak sekme
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1

        // Sınır içinde tut
        node.x = Math.max(0, Math.min(w, node.x))
        node.y = Math.max(0, Math.min(h, node.y))
      }

      // Bağlantı çizgileri (sinapslar)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDist) {
            const lineOpacity = (1 - dist / connectionDist) * 0.25
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = `rgba(255, 82, 27, ${lineOpacity})`
            ctx!.lineWidth = 0.8
            ctx!.stroke()
          }
        }
      }

      // Noktalar (nöronlar)
      for (const node of nodes) {
        // Dış glow
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 82, 27, ${node.opacity * 0.08})`
        ctx!.fill()

        // İç nokta
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 82, 27, ${node.opacity * 0.5})`
        ctx!.fill()
      }

      ctx!.restore()

      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    createNodes()
    draw()

    window.addEventListener('resize', () => {
      resize()
      createNodes()
    })

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden
    />
  )
}

import { useEffect, useRef } from 'react'

export function GoldenSpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const size = 800
    canvas.width = size
    canvas.height = size

    // Golden ratio
    const phi = (1 + Math.sqrt(5)) / 2

    // Spiral parameters
    let angle = 0
    let shimmerOffset = 0
    const maxRadius = size * 0.4
    const growthFactor = 0.15
    const rotationSpeed = 0.02

    function createShimmerGradient(x1: number, y1: number, x2: number, y2: number, depth: number = 0) {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      const shimmerPos = (Math.sin(shimmerOffset + depth) + 1) / 2
      const opacity = Math.min(1, Math.max(0.3, 1 - depth / 10))

      gradient.addColorStop(Math.max(0, shimmerPos - 0.2), `rgba(178, 231, 27, ${opacity * 0.2})`)
      gradient.addColorStop(shimmerPos, `rgba(178, 231, 27, ${opacity})`)
      gradient.addColorStop(Math.min(1, shimmerPos + 0.2), `rgba(178, 231, 27, ${opacity * 0.2})`)
      
      return gradient
    }

    function drawSpiral() {
      ctx.clearRect(0, 0, size, size)

      // Center point
      const centerX = size / 2
      const centerY = size / 2

      // Draw multiple spiral segments
      for (let i = 0; i < 50; i++) {
        const t = i * 0.1
        const prevT = (i - 1) * 0.1

        // Calculate current point
        const radius = Math.pow(phi, t * growthFactor) * 5
        const x = centerX + radius * Math.cos(t + angle)
        const y = centerY + radius * Math.sin(t + angle)

        // Calculate previous point
        const prevRadius = Math.pow(phi, prevT * growthFactor) * 5
        const prevX = centerX + prevRadius * Math.cos(prevT + angle)
        const prevY = centerY + prevRadius * Math.sin(prevT + angle)

        // Only draw if within bounds
        if (radius <= maxRadius) {
          ctx.beginPath()
          ctx.strokeStyle = createShimmerGradient(prevX, prevY, x, y, t)
          ctx.lineWidth = 4
          ctx.moveTo(prevX, prevY)
          ctx.lineTo(x, y)
          ctx.stroke()
        }
      }

      // Draw golden rectangles
      let size1 = maxRadius
      let size2 = size1 / phi
      let x = centerX - size1 / 2
      let y = centerY - size1 / 2

      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = createShimmerGradient(x, y, x + size1, y + size1, i)
        ctx.lineWidth = 3

        // Draw rectangle
        ctx.beginPath()
        ctx.rect(x, y, size1, size1)
        ctx.stroke()

        // Calculate next rectangle
        const temp = size2
        size2 = size1 - size2
        size1 = temp
        
        // Update position based on which quadrant we're in
        switch (i % 4) {
          case 0: // Move to right
            x += size1
            break
          case 1: // Move up
            y -= size2
            break
          case 2: // Move left
            x -= size2
            break
          case 3: // Move down
            y += size1
            break
        }
      }

      // Update animation
      angle += rotationSpeed
      shimmerOffset += 0.05
      requestAnimationFrame(drawSpiral)
    }

    drawSpiral()

    return () => {
      ctx.clearRect(0, 0, size, size)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
    />
  )
}
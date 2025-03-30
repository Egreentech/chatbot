import { useEffect, useRef } from 'react'

export function RotatingCube() {
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

    // Cube properties
    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ].map(coords => coords.map(c => c * 250)) // Increased scale

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ]

    let angle = 0
    let shimmerOffset = 0
    const speed = 0.01

    function rotateY(point: number[], angle: number): number[] {
      const [x, y, z] = point
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return [
        x * cos + z * sin,
        y,
        -x * sin + z * cos
      ]
    }

    function rotateX(point: number[], angle: number): number[] {
      const [x, y, z] = point
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return [
        x,
        y * cos - z * sin,
        y * sin + z * cos
      ]
    }

    function project(point: number[]): [number, number] {
      const perspective = 1000
      const [x, y, z] = point
      const factor = perspective / (perspective + z)
      return [
        x * factor + size / 2,
        y * factor + size / 2
      ]
    }

    function createShimmerGradient(x1: number, y1: number, x2: number, y2: number, z: number) {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      const shimmerPos = (Math.sin(shimmerOffset + z / 200) + 1) / 2
      const opacity = Math.min(1, Math.max(0.2, (1000 + z) / 1500))

      gradient.addColorStop(Math.max(0, shimmerPos - 0.2), `rgba(178, 231, 27, ${opacity * 0.2})`)
      gradient.addColorStop(shimmerPos, `rgba(178, 231, 27, ${opacity})`)
      gradient.addColorStop(Math.min(1, shimmerPos + 0.2), `rgba(178, 231, 27, ${opacity * 0.2})`)
      
      return gradient
    }

    function drawCube() {
      ctx.clearRect(0, 0, size, size)

      // Store rotated vertices
      const rotatedVertices = vertices.map(v => 
        rotateY(rotateX([...v], angle * 0.5), angle)
      )

      // Sort edges by z-index for proper rendering
      const sortedEdges = edges.map(edge => ({
        edge,
        z: (rotatedVertices[edge[0]][2] + rotatedVertices[edge[1]][2]) / 2
      })).sort((a, b) => a.z - b.z)

      // Draw edges with shimmer effect
      sortedEdges.forEach(({ edge: [i, j], z }) => {
        const p1 = rotatedVertices[i]
        const p2 = rotatedVertices[j]
        const [x1, y1] = project(p1)
        const [x2, y2] = project(p2)

        ctx.beginPath()
        ctx.strokeStyle = createShimmerGradient(x1, y1, x2, y2, z)
        ctx.lineWidth = 4
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      })

      // Update rotation and shimmer
      angle += speed
      shimmerOffset += 0.05
      requestAnimationFrame(drawCube)
    }

    drawCube()

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
import { useEffect, useRef } from 'react'

export function RotatingOctahedron() {
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

    // Define vertices
    const vertices = [
      [0, 1, 0],          // Top
      [1, 0, 0],          // Right
      [0, 0, 1],          // Front
      [-1, 0, 0],         // Left
      [0, 0, -1],         // Back
      [0, -1, 0]          // Bottom
    ].map(coords => {
      // Scale vertices
      return coords.map(coord => coord * 250)
    })

    // Define edges
    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4],  // Top connections
      [5, 1], [5, 2], [5, 3], [5, 4],  // Bottom connections
      [1, 2], [2, 3], [3, 4], [4, 1]   // Middle square
    ]

    let angleX = 0
    let angleY = 0
    let shimmerOffset = 0
    const speed = 0.005

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

    function drawOctahedron() {
      ctx.clearRect(0, 0, size, size)

      // Store rotated vertices
      const rotatedVertices = vertices.map(v => 
        rotateY(rotateX([...v], angleX), angleY)
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
      angleX += speed
      angleY += speed * 1.5
      shimmerOffset += 0.05
      requestAnimationFrame(drawOctahedron)
    }

    drawOctahedron()

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
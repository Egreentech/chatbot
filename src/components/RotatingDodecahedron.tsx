import { useEffect, useRef } from 'react'

export function RotatingDodecahedron() {
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

    // Phi (golden ratio) used in dodecahedron calculations
    const phi = (1 + Math.sqrt(5)) / 2
    const invPhi = 1 / phi

    // Create vertices using explicit positive and negative values
    const vertices = [
      // Cube vertices (8)
      [1, 1, 1], [-1, -1, -1], [1, -1, 1], [-1, 1, -1],
      [1, 1, -1], [-1, -1, 1], [1, -1, -1], [-1, 1, 1],
      
      // Vertices based on golden ratio (8)
      [0, invPhi, phi], [0, -invPhi, -phi],
      [0, invPhi, -phi], [0, -invPhi, phi],
      
      // Additional vertices (8)
      [phi, 0, invPhi], [-phi, 0, -invPhi],
      [phi, 0, -invPhi], [-phi, 0, invPhi],
      [invPhi, phi, 0], [-invPhi, -phi, 0],
      [invPhi, -phi, 0], [-invPhi, phi, 0]
    ].map(coords => {
      // Normalize vertices to ensure uniform edge lengths
      const length = Math.sqrt(coords[0] * coords[0] + coords[1] * coords[1] + coords[2] * coords[2])
      return coords.map(coord => (coord / length) * 250) // Scale to desired size
    })

    // Define faces (each face is a pentagon)
    const faces = [
      [0, 16, 2, 10, 8],
      [0, 8, 4, 14, 12],
      [16, 17, 18, 19, 3],
      [2, 3, 19, 15, 11],
      [10, 11, 15, 7, 6],
      [8, 9, 5, 7, 6],
      [4, 5, 9, 13, 14],
      [12, 14, 13, 1, 17],
      [16, 12, 17, 18, 2],
      [3, 2, 18, 19, 11],
      [15, 19, 7, 6, 11],
      [8, 6, 7, 5, 9]
    ]

    // Create edges from faces
    const edges = new Set()
    faces.forEach(face => {
      for (let i = 0; i < face.length; i++) {
        const j = (i + 1) % face.length
        const edge = [Math.min(face[i], face[j]), Math.max(face[i], face[j])]
        edges.add(edge.join(','))
      }
    })

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

    function drawDodecahedron() {
      ctx.clearRect(0, 0, size, size)

      // Store rotated vertices
      const rotatedVertices = vertices.map(v => 
        rotateY(rotateX([...v], angleX), angleY)
      )

      // Sort edges by z-index for proper rendering
      const sortedEdges = Array.from(edges).map(edge => {
        const [i, j] = edge.split(',').map(Number)
        return {
          edge: [i, j],
          z: (rotatedVertices[i][2] + rotatedVertices[j][2]) / 2
        }
      }).sort((a, b) => a.z - b.z)

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
      requestAnimationFrame(drawDodecahedron)
    }

    drawDodecahedron()

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
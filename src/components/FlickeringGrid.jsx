import { useEffect, useRef } from 'react'

export function FlickeringGrid({
    className = '',
    squareSize = 4,
    gridGap = 6,
    color = '#6B7280',
    maxOpacity = 0.5,
    flickerChance = 0.1,
    height,
    width,
}) {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const canvas = canvasRef.current

        if (!container || !canvas) {
            return undefined
        }

        const context = canvas.getContext('2d')
        if (!context) {
            return undefined
        }

        let animationFrameId = 0
        let lastDraw = 0

        const resizeCanvas = () => {
            const targetWidth = width ?? container.clientWidth
            const targetHeight = height ?? container.clientHeight

            canvas.width = Math.max(1, Math.floor(targetWidth))
            canvas.height = Math.max(1, Math.floor(targetHeight))
        }

        const drawFrame = () => {
            const cellSize = squareSize + gridGap
            const columns = Math.ceil(canvas.width / cellSize)
            const rows = Math.ceil(canvas.height / cellSize)

            context.clearRect(0, 0, canvas.width, canvas.height)
            context.fillStyle = color

            for (let row = 0; row <= rows; row += 1) {
                for (let column = 0; column <= columns; column += 1) {
                    const x = column * cellSize
                    const y = row * cellSize

                    const shouldFlicker = Math.random() < flickerChance
                    const opacity = shouldFlicker
                        ? Math.random() * maxOpacity
                        : Math.random() * maxOpacity * 0.08

                    context.globalAlpha = opacity
                    context.fillRect(x, y, squareSize, squareSize)
                }
            }

            context.globalAlpha = 1
        }

        const animate = (timestamp) => {
            if (timestamp - lastDraw >= 90) {
                drawFrame()
                lastDraw = timestamp
            }

            animationFrameId = window.requestAnimationFrame(animate)
        }

        const observer = new ResizeObserver(() => {
            resizeCanvas()
            drawFrame()
        })

        observer.observe(container)
        resizeCanvas()
        drawFrame()
        animationFrameId = window.requestAnimationFrame(animate)

        return () => {
            observer.disconnect()
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [squareSize, gridGap, color, maxOpacity, flickerChance, height, width])

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        </div>
    )
}

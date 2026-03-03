import { useEffect, useRef } from 'react'

const DEFAULT_CHARACTERS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'

export function LetterGlitch({
    className = '',
    glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
    glitchSpeed = 50,
    centerVignette = false,
    outerVignette = true,
    smooth = true,
    characters = DEFAULT_CHARACTERS,
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

        const palette = glitchColors.length > 0 ? glitchColors : ['#61dca3']
        const availableChars = characters.length > 0 ? characters : DEFAULT_CHARACTERS

        let animationFrameId = 0
        let resizeObserver
        let columns = 0
        let rows = 0
        let frameStep = 0

        const state = []

        const randomChar = () => availableChars[Math.floor(Math.random() * availableChars.length)]
        const randomColor = () => palette[Math.floor(Math.random() * palette.length)]

        const initializeState = () => {
            state.length = 0

            for (let row = 0; row < rows; row += 1) {
                const rowCells = []

                for (let column = 0; column < columns; column += 1) {
                    rowCells.push({
                        char: randomChar(),
                        color: randomColor(),
                        alpha: Math.random() * 0.4 + 0.2,
                        targetAlpha: Math.random() * 0.4 + 0.2,
                        hold: Math.floor(Math.random() * 6),
                    })
                }

                state.push(rowCells)
            }
        }

        const resizeCanvas = () => {
            const width = Math.max(1, container.clientWidth)
            const height = Math.max(1, container.clientHeight)

            canvas.width = width
            canvas.height = height

            const fontSize = Math.max(12, Math.floor(Math.min(width, height) / 28))
            const cellWidth = Math.floor(fontSize * 0.8)
            const cellHeight = Math.floor(fontSize * 1.1)

            columns = Math.max(1, Math.floor(width / cellWidth))
            rows = Math.max(1, Math.floor(height / cellHeight))

            context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
            context.textAlign = 'left'
            context.textBaseline = 'top'

            initializeState()
        }

        const drawVignette = () => {
            if (outerVignette) {
                const gradient = context.createRadialGradient(
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.min(canvas.width, canvas.height) * 0.25,
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.max(canvas.width, canvas.height) * 0.7,
                )
                gradient.addColorStop(0, 'rgba(2, 6, 23, 0)')
                gradient.addColorStop(1, 'rgba(2, 6, 23, 0.78)')
                context.fillStyle = gradient
                context.fillRect(0, 0, canvas.width, canvas.height)
            }

            if (centerVignette) {
                const gradient = context.createRadialGradient(
                    canvas.width / 2,
                    canvas.height / 2,
                    0,
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.min(canvas.width, canvas.height) * 0.38,
                )
                gradient.addColorStop(0, 'rgba(15, 23, 42, 0.35)')
                gradient.addColorStop(1, 'rgba(15, 23, 42, 0)')
                context.fillStyle = gradient
                context.fillRect(0, 0, canvas.width, canvas.height)
            }
        }

        const renderFrame = () => {
            const fontSize = parseInt(context.font, 10)
            const cellWidth = Math.floor(fontSize * 0.8)
            const cellHeight = Math.floor(fontSize * 1.1)

            context.clearRect(0, 0, canvas.width, canvas.height)
            context.fillStyle = 'rgba(2, 6, 23, 0.88)'
            context.fillRect(0, 0, canvas.width, canvas.height)

            for (let row = 0; row < rows; row += 1) {
                for (let column = 0; column < columns; column += 1) {
                    const cell = state[row][column]

                    if (cell.hold <= 0) {
                        cell.char = randomChar()
                        cell.color = randomColor()
                        cell.targetAlpha = Math.random() * 0.45 + 0.2
                        cell.hold = Math.floor(Math.random() * (smooth ? 10 : 4))
                    } else {
                        cell.hold -= 1
                    }

                    if (smooth) {
                        cell.alpha += (cell.targetAlpha - cell.alpha) * 0.2
                    } else {
                        cell.alpha = cell.targetAlpha
                    }

                    context.globalAlpha = cell.alpha
                    context.fillStyle = cell.color
                    context.fillText(cell.char, column * cellWidth, row * cellHeight)
                }
            }

            context.globalAlpha = 1
            drawVignette()
        }

        const animate = () => {
            frameStep += 1

            const steps = Math.max(1, Math.round(glitchSpeed / 10))
            if (frameStep % steps === 0) {
                renderFrame()
            }

            animationFrameId = window.requestAnimationFrame(animate)
        }

        resizeObserver = new ResizeObserver(() => {
            resizeCanvas()
            renderFrame()
        })

        resizeObserver.observe(container)
        resizeCanvas()
        renderFrame()
        animationFrameId = window.requestAnimationFrame(animate)

        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect()
            }
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [glitchColors, glitchSpeed, centerVignette, outerVignette, smooth, characters])

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        </div>
    )
}

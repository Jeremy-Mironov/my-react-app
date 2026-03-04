import { useEffect, useRef } from 'react'
import './LogoLoop.css'

export default function LogoLoop({ items = [], speed = 60 }) {
    const trackRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current
        if (!track || items.length === 0) return

        let offset = 0
        let frameId = 0
        let lastTime = performance.now()
        const trackStyle = getComputedStyle(track)
        const gap = parseFloat(trackStyle.gap || '0')

        const animate = (now) => {
            const delta = Math.min((now - lastTime) / 1000, 0.033)
            lastTime = now
            offset -= speed * delta

            if (track.firstElementChild) {
                while (track.firstElementChild) {
                    const first = track.firstElementChild
                    const firstWidth = first.clientWidth + gap
                    if (-offset < firstWidth) break
                    track.appendChild(first)
                    offset += firstWidth
                }
            }

            track.style.transform = `translate3d(${offset}px, 0, 0)`
            frameId = requestAnimationFrame(animate)
        }

        frameId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frameId)
    }, [items, speed])

    return (
        <div className="logo-loop" aria-label="Logo loop">
            <div ref={trackRef} className="logo-loop__track">
                {items.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="logo-loop__item" title={item.name}>
                        <img className="logo-loop__icon" src={item.icon} alt={item.name} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    )
}

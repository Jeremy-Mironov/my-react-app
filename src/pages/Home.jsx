import { useEffect, useRef, useState } from 'react'
import { AboutPreviewSection } from '../sections/AboutPreviewSection'
import Scene3D from '../components/Scene3D'
import { HomeHeroSection } from '../sections/HomeHeroSection'
import { ServicesSection } from '../sections/ServicesSection'

export default function Home() {
    const [sceneSide, setSceneSide] = useState('left')
    const sceneWrapperRef = useRef(null)
    const targetTopRef = useRef(null)
    const currentTopRef = useRef(null)
    const animationFrameRef = useRef(null)
    const sideObserverRef = useRef(null)

    const getFocusElements = () => {
        const isMobile = window.matchMedia('(max-width: 1023px)').matches

        if (isMobile) {
            return {
                heroElement: document.getElementById('hero-mobile-slot'),
                aboutElement: document.getElementById('about-mobile-slot'),
            }
        }

        return {
            heroElement: document.getElementById('hero'),
            aboutElement: document.getElementById('about-preview'),
        }
    }

    useEffect(() => {
        const connectObserver = () => {
            const { heroElement, aboutElement } = getFocusElements()

            if (!heroElement || !aboutElement) {
                return
            }

            if (sideObserverRef.current) {
                sideObserverRef.current.disconnect()
            }

            sideObserverRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return
                        }

                        if (entry.target.id === aboutElement.id) {
                            setSceneSide('right')
                        }

                        if (entry.target.id === heroElement.id) {
                            setSceneSide('left')
                        }
                    })
                },
                {
                    threshold: 0.55,
                }
            )

            sideObserverRef.current.observe(heroElement)
            sideObserverRef.current.observe(aboutElement)
        }

        connectObserver()
        window.addEventListener('resize', connectObserver)

        return () => {
            window.removeEventListener('resize', connectObserver)
            if (sideObserverRef.current) {
                sideObserverRef.current.disconnect()
                sideObserverRef.current = null
            }
        }
    }, [])

    useEffect(() => {
        const setTargetTop = () => {
            const { heroElement, aboutElement } = getFocusElements()
            const targetSection = sceneSide === 'right' ? aboutElement : heroElement
            const sceneWrapper = sceneWrapperRef.current

            if (!targetSection || !sceneWrapper) {
                return
            }

            const rect = targetSection.getBoundingClientRect()
            targetTopRef.current = rect.top + rect.height / 2

            if (currentTopRef.current === null) {
                currentTopRef.current = targetTopRef.current
                sceneWrapper.style.top = `${targetTopRef.current}px`
            }
        }

        const animateTop = () => {
            const sceneWrapper = sceneWrapperRef.current
            const targetTop = targetTopRef.current
            const currentTop = currentTopRef.current

            if (!sceneWrapper || targetTop === null || currentTop === null) {
                animationFrameRef.current = null
                return
            }

            const lerpFactor = 0.18
            const nextTop = currentTop + (targetTop - currentTop) * lerpFactor

            currentTopRef.current = nextTop
            sceneWrapper.style.top = `${nextTop}px`

            if (Math.abs(targetTop - nextTop) > 0.5) {
                animationFrameRef.current = window.requestAnimationFrame(animateTop)
                return
            }

            currentTopRef.current = targetTop
            sceneWrapper.style.top = `${targetTop}px`
            animationFrameRef.current = null
        }

        const scheduleUpdate = () => {
            setTargetTop()

            if (animationFrameRef.current !== null) {
                return
            }

            animationFrameRef.current = window.requestAnimationFrame(animateTop)
        }

        scheduleUpdate()
        window.addEventListener('scroll', scheduleUpdate, { passive: true })
        window.addEventListener('resize', scheduleUpdate)

        return () => {
            if (animationFrameRef.current !== null) {
                window.cancelAnimationFrame(animationFrameRef.current)
                animationFrameRef.current = null
            }
            window.removeEventListener('scroll', scheduleUpdate)
            window.removeEventListener('resize', scheduleUpdate)
        }
    }, [sceneSide])

    return (
        <>
            <div
                ref={sceneWrapperRef}
                className={`pointer-events-none fixed left-1/2 z-40 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 transition-transform duration-400 ease-out md:w-[min(70vw,720px)] ${sceneSide === 'right' ? 'lg:translate-x-[calc(-50%+400px)]' : 'lg:translate-x-[calc(-50%-400px)]'
                    }`}
                style={{ top: '50%' }}
            >
                <div className="h-[min(60vh,420px)] overflow-hidden rounded-xl md:h-[min(70vh,560px)]">
                    <Scene3D variant={sceneSide === 'right' ? 'about' : 'home'} />
                </div>
            </div>
            <HomeHeroSection />
            <AboutPreviewSection />
            <ServicesSection />
        </>
    )
}

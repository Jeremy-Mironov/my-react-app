import { useEffect, useRef, useState } from 'react'
import { AboutPreviewSection } from '../sections/AboutPreviewSection'
import Scene3D from '../components/Scene3D'
import { CtaSection } from '../sections/CtaSection'
import { HomeHeroSection } from '../sections/HomeHeroSection'
import { ServicesSection } from '../sections/ServicesSection'
import { TestimonialsSection } from '../sections/TestimonialsSection'

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

            <HomeHeroSection />
            <AboutPreviewSection />
            <CtaSection />
            <ServicesSection />
            <TestimonialsSection />
        </>
    )
}

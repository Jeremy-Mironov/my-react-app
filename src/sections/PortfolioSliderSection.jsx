import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../assets/dummy-data'
import { ProjectCard } from '../components/Cards'

/* ── chevron SVGs ─────────────────────────────────────────── */
const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        className="h-5 w-5">
        <path d="M15 18l-6-6 6-6" />
    </svg>
)
const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        className="h-5 w-5">
        <path d="M9 18l6-6-6-6" />
    </svg>
)

/* ── arrow button ────────────────────────────────────────────── */
function ArrowBtn({ onClick, disabled, children, label }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 shadow-md transition
                       hover:border-blue-500/60 hover:bg-slate-700 hover:text-white
                       disabled:cursor-not-allowed disabled:opacity-30"
        >
            {children}
        </button>
    )
}

export function PortfolioSliderSection() {
    const trackRef = useRef(null)
    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0)

    /* ── keep button states in sync with scroll position ─────── */
    const syncState = useCallback(() => {
        const el = trackRef.current
        if (!el) return
        const atStart = el.scrollLeft <= 4
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4

        setCanPrev(!atStart)
        setCanNext(!atEnd)

        // active dot: which card's left edge is closest to scrollLeft
        const children = Array.from(el.children)
        let closest = 0
        let minDist = Infinity
        children.forEach((child, i) => {
            const dist = Math.abs(child.offsetLeft - el.scrollLeft)
            if (dist < minDist) { minDist = dist; closest = i }
        })
        setActiveIndex(closest)
    }, [])

    useEffect(() => {
        const el = trackRef.current
        if (!el) return
        el.addEventListener('scroll', syncState, { passive: true })
        syncState()
        return () => el.removeEventListener('scroll', syncState)
    }, [syncState])

    /* ── scroll by one card width ─────────────────────────────── */
    const scrollBy = (dir) => {
        const el = trackRef.current
        if (!el) return
        const card = el.firstElementChild
        const cardW = card ? card.offsetWidth + 24 : 340   // 24 = gap-6
        el.scrollBy({ left: dir * cardW, behavior: 'smooth' })
    }

    /* ── dot click ────────────────────────────────────────────── */
    const scrollToIndex = (i) => {
        const el = trackRef.current
        if (!el) return
        const child = el.children[i]
        if (!child) return
        el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' })
    }

    return (
        <section className="border-y border-slate-800/80 bg-slate-950/60 py-16">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* ── header ─────────────────────────────────── */}
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                            Work
                        </p>
                        <h2 className="mt-1 text-3xl font-bold text-white">
                            Featured Projects
                        </h2>
                    </div>
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                    >
                        View all projects
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                            className="h-4 w-4">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* ── track ──────────────────────────────────── */}
                <div className="relative">
                    {/* fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-slate-950/60 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-slate-950/60 to-transparent" />

                    <div
                        ref={trackRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth pb-2"
                        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project) => (
                            <div
                                key={project.slug}
                                style={{ scrollSnapAlign: 'start', flex: '0 0 auto' }}
                                className="w-[min(85vw,320px)] sm:w-[min(60vw,320px)] lg:w-[calc((100%-48px)/3)]"
                            >
                                <ProjectCard
                                    title={project.title}
                                    shortDescription=""
                                    stack={project.stack}
                                    imageSrc={project.imageSrc}
                                    imageAlt={project.imageAlt}
                                    slug={project.slug}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── controls ───────────────────────────────── */}
                <div className="mt-6 flex items-center justify-between">
                    {/* dots */}
                    <div className="flex gap-2">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                                    ? 'w-6 bg-blue-400'
                                    : 'w-2 bg-slate-600 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* arrows */}
                    <div className="flex gap-2">
                        <ArrowBtn onClick={() => scrollBy(-1)} disabled={!canPrev} label="Previous project">
                            <ChevronLeft />
                        </ArrowBtn>
                        <ArrowBtn onClick={() => scrollBy(1)} disabled={!canNext} label="Next project">
                            <ChevronRight />
                        </ArrowBtn>
                    </div>
                </div>
            </div>
        </section>
    )
}

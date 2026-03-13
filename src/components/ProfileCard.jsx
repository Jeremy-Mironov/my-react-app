import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function ProfileCard({
    avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
    iconUrl,
    grainUrl,
    innerGradient,
    showOverlay = true,
    overlayOpacity = 0.28,
    showIconPattern = true,
    behindGlowEnabled = true,
    behindGlowColor = 'rgba(125, 190, 255, 0.45)',
    behindGlowSize = '45%',
    className = '',
    enableTilt = true,
    enableMobileTilt = false,
    mobileTiltSensitivity = 5,
    miniAvatarUrl,
    name = 'Jeremy',
    title = 'Jeremy',
    handle = 'yourhandle',
    status = 'Available for projects',
    contactText = 'Contact',
    showUserInfo = true,
    onContactClick,
}) {
    const cardRef = useRef(null)
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
    const [glow, setGlow] = useState({ x: '50%', y: '50%', active: false })

    const canTilt = useMemo(() => {
        if (typeof window === 'undefined') {
            return false
        }

        const isTouch = window.matchMedia('(pointer: coarse)').matches
        return enableTilt && (!isTouch || enableMobileTilt)
    }, [enableTilt, enableMobileTilt])

    const handleMove = (event) => {
        if (!cardRef.current) {
            return
        }

        const rect = cardRef.current.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        setGlow({ x: `${(x / rect.width) * 100}%`, y: `${(y / rect.height) * 100}%`, active: true })

        if (!canTilt) {
            return
        }

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateY = ((x - centerX) / centerX) * (enableMobileTilt ? mobileTiltSensitivity : 6)
        const rotateX = -((y - centerY) / centerY) * (enableMobileTilt ? mobileTiltSensitivity : 6)

        setTilt({ rotateX, rotateY })
    }

    const resetEffects = () => {
        setGlow((prev) => ({ ...prev, active: false }))
        setTilt({ rotateX: 0, rotateY: 0 })
    }

    const defaultGradient =
        'linear-gradient(180deg, rgba(22,34,72,0.9) 0%, rgba(16,26,56,0.95) 45%, rgba(10,16,34,1) 100%)'

    const defaultIconPattern =
        'radial-gradient(circle at 20% 20%, rgba(124, 150, 255, 0.25) 0 2px, transparent 3px), radial-gradient(circle at 70% 70%, rgba(124, 150, 255, 0.16) 0 2px, transparent 3px)'

    const defaultGrain =
        'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)'

    return (
        <div className={`relative overflow-x-clip pt-[80px] sm:pt-0 ${className}`}>
            {behindGlowEnabled && (
                <div
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl blur-2xl transition-opacity duration-300"
                    style={{
                        opacity: glow.active ? 1 : 0.45,
                        background: `radial-gradient(circle at ${glow.x} ${glow.y}, ${behindGlowColor} 0%, transparent ${behindGlowSize})`,
                    }}
                    aria-hidden="true"
                />
            )}

            <article
                ref={cardRef}
                onMouseMove={handleMove}
                onMouseLeave={resetEffects}
                className="relative isolate overflow-hidden rounded-[2rem] border border-indigo-400/20 bg-slate-950 shadow-2xl"
                style={{
                    backgroundImage: innerGradient || defaultGradient,
                    transform: canTilt
                        ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
                        : undefined,
                    transition: 'transform 120ms ease-out',
                }}
            >
                <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        background:
                            'radial-gradient(circle at 50% 16%, rgba(156, 189, 255, 0.18), transparent 45%), radial-gradient(circle at 15% 0%, rgba(130, 161, 255, 0.14), transparent 38%), radial-gradient(circle at 85% 0%, rgba(130, 161, 255, 0.14), transparent 38%)',
                    }}
                    aria-hidden="true"
                />

                {showOverlay && (
                    <div
                        className="pointer-events-none absolute inset-0 z-[1]"
                        style={{
                            background: 'rgba(38, 38, 38, 1)',
                            opacity: overlayOpacity,
                        }}
                        aria-hidden="true"
                    />
                )}

                {showIconPattern && (
                    <div
                        className="pointer-events-none absolute right-8 top-28 z-10 h-24 w-24 opacity-35"
                        style={{
                            backgroundImage: iconUrl || defaultIconPattern,
                            backgroundSize: iconUrl ? '90px 90px' : '18px 18px, 22px 22px',
                            backgroundRepeat: 'repeat',
                            filter: 'drop-shadow(0 0 8px rgba(114, 140, 255, 0.35))',
                        }}
                        aria-hidden="true"
                    />
                )}

                {grainUrl ? (
                    <div
                        className="pointer-events-none absolute inset-0 z-20 opacity-25 mix-blend-soft-light"
                        style={{ backgroundImage: `url(${grainUrl})`, backgroundSize: 'cover' }}
                        aria-hidden="true"
                    />
                ) : (
                    <div
                        className="pointer-events-none absolute inset-0 z-20 opacity-25 mix-blend-soft-light"
                        style={{ backgroundImage: defaultGrain }}
                        aria-hidden="true"
                    />
                )}

                <div className="relative z-30 flex min-h-[250px] flex-col px-4 pb-4 pt-[26px] sm:px-5 sm:pb-5 sm:pt-[30px]">
                    {showUserInfo && (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold tracking-tight text-slate-100">{name}</h3>
                            <p className="mt-1 text-sm font-medium text-slate-300/95">{title}</p>
                        </div>
                    )}

                    <div className="relative mt-4 flex flex-1 items-end justify-center overflow-hidden rounded-[1.2rem] border border-indigo-300/10 bg-gradient-to-b from-indigo-200/5 to-indigo-900/20">
                        <img
                            src={avatarUrl}
                            alt={`${name} avatar`}
                            className="h-full w-full object-contain object-bottom"
                        />

                        {showOverlay && (
                            <div
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background: 'rgba(38, 38, 38, 1)',
                                    opacity: overlayOpacity,
                                }}
                                aria-hidden="true"
                            />
                        )}

                        <div
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                            style={{
                                background:
                                    'linear-gradient(to top, rgba(8, 13, 29, 0.92), rgba(8, 13, 29, 0.35), transparent)',
                            }}
                            aria-hidden="true"
                        />
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                            {miniAvatarUrl && (
                                <img
                                    src={miniAvatarUrl}
                                    alt="mini avatar"
                                    className="h-7 w-7 rounded-full border border-slate-600 object-cover"
                                />
                            )}
                            <span className="max-w-full break-all rounded-full border border-slate-600 bg-slate-900/80 px-2 py-1">
                                @{handle}
                            </span>
                            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-emerald-300">
                                {status}
                            </span>
                        </div>
                    </div>

                    <Link
                        to="/contact"
                        onClick={onContactClick}
                        className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-indigo-200/20 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
                    >
                        {contactText}
                    </Link>
                </div>
            </article>
        </div>
    )
}

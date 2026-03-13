import { Link } from 'react-router-dom'
import { servicesFeatureSection } from '../assets/dummy-data'

const serviceIcons = {
    monitor: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M8 20h8" />
            <path d="M12 16v4" />
        </svg>
    ),
    palette: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 0 18h1a2.5 2.5 0 0 0 0-5h-1.2a2.8 2.8 0 0 1 0-5.6H13a4 4 0 0 0 0-8z" />
            <circle cx="7.5" cy="10" r="1" />
            <circle cx="9.5" cy="7" r="1" />
            <circle cx="14.5" cy="7.5" r="1" />
        </svg>
    ),
    tools: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
            <path d="M14.7 6.3a3.5 3.5 0 0 0 4.95 4.95l-7.7 7.7a2 2 0 1 1-2.83-2.83z" />
            <path d="M6.3 14.7 4 17l3 3 2.3-2.3" />
        </svg>
    ),
    megaphone: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
            <path d="M3 11v2a2 2 0 0 0 2 2h2l4 4V7l-4 4H5a2 2 0 0 0-2 2z" />
            <path d="M15 9.5a4 4 0 0 1 0 5" />
            <path d="M17.5 7a7 7 0 0 1 0 10" />
        </svg>
    ),
    pen: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z" />
        </svg>
    ),
    mobile: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
            <rect x="7" y="2.5" width="10" height="19" rx="2" />
            <path d="M11 18.5h2" />
        </svg>
    ),
}

export function ServicesSection() {
    return (
        <section id="services" className="border-b border-slate-800 bg-slate-950/100 py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
                    <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl lg:text-4xl">
                        {servicesFeatureSection.heading}
                    </h2>
                    <p className="max-w-4xl text-lg text-slate-300 sm:text-xl">
                        {servicesFeatureSection.description}
                    </p>
                    <div className="flex items-center gap-1.5">
                        <Link
                            to={servicesFeatureSection.cta.to}
                            className="text-lg font-medium text-blue-400 transition hover:text-blue-300"
                        >
                            {servicesFeatureSection.cta.label}
                        </Link>
                        <span className="text-blue-400">→</span>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-xl">
                    {servicesFeatureSection.cards.map((card) => (
                        <div
                            key={card.title}
                            className={`rounded-2xl border bg-slate-900/70 p-6 shadow-none transition-colors duration-300 ${card.accent}`}
                        >
                            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-current/40 bg-slate-900/30">
                                {serviceIcons[card.icon] ?? serviceIcons.monitor}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
                            <p className="mt-2 text-slate-300/90">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

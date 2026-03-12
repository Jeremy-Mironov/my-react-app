import { Link } from 'react-router-dom'
import { servicesFeatureSection } from '../assets/dummy-data'

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
                            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full text-2xl">
                                <span aria-hidden="true">{card.icon}</span>
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

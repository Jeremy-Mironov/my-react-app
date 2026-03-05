import { Link } from 'react-router-dom'
import { homeServices, homeServicesHeader } from '../assets/dummy-data'

const servicesHeader = homeServicesHeader[0]

export function ServicesSection() {
    return (
        <section className="border-b border-slate-800 bg-slate-900/40">
            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">{servicesHeader.heading}</h2>
                    <p className="mt-3 max-w-2xl text-base text-slate-400">
                        {servicesHeader.description}
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {homeServices.map((service, index) => (
                        <div key={service.title} className="group rounded-lg border border-slate-800 bg-slate-900/60 overflow-hidden transition hover:border-slate-700 hover:bg-slate-900/80 flex flex-col">
                            <div className={`h-40 ${index === 0
                                ? 'bg-linear-to-br from-blue-500/20 to-cyan-500/20'
                                : index === 1
                                    ? 'bg-linear-to-br from-purple-500/20 to-pink-500/20'
                                    : index === 2
                                        ? 'bg-linear-to-br from-orange-500/20 to-red-500/20'
                                        : 'bg-linear-to-br from-green-500/20 to-emerald-500/20'} flex items-center justify-center overflow-hidden`}>
                                <img src={service.imageSrc} alt={service.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-slate-100">{service.title}</h3>
                                <p className="mt-2 text-sm text-slate-400 flex-1">
                                    {service.description}
                                </p>
                                <Link to={service.linkTo} className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition">
                                    {service.linkLabel} <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

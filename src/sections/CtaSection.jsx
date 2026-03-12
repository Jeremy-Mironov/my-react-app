import { Link } from 'react-router-dom'
import { homeCtaSection } from '../assets/dummy-data'

export function CtaSection() {
    return (
        <section className="backdrop-blur-sm border-b border-slate-800  bg-slate-900/75 py-12 sm:py-16">
            <div className=" mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ">
                <div className="p-6 sm:p-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">{homeCtaSection.heading}</h2>
                    <p className="mx-auto mt-3 max-w-3xl text-base text-slate-300">{homeCtaSection.description}</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Link
                            to={homeCtaSection.primary.to}
                            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                        >
                            {homeCtaSection.primary.label}
                        </Link>
                        <Link
                            to={homeCtaSection.secondary.to}
                            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                        >
                            {homeCtaSection.secondary.label}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

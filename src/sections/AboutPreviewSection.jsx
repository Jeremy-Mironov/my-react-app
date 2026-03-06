import { Link } from 'react-router-dom'
import {
    aboutPreviewContent,
    aboutPreviewStats,
} from '../assets/dummy-data'
import CompanyLogoMarquee from '../components/CompanyLogoMarquee'
import { SkillCard } from '../components/Cards'

const aboutPreview = aboutPreviewContent[0]

export function AboutPreviewSection() {
    return (
        <section id="about-preview" className="overflow-x-hidden border-b border-slate-800 bg-slate-950">
            <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">{aboutPreview.heading}</h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                        {aboutPreview.description}
                    </p>

                    <div className="mt-8 w-full max-w-3xl overflow-hidden">
                        <CompanyLogoMarquee />
                    </div>

                    <div className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
                        {aboutPreviewStats.map((stat) => (
                            <SkillCard key={stat.title} title={stat.title} items={stat.items} />
                        ))}
                    </div>
                    <Link
                        to="/about"
                        className="mt-6 inline-flex w-fit self-start rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                    >
                        {aboutPreview.cta}
                    </Link>
                </div>

                <div id="about-mobile-slot" aria-hidden="true" className="h-[400px] lg:h-auto" />
            </div>

        </section>
    )
}

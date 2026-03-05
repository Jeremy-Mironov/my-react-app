import { portfolioPageHeader, projects } from '../assets/dummy-data'
import { ProjectCard } from '../components/Cards'

const portfolioHeader = portfolioPageHeader[0]

export function PortfolioMainSection() {
    return (
        <section className="border-y border-slate-800/80 bg-slate-900/40">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                    {portfolioHeader.description}
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

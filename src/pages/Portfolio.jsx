import { ProjectCard } from '../components/Cards'
import { projects } from '../data/siteContent'

export default function Portfolio() {
    return (
        <section className="border-y border-slate-800 bg-slate-900/60">
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Portfolio / Projects
                </p>
                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">My best work</h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                    Selected projects that show my approach to web development, visual design, and measurable
                    online growth.
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

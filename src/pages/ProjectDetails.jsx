import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../assets/dummy-data'
import { SharedHeroSection } from '../sections/SharedHeroSection'

function ProjectPager({ previousProject, nextProject }) {
    const baseClass = 'inline-flex min-h-20 w-full max-w-[48%] flex-col justify-center border px-4 py-3 text-left text-sm font-semibold transition sm:min-h-24 sm:max-w-[25%]'

    return (
        <div className="flex flex-wrap items-center justify-between gap-3 pb-10">
            {previousProject ? (
                <Link
                    to={`/portfolio/${previousProject.slug}`}
                    className={`${baseClass} border-slate-700 bg-slate-800/70 text-slate-200 hover:border-blue-500/45 hover:bg-slate-800 hover:text-blue-300`}
                >
                    <span className="text-xs uppercase tracking-wide text-slate-400">← Previous</span>
                    <span className="mt-1 line-clamp-2 text-sm text-slate-100">{previousProject.title}</span>
                </Link>
            ) : (
                <span className={`${baseClass} cursor-not-allowed border-slate-800 bg-slate-900/70 text-slate-500`}>
                    <span className="text-xs uppercase tracking-wide text-slate-500">← Previous</span>
                    <span className="mt-1 text-sm text-slate-600">No previous project</span>
                </span>
            )}

            {nextProject ? (
                <Link
                    to={`/portfolio/${nextProject.slug}`}
                    className={`${baseClass} border-slate-700 bg-slate-800/70 text-right text-slate-200 hover:border-blue-500/45 hover:bg-slate-800 hover:text-blue-300`}
                >
                    <span className="text-xs uppercase tracking-wide text-slate-400">Next →</span>
                    <span className="mt-1 line-clamp-2 text-sm text-slate-100">{nextProject.title}</span>
                </Link>
            ) : (
                <span className={`${baseClass} cursor-not-allowed border-slate-800 bg-slate-900/70 text-right text-slate-500`}>
                    <span className="text-xs uppercase tracking-wide text-slate-500">Next →</span>
                    <span className="mt-1 text-sm text-slate-600">No next project</span>
                </span>
            )}
        </div>
    )
}

export default function ProjectDetails() {
    const { slug } = useParams()
    const project = projects.find((item) => item.slug === slug)
    const projectIndex = projects.findIndex((item) => item.slug === slug)
    const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

    if (!project) {
        return <Navigate to="/portfolio" replace />
    }

    return (
        <>
            <SharedHeroSection
                badge="Portfolio"
                heading={project.title}
                breadcrumbItems={[
                    { label: 'Portfolio', to: '/portfolio' },
                    { label: project.title },
                ]}
            />

            <section className="">
                <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 backdrop-blur-xl ">
                    <ProjectPager previousProject={previousProject} nextProject={nextProject} />

                    <div className="overflow-hidden">
                        <img
                            src={project.imageSrc}
                            alt={project.imageAlt}
                            className="rounded-2xl h-64 w-full object-cover sm:h-80"
                        />
                        <div className="p-6 sm:p-8">
                            <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">{project.title}</h2>
                            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-400">Description</h3>
                            <p className="mt-3 text-base leading-7 text-slate-300">{project.shortDescription}</p>

                            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-400">Tech stack</h3>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                    <li
                                        key={`${project.slug}-${item}`}
                                        className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Project Details</h3>
                                <div
                                    className="mt-4 space-y-4 text-slate-200 [&_.text-gray-900]:text-slate-100 [&_.text-gray-700]:text-slate-300 [&_.text-gray-600]:text-slate-300 [&_.text-green-700]:text-emerald-300 [&_.text-green-600]:text-emerald-400 [&_.bg-gray-50]:border [&_.bg-gray-50]:border-slate-700 [&_.bg-gray-50]:bg-slate-800/70 [&_.bg-gray-100]:bg-slate-700/70 [&_.rounded-2xl]:rounded-2xl [&_.border-gray-200]:border-slate-700 [&_h2]:text-slate-100 [&_h3]:text-slate-100 [&_li]:text-slate-200 [&_p]:text-slate-300 [&_span]:text-inherit [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-blue-300"
                                    dangerouslySetInnerHTML={{
                                        __html: project.longDescription ?? project.shortDescription,
                                    }}
                                />
                            </div>

                            <div className="mt-8">
                                <Link to="/portfolio" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                                    ← Back to portfolio
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <ProjectPager previousProject={previousProject} nextProject={nextProject} />
                    </div>
                </div>
            </section>
        </>
    )
}

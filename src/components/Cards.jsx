import { Link } from 'react-router-dom'

export function SkillCard({ title, items }) {
    return (
        <article className="group rounded-2xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-[0_10px_40px_rgba(2,6,23,0.35)] transition hover:-translate-y-0.5 hover:border-blue-500/45 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_16px_45px_rgba(2,6,23,0.5)]">
            <h3 className="text-base font-semibold text-slate-100">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                    <li key={item} className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200">
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export function ProjectCard({ title, shortDescription, stack, imageSrc, imageAlt, slug }) {
    return (
        <article className="group rounded-2xl border border-slate-700/70 bg-slate-900/100 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.35)] transition hover:-translate-y-0.5 hover:border-blue-500/45 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_16px_45px_rgba(2,6,23,0.5)]">
            <div className="-mx-1 -mt-1 mb-5 overflow-hidden rounded-xl border border-slate-700/70 bg-slate-800/70">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{shortDescription}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                    <li
                        key={`${title}-${item}`}
                        className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <Link
                to={`/portfolio/${slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
                Read more →
            </Link>
        </article>
    )
}

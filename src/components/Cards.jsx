export function SkillCard({ title, items }) {
    return (
        <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-100">{title}</h3>
            <ul className="mt-3 space-y-2">
                {items.map((item) => (
                    <li key={item} className="text-sm text-slate-300">
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export function ProjectCard({ title, description, stack }) {
    return (
        <article className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                    <li
                        key={`${title}-${item}`}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    )
}

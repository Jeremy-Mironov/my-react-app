import { SkillCard } from '../components/Cards'
import { skillGroups } from '../data/siteContent'

export default function About() {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">About</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Background, skills, and experience</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                I combine development, design, and marketing thinking to deliver websites that are both
                visually strong and results-focused. I have hands-on experience in SEO optimization,
                freelance design, social media and digital presence, and helping small businesses with web +
                branding.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group) => (
                    <SkillCard key={group.title} title={group.title} items={group.items} />
                ))}
            </div>
        </section>
    )
}

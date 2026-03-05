import { skillGroups, aboutPageHeader } from '../../assets/dummy-data'
import { SkillCard } from '../../components/Cards'

const aboutHeader = aboutPageHeader[0]

export function AboutSkillsSection() {
    return (
        <section className=" border-b border-slate-800 bg-slate-950/100 ">
            <div className='mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 '>
                <h2 className="text-3xl font-bold sm:text-4xl">{aboutHeader.sectionTitle}</h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                    {aboutHeader.description}
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => (
                        <SkillCard key={group.title} title={group.title} items={group.items} />
                    ))}
                </div>
            </div>
        </section>
    )
}

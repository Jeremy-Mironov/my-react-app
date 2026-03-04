import { SkillCard } from '../components/Cards'
import LiquidEther from '../components/LiquidEther'
import { skillGroups } from '../data/siteContent'

export default function About() {
    return (
        <>
            <section className="relative isolate overflow-hidden border-b border-slate-800 bg-slate-900/60">
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <LiquidEther
                        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.5}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                        color0="#5227FF"
                        color1="#FF9FFC"
                        color2="#B19EEF"
                    />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">About</p>
                    <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
                        Building modern websites with design, development, and SEO that drive real results.
                    </h1>
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold sm:text-4xl">Background, skills, and experience</h2>
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
        </>
    )
}

import LiquidEther from '../../components/LiquidEther'
import { aboutPageHeader } from '../../assets/dummy-data'

const aboutHeader = aboutPageHeader[0]

export function AboutHeroSection() {
    return (
        <section className="relative isolate overflow-hidden border-b border-slate-800 bg-slate-900/60">
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={10}
                    cursorSize={70}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.2}
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
                <p className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">{aboutHeader.badge}</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
                    {aboutHeader.heading}
                </h1>
            </div>
        </section>
    )
}

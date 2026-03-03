import { Link, useNavigate } from 'react-router-dom'
import { LetterGlitch } from '../components/LetterGlitch'
import { ProfileCard } from '../components/ProfileCard'
import { Step, Stepper } from '../components/Stepper'

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="relative flex min-h-[calc(100vh-65px)] items-center overflow-hidden border-b border-slate-800 bg-slate-900/60"
            >
                <div className="pointer-events-none absolute inset-0 z-0">
                    <LetterGlitch
                        className="size-full"
                        glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                        glitchSpeed={50}
                        centerVignette={false}
                        outerVignette={true}
                        smooth={true}
                    />
                </div>

                <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Hero</p>
                        <h1 id="hero-heading" className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                            I build modern websites and drive growth with SEO.
                        </h1>
                        <p className="mt-5 text-base leading-7 text-slate-300">
                            I create websites that look professional, work smoothly on every device, and help
                            businesses turn visitors into real leads. My strongest area is SEO, supported by
                            practical web, design, and client-focused delivery skills.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/portfolio"
                                className="rounded-md bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                            >
                                View Portfolio
                            </Link>
                            <Link
                                to="/contact"
                                className="rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
                        <h2 className="text-lg font-semibold text-slate-100">What I do</h2>
                        <p className="mt-2 text-sm text-slate-400">Step through my core services.</p>

                        <div className="mt-4">
                            <Stepper initialStep={1} nextButtonText="Next">
                                <Step>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-100">Website Development</h3>
                                        <p className="mt-2 text-sm text-slate-300">
                                            Build responsive, professional websites for small businesses.
                                        </p>
                                    </div>
                                </Step>
                                <Step>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-100">SEO Strategy</h3>
                                        <p className="mt-2 text-sm text-slate-300">
                                            Optimize on-page SEO, keyword targeting, and search visibility.
                                        </p>
                                    </div>
                                </Step>
                                <Step>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-100">Portfolio & Landing Pages</h3>
                                        <p className="mt-2 text-sm text-slate-300">
                                            Create conversion-focused portfolio pages and business landing pages.
                                        </p>
                                    </div>
                                </Step>
                                <Step>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-100">Brand-Support Design</h3>
                                        <p className="mt-2 text-sm text-slate-300">
                                            Design layouts and visual direction that strengthen brand identity.
                                        </p>
                                    </div>
                                </Step>
                            </Stepper>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-800 bg-slate-950/70">
                <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">About Me</h2>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                            I’m a web developer and designer with a strong interest in creating practical,
                            modern websites for businesses and personal brands. My work combines design,
                            front-end development, and SEO to create websites that not only look good, but
                            also perform well.
                        </p>
                        <Link
                            to="/about"
                            className="mt-6 inline-flex w-fit self-start rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                        >
                            Learn More About Me
                        </Link>
                    </div>

                    <ProfileCard
                        className="max-w-[260px] lg:justify-self-end"
                        avatarUrl="/img/profile.png"
                        name="Jeremy Mironov"
                        title="Web Developer & Designer"
                        handle="jmironov_studio"
                        status="online"
                        contactText="Contact"
                        onContactClick={() => {
                            navigate('/contact')
                        }}
                    />
                </div>
            </section>
        </>
    )
}

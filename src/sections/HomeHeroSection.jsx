import { Link } from 'react-router-dom'
import { homeHeroContent, homeHeroCtas, homeStepperContent, homeWhatIDo } from '../assets/dummy-data'
import { Step, Stepper } from '../components/Stepper'

const heroContent = homeHeroContent[0]

export function HomeHeroSection() {
    return (
        <>
            <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }

                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#FF0A7F, #780EFF);
                    animation: rotate 4s linear infinite;
                }
            `}</style>

            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="relative isolate flex min-h-[calc(100vh-65px)] items-center overflow-hidden border-b border-slate-800 "
            >
                <div className=" relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20   ">
                    <div
                        className='bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 lg:col-start-2'>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">{heroContent.badge}</p>
                        <h1 id="hero-heading" className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                            {heroContent.heading}
                        </h1>
                        <p className="mt-5 text-base leading-7 text-slate-300">
                            {heroContent.description}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="rainbow relative z-0 flex items-center justify-center overflow-hidden rounded-full p-0.5 transition duration-300 hover:scale-105 active:scale-100">
                                <Link
                                    to={homeHeroCtas[0].to}
                                    className="rounded-full bg-gray-800 px-8 py-3 text-sm font-medium text-white"
                                >
                                    {homeHeroCtas[0].label}
                                </Link>
                            </div>
                            <Link
                                to={homeHeroCtas[1].to}
                                className="rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                            >
                                {homeHeroCtas[1].label}
                            </Link>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}

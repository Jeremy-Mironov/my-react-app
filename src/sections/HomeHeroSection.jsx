import { Link } from 'react-router-dom'
import { homeHeroContent, homeHeroCtas } from '../assets/dummy-data'
import GradientText from '../components/GradientText'

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
                className="relative isolate flex min-h-[calc(100vh)] items-center overflow-hidden border-b border-slate-800 "
            >
                <div className="align-middle justify-center relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 ">


                    <div
                        className='backdrop-blur-xl text-center rounded-2xl p-6 sm:p-8 lg:col-start-2'>
                        <h1 id="hero-heading" className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                            <GradientText
                                colors={["#3e9bff", "#9bc5ed", "#0048ff"]}
                                animationSpeed={3.5}
                                showBorder={false}
                                className="custom-class"
                            >
                                {heroContent.heading}
                            </GradientText>
                        </h1>
                        <p className="mt-5 text-base leading-7 text-slate-300">
                            {heroContent.description}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3 align-middle justify-evenly">
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

                    <div id="hero-mobile-slot" aria-hidden="true" className="h-[400px] lg:hidden" />

                </div>
            </section >
        </>
    )
}

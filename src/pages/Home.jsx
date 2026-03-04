import { Link, useNavigate } from 'react-router-dom'
import FloatingLines from '../components/FloatingLines'
import LogoLoop from '../components/LogoLoop'
import { ProfileCard } from '../components/ProfileCard'
import { Step, Stepper } from '../components/Stepper'

export default function Home() {
    const navigate = useNavigate()

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
                className="relative isolate flex min-h-[calc(100vh-65px)] items-center overflow-hidden border-b border-slate-800 bg-slate-900/60"
            >
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <FloatingLines
                        enabledWaves={['top', 'middle', 'bottom']}
                        lineCount={4}
                        lineDistance={100}
                        bendRadius={30}
                        bendStrength={15}
                        interactive={true}
                        parallax={true}
                        mixBlendMode="normal"
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
                            <div className="rainbow relative z-0 flex items-center justify-center overflow-hidden rounded-full p-0.5 transition duration-300 hover:scale-105 active:scale-100">
                                <Link
                                    to="/portfolio"
                                    className="rounded-full bg-gray-800 px-8 py-3 text-sm font-medium text-white"
                                >
                                    View Portfolio
                                </Link>
                            </div>
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
                                        <h3 className="text-sm font-semibold text-slate-100">Web Development</h3>
                                        <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
                                            <li>Build responsive websites</li>
                                            <li>Create landing pages</li>
                                            <li>Code with HTML, CSS, JavaScript, PHP</li>
                                            <li>Fix layouts, mobile issues, and basic UI problems</li>
                                        </ul>
                                    </div>
                                </Step>
                                <Step>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-100">WordPress & Website Management</h3>
                                        <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
                                            <li>Build and customize WordPress sites</li>
                                            <li>Update pages, content, and plugins</li>
                                            <li>Create service, portfolio, and business pages</li>
                                            <li>Maintain and improve existing websites</li>
                                        </ul>
                                    </div>
                                </Step>
                                <Step>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-100">Design & Content</h3>
                                        <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
                                            <li>Create simple logos and branding visuals</li>
                                            <li>Design social media graphics, flyers, and banners</li>
                                            <li>Use Figma, Canva, Photoshop, and Illustrator</li>
                                            <li>Write basic website and landing page content</li>
                                        </ul>
                                    </div>
                                </Step>
                                <Step>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-100">SEO & Technical Support</h3>
                                        <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
                                            <li>Do keyword research and improve on-page SEO</li>
                                            <li>Help local businesses improve online visibility</li>
                                            <li>Edit and troubleshoot website code</li>
                                            <li>Work with Git and build small web projects</li>
                                        </ul>
                                    </div>
                                </Step>
                            </Stepper>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-slate-800 bg-slate-950/70">

                <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 iten">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">About Me</h2>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                            I’m a web developer and designer with a strong interest in creating practical,
                            modern websites for businesses and personal brands. My work combines design,
                            front-end development, and SEO to create websites that not only look good, but
                            also perform well.
                        </p>
                        <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
                            <LogoLoop
                                items={[
                                    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/ffffff' },
                                    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/ffffff' },
                                    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' },
                                    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/ffffff' },
                                    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/ffffff' },
                                    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/ffffff' },
                                    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/ffffff' },
                                ]}
                            />
                        </div>
                        <div className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-lg font-bold text-slate-100">5+ Years of Experience</p>
                                <p className="mt-1 text-sm text-slate-400">freelance design/web work since 2021</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-lg font-bold text-slate-100">6+ Technical Skills</p>
                                <p className="mt-1 text-sm text-slate-400">HTML, CSS, JavaScript, PHP, Python, C#/SQL depending on how you list them</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-lg font-bold text-slate-100">2 Degrees / Programs</p>
                                <p className="mt-1 text-sm text-slate-400">Bachelor’s in Computer Science + Web Development AAT</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <p className="text-lg font-bold text-slate-100">10+ Tools Used</p>
                                <p className="mt-1 text-sm text-slate-400">WordPress, Git/GitHub, Figma, Canva, Photoshop, VS Code, etc.</p>
                            </div>
                        </div>
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

            <section className="border-b border-slate-800 bg-slate-900/40">
                <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">Services</h2>
                        <p className="mt-3 max-w-2xl text-base text-slate-400">
                            I offer a range of services to help your business succeed online, from building modern websites to optimizing for search engines.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group rounded-lg border border-slate-800 bg-slate-900/60 overflow-hidden transition hover:border-slate-700 hover:bg-slate-900/80 flex flex-col">
                            <div className="h-40 bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" alt="Web Development" className="w-full h-full object-cover group-hover:scale-105 transition" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-slate-100">Web Development</h3>
                                <p className="mt-2 text-sm text-slate-400 flex-1">
                                    Build responsive websites with modern technologies. HTML, CSS, JavaScript, and PHP.
                                </p>
                                <Link to="/portfolio" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition">
                                    Read More <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>

                        <div className="group rounded-lg border border-slate-800 bg-slate-900/60 overflow-hidden transition hover:border-slate-700 hover:bg-slate-900/80 flex flex-col">
                            <div className="h-40 bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1563070905-8f9d187d0d57?w=400&h=300&fit=crop" alt="WordPress" className="w-full h-full object-cover group-hover:scale-105 transition" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-slate-100">WordPress</h3>
                                <p className="mt-2 text-sm text-slate-400 flex-1">
                                    Build and maintain WordPress sites. Content updates, customization, and plugin management.
                                </p>
                                <Link to="/portfolio" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition">
                                    Read More <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>

                        <div className="group rounded-lg border border-slate-800 bg-slate-900/60 overflow-hidden transition hover:border-slate-700 hover:bg-slate-900/80 flex flex-col">
                            <div className="h-40 bg-linear-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop" alt="Design & Branding" className="w-full h-full object-cover group-hover:scale-105 transition" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-slate-100">Design & Branding</h3>
                                <p className="mt-2 text-sm text-slate-400 flex-1">
                                    Create logos, graphics, and branding materials. Figma, Canva, and Photoshop expertise.
                                </p>
                                <Link to="/portfolio" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition">
                                    Read More <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>

                        <div className="group rounded-lg border border-slate-800 bg-slate-900/60 overflow-hidden transition hover:border-slate-700 hover:bg-slate-900/80 flex flex-col">
                            <div className="h-40 bg-linear-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1554224311-beee415c15b7?w=400&h=300&fit=crop" alt="SEO & Technical" className="w-full h-full object-cover group-hover:scale-105 transition" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-slate-100">SEO & Technical</h3>
                                <p className="mt-2 text-sm text-slate-400 flex-1">
                                    Improve search visibility, fix technical issues, and optimize for performance.
                                </p>
                                <Link to="/about" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition">
                                    Read More <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { footerContacts, footerTemplate, layoutCta, layoutNavLinks } from '../assets/dummy-data'
import FloatingLines from './FloatingLines'

function navLinkClass({ isActive }) {
    return `px-4 py-2 ${isActive
        ? 'bg-blue-500/15 text-blue-500 border border-blue-500/40 font-medium rounded-full'
        : 'text-slate-300 hover:bg-blue-500/10 hover:text-blue-500 rounded-full'
        }`
}

export function SiteLayout() {
    const currentYear = new Date().getFullYear()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="relative isolate flex min-h-screen flex-col bg-slate-950 text-slate-100">
            <div className=" fixed inset-0 z-0" aria-hidden="true">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={4}
                    lineDistance={100}
                    bendRadius={30}
                    bendStrength={15}
                    interactive={false}
                    parallax={true}
                    mixBlendMode="normal"
                />
            </div>


            <header className="fixed top-0 left-0 z-50 w-full ">
                <nav className="bg-slate-950/55 backdrop-blur-xl mx-auto my-2 flex w-full max-w-4xl items-center justify-between rounded-full border border-slate-700/70 px-4 py-2.5 text-white shadow-[0_0_0_1px_rgba(37,99,235,0.08),0_10px_35px_rgba(2,6,23,0.45)]">
                    <a href="/">
                        <svg width="50" height="40" viewBox="0 0 256 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="jGrad" x1="58" y1="34" x2="58" y2="162" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#FF5B7A" />
                                    <stop offset="0.55" stop-color="#E33A97" />
                                    <stop offset="1" stop-color="#8B33CC" />
                                </linearGradient>

                                <linearGradient id="warmGrad" x1="104" y1="34" x2="150" y2="82" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#FF5E7A" />
                                    <stop offset="1" stop-color="#FF9A3D" />
                                </linearGradient>

                                <linearGradient id="coolGrad" x1="132" y1="142" x2="220" y2="34" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#159FD1" />
                                    <stop offset="1" stop-color="#46E7FF" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M76 34V132C76 150 63 162 46 162H40"
                                stroke="url(#jGrad)"
                                stroke-width="18"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <path
                                d="M104 34L148 80"
                                stroke="url(#warmGrad)"
                                stroke-width="16"
                                stroke-linecap="square"
                            />

                            <path
                                d="M132 142L194 72"
                                stroke="url(#coolGrad)"
                                stroke-width="16"
                                stroke-linecap="square"
                            />

                            <path
                                d="M218 34V150"
                                stroke="url(#coolGrad)"
                                stroke-width="18"
                                stroke-linecap="square"
                            />
                        </svg>
                    </a>
                    <div
                        id="menu"
                        className={`absolute top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-2 bg-black/70 backdrop-blur transition-all duration-300 md:static md:h-auto md:w-auto md:flex-row md:bg-transparent md:backdrop-blur-none ${isMobileMenuOpen ? 'left-0' : '-left-full'
                            }`}
                    >
                        {layoutNavLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={navLinkClass}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <button onClick={() => setIsMobileMenuOpen(false)} className="aspect-square rounded-md bg-blue-500/15 p-2 font-medium text-blue-500 transition hover:bg-blue-500/25 md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
                        <svg className="size-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button className="hidden rounded-full bg-blue-500 px-4 py-2 text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition hover:bg-blue-400 md:block">
                        {layoutCta[0]}
                    </button>
                </nav>

            </header>

            <main className="relative z-20 flex-1">
                <Outlet />
            </main>

            <footer className="relative z-20 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p className="text-slate-300">© {currentYear} {footerTemplate[0]}</p>
                    <div className="flex items-center gap-4 text-slate-400">
                        {footerContacts.map((contact) => (
                            <a key={contact.href} href={contact.href} className="transition hover:text-slate-100">
                                {contact.value}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}

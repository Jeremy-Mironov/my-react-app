import { NavLink, Outlet } from 'react-router-dom'

function navLinkClass({ isActive }) {
    return `rounded-md px-3 py-2 text-sm font-medium transition ${isActive
        ? 'bg-slate-800 text-white'
        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        }`
}

export function SiteLayout() {
    const currentYear = new Date().getFullYear()

    return (
        <div className="relative flex min-h-screen flex-col bg-slate-950 text-slate-100">
            <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold tracking-wide text-slate-100">Web & SEO Specialist</p>
                    <nav className="flex items-center gap-1">
                        <NavLink to="/" end className={navLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                        <NavLink to="/portfolio" className={navLinkClass}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="border-t border-slate-800 bg-slate-950/90">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p className="text-slate-300">© {currentYear} Web & SEO Specialist. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-slate-400">
                        <a href="mailto:hello@example.com" className="transition hover:text-slate-100">
                            hello@example.com
                        </a>
                        <a href="tel:+1234567890" className="transition hover:text-slate-100">
                            +1 (234) 567-890
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

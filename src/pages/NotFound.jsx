import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
    const { pathname } = useLocation()

    return (
        <section className="h-screen flex items-center border-y border-slate-800/80 ">
            <div className=" mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="backdrop-blur-xl rounded-2xl  p-8 sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">404</p>
                    <h1 className="mt-2 text-3xl font-semibold text-slate-100 sm:text-4xl">Page not found</h1>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                        The URL <span className="font-medium text-slate-200">{pathname}</span> doesn\'t exist on this site.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/"
                            className="inline-flex items-center rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20"
                        >
                            Go to Home
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/70"
                        >
                            View Portfolio
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/70"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Contact() {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Let’s work together</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                Send a message with your project goals, timeline, and business type. I’ll reply with a
                practical plan for your website and digital growth.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <form className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">Name</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-slate-500"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-slate-500"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">Message</span>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project"
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-slate-500"
                        />
                    </label>
                    <button
                        type="submit"
                        className="rounded-md bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-white"
                    >
                        Send Message
                    </button>
                </form>

                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-100">Direct contact</h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                        <li>
                            Email:{' '}
                            <a className="text-slate-100 underline" href="mailto:hello@example.com">
                                hello@example.com
                            </a>
                        </li>
                        <li>
                            Phone:{' '}
                            <a className="text-slate-100 underline" href="tel:+1234567890">
                                +1 (234) 567-890
                            </a>
                        </li>
                        <li>
                            LinkedIn:{' '}
                            <a
                                className="text-slate-100 underline"
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/yourprofile
                            </a>
                        </li>
                        <li>
                            GitHub:{' '}
                            <a
                                className="text-slate-100 underline"
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/yourprofile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

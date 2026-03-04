import { contactLinks, contactPageContent } from '../../assets/dummy-data'

const contactContent = contactPageContent[0]

export function ContactMainSection() {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">{contactContent.badge}</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{contactContent.heading}</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                {contactContent.description}
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <form className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.35)]">
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">{contactContent.labels[0]}</span>
                        <input
                            type="text"
                            name="name"
                            placeholder={contactContent.placeholders[0]}
                            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-blue-500/50"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">{contactContent.labels[1]}</span>
                        <input
                            type="email"
                            name="email"
                            placeholder={contactContent.placeholders[1]}
                            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-blue-500/50"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">{contactContent.labels[2]}</span>
                        <textarea
                            name="message"
                            rows={5}
                            placeholder={contactContent.placeholders[2]}
                            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-blue-500/50"
                        />
                    </label>
                    <button
                        type="submit"
                        className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition hover:bg-blue-400"
                    >
                        {contactContent.submitText}
                    </button>
                </form>

                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.35)]">
                    <h3 className="text-lg font-semibold text-slate-100">{contactContent.directTitle}</h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                        {contactLinks.map((link) => (
                            <li key={link.label}>
                                {link.label}:{' '}
                                <a
                                    className="text-slate-100 underline"
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                                >
                                    {link.value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

import { useState } from 'react'
import { contactLinks, contactPageContent } from '../assets/dummy-data'

const contactContent = contactPageContent[0]

export function ContactMainSection() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({ type: 'idle', message: '' })

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formElement = event.currentTarget
        const formData = new FormData(formElement)

        const payload = {
            name: String(formData.get('name') || '').trim(),
            email: String(formData.get('email') || '').trim(),
            message: String(formData.get('message') || '').trim(),
        }

        if (!payload.name || !payload.email || !payload.message) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all fields.' })
            return
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(payload.email)) {
            setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' })
            return
        }

        try {
            setIsSubmitting(true)
            setSubmitStatus({ type: 'idle', message: '' })

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const contentType = response.headers.get('content-type') || ''
            let responseData = {}

            if (contentType.includes('application/json')) {
                responseData = await response.json().catch(() => ({}))
            } else {
                const responseText = await response.text().catch(() => '')
                responseData = { error: responseText }
            }

            if (!response.ok) {
                throw new Error(
                    responseData?.error ||
                    'Failed to send message. If you are testing locally, run with `vercel dev` or deploy to Vercel.'
                )
            }

            setSubmitStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
            formElement.reset()
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="backdrop-blur-xl p-5 rounded-xl ">
                {contactContent.description}
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <form
                    onSubmit={handleSubmit}
                    className="backdrop-blur-xl space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.35)]"
                >
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">{contactContent.labels[0]}</span>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder={contactContent.placeholders[0]}
                            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-blue-500/50"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">{contactContent.labels[1]}</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder={contactContent.placeholders[1]}
                            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-blue-500/50"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-sm font-medium text-slate-300">{contactContent.labels[2]}</span>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            placeholder={contactContent.placeholders[2]}
                            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-blue-500/50"
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSubmitting ? 'Sending...' : contactContent.submitText}
                    </button>

                    {submitStatus.type !== 'idle' && (
                        <p
                            className={`text-sm ${submitStatus.type === 'success' ? 'text-emerald-300' : 'text-rose-300'
                                }`}
                        >
                            {submitStatus.message}
                        </p>
                    )}
                </form>

                <div className="backdrop-blur-xl rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.35)]">
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

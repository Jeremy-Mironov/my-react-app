import nodemailer from 'nodemailer'

const CONTACT_TO = 'jeremymironov@gmail.com'

const escapeHtml = (value = '') =>
    value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { name, email, message } = req.body || {}

    const trimmedName = String(name || '').trim()
    const trimmedEmail = String(email || '').trim()
    const trimmedMessage = String(message || '').trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
        return res.status(400).json({ error: 'Name, email, and message are required.' })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(trimmedEmail)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailAppPassword) {
        return res.status(500).json({
            error: 'Server email credentials are not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.',
        })
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailUser,
                pass: gmailAppPassword,
            },
        })

        await transporter.sendMail({
            from: `Portfolio Contact <${gmailUser}>`,
            to: CONTACT_TO,
            replyTo: trimmedEmail,
            subject: `New contact form message from ${trimmedName}`,
            text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
            html: `
                <h2>New portfolio contact message</h2>
                <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
                <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(trimmedMessage).replaceAll('\n', '<br/>')}</p>
            `,
        })

        return res.status(200).json({ ok: true })
    } catch {
        return res.status(500).json({ error: 'Unable to send message right now. Please try again later.' })
    }
}

import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !email) {
        return Response.json({ error: 'Brakuje wymaganych pól.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE !== 'false',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: `"EMS.HOUSE Formularz" <${process.env.SMTP_FROM}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: email,
        subject: `Nowa wiadomość od ${name}`,
        html: `
            <h2>Nowa wiadomość z formularza kontaktowego</h2>
            <p><strong>Imię i nazwisko:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Wiadomość:</strong></p>
            <p>${message || '—'}</p>
        `,
    });

    return Response.json({ success: true });
}

import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()
    const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM,
      subject: `Contact from ${body.name}`,
      text: `${body.name} (${body.email})\n\n${body.message}`
    })
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500 })
  }
}

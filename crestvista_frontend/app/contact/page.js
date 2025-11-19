import { ContactForm } from '../../components/ContactForm'
export default function ContactPage() {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="space-y-4 text-lg">
        <p>📞 0758625209 / 0739944751</p>
        <p>📧 info@crestvistapropertiesltd.co.ke</p>
        <p>📍 Lonak Business Center, Kasarani, Nairobi</p>
      </div>
      <ContactForm />
    </div>
  )
}

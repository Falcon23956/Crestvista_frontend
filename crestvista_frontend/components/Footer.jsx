export default function Footer(){
  return (
    <footer className="bg-[#0C0F14] text-white mt-20 py-10 px-6 border-t border-[#D4AF37]/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <img src="/crestvista-logo.png" className="w-14 mb-3" />
          <h2 className="text-xl font-semibold">Crestvista Properties LTD</h2>
          <p className="text-sm opacity-80 mt-2">Where Value Meets Excellence.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p>Phone: 0758625209 / 0739944751</p>
          <p>WhatsApp: 0758625209</p>
          <p>Email: info@crestvistapropertiesltd.co.ke</p>
          <p>Location: Lonak Business Center, Kasarani, Nairobi</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs opacity-60 mt-10">© 2025 Crestvista Properties LTD. All rights reserved.</p>
    </footer>
  )
}

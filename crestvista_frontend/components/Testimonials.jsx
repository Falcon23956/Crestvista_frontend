export default function Testimonials(){
  const items = [
    { name: "Grace M.", text: "Very professional and honest. Found my apartment in 2 days!" },
    { name: "Samuel K.", text: "Their listings are verified and the process was smooth." },
    { name: "Diane W.", text: "Highly recommended for land investment and advisory services." }
  ]
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {items.map((t,i)=>(
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
            <h4 className="font-semibold text-[#0C0F14]">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

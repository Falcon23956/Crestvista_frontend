'use client'
import { useState } from 'react'
export function ContactForm(){
  const [s, setS] = useState({name:'', email:'', message:''})
  async function submit(e){ e.preventDefault(); await fetch('/api/contact', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(s)}); alert('Sent') }
  return (
    <form onSubmit={submit} className="grid gap-4">
      <input required placeholder="Name" value={s.name} onChange={e=>setS({...s,name:e.target.value})} className="p-3 border rounded" />
      <input required placeholder="Email" value={s.email} onChange={e=>setS({...s,email:e.target.value})} className="p-3 border rounded" />
      <textarea required placeholder="Message" value={s.message} onChange={e=>setS({...s,message:e.target.value})} className="p-3 border rounded h-32" />
      <button className="bg-[#D4AF37] text-black px-4 py-2 rounded">Send</button>
    </form>
  )
}

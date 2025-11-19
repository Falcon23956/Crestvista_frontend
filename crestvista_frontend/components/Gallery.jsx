'use client'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useState } from 'react'
export default function Gallery({ images }){
  const [open, setOpen] = useState(false)
  const slides = (images || []).map(i => ({ src: i.url }))
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {(images || []).map((img,i) => (
          <img key={i} src={img.url} onClick={()=>setOpen(true)} className="rounded-lg cursor-pointer h-40 w-full object-cover" />
        ))}
      </div>
      {open && <Lightbox open={open} close={()=>setOpen(false)} slides={slides} />}
    </div>
  )
}

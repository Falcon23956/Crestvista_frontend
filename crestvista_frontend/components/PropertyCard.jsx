import Link from 'next/link'
export default function PropertyCard({ property }){
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <img src={property.images?.[0]?.url || '/placeholder.jpg'} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{property.location}</p>
        <p className="font-bold text-[#D4AF37] text-lg">KES {property.price}</p>
        <Link href={`/properties/${property.slug?.current}`} className="block mt-4 w-full text-center bg-[#0C0F14] text-white py-2 rounded-md">View Details</Link>
      </div>
    </div>
  )
}

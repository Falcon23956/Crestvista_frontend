import { client } from '../../lib/sanityClient'
import PropertyCard from '../../components/PropertyCard'

export default async function Properties() {
  const properties = await client.fetch(`*[_type == "property"]`)
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p) => <PropertyCard key={p._id} property={p} />)}
      </div>
    </div>
  )
}

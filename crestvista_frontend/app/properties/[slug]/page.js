import { client } from '../../../lib/sanityClient'
import Gallery from '../../../components/Gallery'

export default async function PropertyPage({ params }) {
  const { slug } = params
  const data = await client.fetch(`*[_type == "property" && slug.current == $slug][0]`, { slug })
  if(!data) return <div className="p-6">Property not found</div>
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <Gallery images={data.images || []} />
      <p className="mt-4 text-lg">{data.description}</p>
      <p className="mt-2 text-xl font-semibold text-[#D4AF37]">KES {data.price}</p>
    </div>
  )
}

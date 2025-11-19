import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import PropertyCard from '../components/PropertyCard'
import { client } from '../lib/sanityClient'

export default async function Home() {
  const properties = await client.fetch(`*[_type == "property"] | order(_createdAt desc)`)
  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {properties.map((p) => <PropertyCard key={p._id} property={p} />)}
      </section>
      <Testimonials />
    </div>
  );
}

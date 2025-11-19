export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'price', type: 'string' },
    { name: 'location', type: 'string' },
    { name: 'category', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'images', type: 'array', of: [{ type: 'image' }] }
  ]
}

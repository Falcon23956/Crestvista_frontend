import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'ufbdvx3p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});

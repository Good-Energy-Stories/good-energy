import sanityClient from '@sanity/client';
export default sanityClient({
  projectId: 'jkhcjumj',
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: true,
  apiVersion: '2021-08-31',
  token: process.env.SANITY_API_TOKEN,
});

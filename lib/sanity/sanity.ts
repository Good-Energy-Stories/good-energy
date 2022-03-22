import sanityClient from '@sanity/client';
export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

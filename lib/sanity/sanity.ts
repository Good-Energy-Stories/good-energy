import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ancrfj29',
  dataset: 'production',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

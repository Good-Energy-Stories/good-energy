import { sanity } from '../../../lib/sanity';
import { queries } from '../../../data';

import SpotlightPage from '../../../components/SpotlightPage/SpotlightPage';

export const getStaticPaths = async () => {
  const characterProfiles = await sanity.fetch(
    queries.characterProfilePathsQuery,
  );

  const paths = characterProfiles.map((characterProfile) => ({
    params: { slug: characterProfile.slug.current },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const pageData = await sanity.fetch(queries.characterProfileQuery, {
    slug: params.slug,
  });
  return { props: { pageData } };
};

export default SpotlightPage;

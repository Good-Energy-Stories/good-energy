import { sanity } from '../../../lib/sanity';
import { queries } from '../../../data';
import SpotlightPage from '../../../components/SpotlightPage/SpotlightPage';

export const getStaticPaths = async () => {
  const expertProfiles = await sanity.fetch(queries.expertProfilePathsQuery);

  const paths = expertProfiles.map((expertProfile) => ({
    params: { slug: expertProfile.slug.current },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const pageData = await sanity.fetch(queries.expertProfileQuery, {
    slug: params.slug,
  });
  return { props: { pageData } };
};

export default SpotlightPage;

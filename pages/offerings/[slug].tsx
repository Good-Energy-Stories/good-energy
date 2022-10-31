import OfferingsPage from '../../components/Offerings/OfferingsPage';
import { queries } from '../../data';
import { sanity } from '../../lib/sanity';

export default OfferingsPage;

export const getStaticProps = async ({ params }) => {
  const pageData = await sanity.fetch(queries.offeringsPageQuery, {
    slug: params.slug,
  });

  return {
    props: { pageData },
  };
};

export const getStaticPaths = async () => {
  const offeringsPagePaths = await sanity.fetch(
    queries.offeringsPagePathsQuery,
  );
  const paths = offeringsPagePaths.map((page) => ({
    params: { slug: page.slug.current },
  }));

  return { paths, fallback: false };
};

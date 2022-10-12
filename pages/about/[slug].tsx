import AboutPage from '../../components/About/AboutPage';
import { queries } from '../../data';
import { sanity } from '../../lib/sanity';

export default AboutPage;

export const getStaticProps = async ({ params }) => {
  const pageData = await sanity.fetch(queries.aboutPageQuery, {
    slug: params.slug,
  });

  return {
    props: { pageData },
  };
};

export const getStaticPaths = async () => {
  const aboutPagePaths = await sanity.fetch(queries.aboutPagePathsQuery);
  console.log(aboutPagePaths);
  const paths = aboutPagePaths.map((page) => ({
    params: { slug: page.slug.current },
  }));

  return { paths, fallback: false };
};

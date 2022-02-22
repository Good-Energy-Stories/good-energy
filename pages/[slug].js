import Layout from "../components/Layout";
import Meta from "../components/Meta";
import sanity from "../lib/sanity";

const Project = ({ episode }) => {
  return (
    <>
      <Meta />
      <Layout>{episode.title}</Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = episodes.map((episode) => ({
    params: {},
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const episode = await sanity.fetch(query, { slug: params.slug });

  return { props: { episode } };
};

export default Project;

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { sanity } from '../lib/sanity';

const Project = ({}) => {
  return (
    <>
      <Meta />
      <Layout>{}</Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = [];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return { props: {} };
};

export default Project;

import { sanity } from '../lib/sanity';
import { queries } from '../data';
import { Layout, Meta } from '../components';
import { Title, Divider, Section } from '../components/Article';
import { Footer } from '../components/Footer';

const Project = ({ article }) => {
  console.log('Article: ', article);
  const { title, body } = article;
  return (
    <>
      <Meta />
      <Layout key={article.slug}>
        <Title title={title} />
        <Divider />
        {body.map((c, i) => (
          <Section key={i} index={i} content={c} />
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const episodes = await sanity.fetch(queries.articlePathsQuery);
  const paths = episodes.map((episode) => ({
    params: { slug: episode.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const article = await sanity.fetch(queries.articleQuery, {
    slug: params.slug,
  });
  return { props: { article } };
};

export default Project;

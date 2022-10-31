import { queries } from '../../data';
import { Meta } from '../../components';
import Related from '../../components/Related/Related';
import { getClient } from '../../lib/sanity/sanity.server';
import Layout from '../../components/Layout/Layout';
import AuthorSection from '../../components/Article/AuthorSection/AuthorSection';
import NextUp from '../../components/NextUp/NextUp';
import TwoWorldsPage from '../../components/TwoWorlds/TwoWorldsPage';

export enum ActiveSide {
  rise = 'rise',
  collapse = 'collapse',
}

const Project = ({ data }: { data: any }) => {
  return (
    <>
      <Meta />
      <Layout key="two-worlds">
        <TwoWorldsPage data={data} />
        <AuthorSection content={data?.author} />
        {data?.nextUp && (
          <NextUp
            label={data?.nextUp?.title}
            href={data?.nextUp?.slug.current}
          />
        )}
        <Related content={data?.related} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getClient().fetch(queries.twoWorldsArticleQuery);

  return {
    props: {
      data,
    },
  };
};

export default Project;

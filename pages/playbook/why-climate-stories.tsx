import { queries } from '../../data';
import { Meta } from '../../components';

import { observer } from 'mobx-react-lite';
import Related from '../../components/Related/Related';
import { getClient } from '../../lib/sanity/sanity.server';

import Layout from '../../components/Layout/Layout';
import AuthorSection from '../../components/Article/AuthorSection/AuthorSection';
import NextUp from '../../components/NextUp/NextUp';
import Header from '../../components/WhyClimateStories/Header/Header';
import PageContent from '../../components/WhyClimateStories/PageContent';

const Project = observer(({ data }: { data: any }) => {
  return (
    <>
      <Meta />

      <Layout key="two-worlds">
        <Header title={data?.title} subtitle={data?.subtitle} />
        {data?.content?.map((c, i) => {
          return <PageContent key={i} content={c} index={i} />;
        })}
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
});

export const getStaticProps = async () => {
  const data = await getClient().fetch(queries.whyClimateArticle);

  return {
    props: {
      data,
    },
  };
};

export default Project;

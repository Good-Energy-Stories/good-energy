import { queries } from '../../data';
import { Meta, ExitPreviewButton } from '../../components';

import { getClient } from '../../lib/sanity/sanity.server';
import { usePreviewSubscription } from '../../lib/sanity/sanity';
import filterDataToSingleItem from '../../utils/filterDataToSingleItem';
import { imageUrlFor } from '../../utils/imageUrlFor';
import Layout from '../../components/Layout/Layout';
import Related from '../../components/Related/Related';
import ArticleBody from '../../components/Article/Article';
import MobileFootnotes from '../../components/Article/Footnotes/MobileFootnotes';
import NextUp from '../../components/NextUp/NextUp';

const Project = ({ data, preview }: { data: any; preview: boolean }) => {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const article = filterDataToSingleItem(previewData, preview);

  const { title, lede, slug, heroImage, nextUp, footnotes } = article;
  return (
    <>
      <Meta
        title={title}
        image={heroImage ? imageUrlFor(heroImage).width(500).url() : null}
        slug={slug}
        description={lede}
      />
      <Layout key={article.slug}>
        <ArticleBody data={article} />
        {nextUp && <NextUp label={nextUp?.title} href={nextUp?.slug.current} />}
        <Related content={article?.related} />
        <MobileFootnotes footnotes={footnotes} />
      </Layout>
      <ExitPreviewButton
        href={{
          pathname: '/api/exitArticlePreview',
          query: { slug: article.slug },
        }}
        preview={preview}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const articles = await getClient().fetch(queries.articlePathsQuery);

  const paths = articles.map((article) => ({
    params: { slug: article.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(
    queries.articleQuery,
    queryParams,
  );

  if (!data) return { notFound: true };

  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { page, query: queries.articleQuery, queryParams },
    },
  };
};

export default Project;

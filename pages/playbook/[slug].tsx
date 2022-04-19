import { queries } from '../../data';
import {
  Layout,
  StickyNavBar,
  NavBarStyles,
  Meta,
  ExitPreviewButton,
} from '../../components';
import {
  Header,
  Divider,
  TOC,
  SectionRefLookup,
  Body,
  Introduction,
  Banner,
  AuthorSection,
  NextUp,
  MobileFootnotes,
} from '../../components/Article';
import { Footer } from '../../components/Footer';
import { useEffect, useRef } from 'react';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import Related from '../../components/Related';
import { getClient } from '../../lib/sanity/sanity.server';
import { usePreviewSubscription } from '../../lib/sanity/sanity';
import filterDataToSingleItem from '../../utils/filterDataToSingleItem';
import { AuthorCard } from '../../components/Cards';
import { imageUrlFor } from '../../utils/imageUrlFor';

const Project = observer(
  ({ data, preview }: { data: any; preview: boolean }) => {
    const { data: previewData } = usePreviewSubscription(data?.query, {
      params: data?.queryParams ?? {},
      initialData: data?.page,
      enabled: preview,
    });

    const article = filterDataToSingleItem(previewData, preview);

    const {
      title,
      byline,
      lede,
      slug,
      seo,
      introduction,
      body,
      heroImage,
      section,
      footnotes,
      relatedSubsection,
    } = article;
    const sectionsRef = useRef<SectionRefLookup>({});

    const sectionsTOC = body
      ?.filter((e) => e._type === 'articleSection')
      .map((e) => ({ key: e._key, title: e.title }));

    const store = useStore();
    const {
      uiStore: { scrollPosition },
    } = store;

    const navMode =
      heroImage && scrollPosition < 0.05
        ? NavBarStyles.light
        : NavBarStyles.dark;
    return (
      <>
        <Meta
          title={title}
          image={heroImage ? imageUrlFor(heroImage).width(500).url() : null}
          slug={slug}
          description={lede}
        />
        <StickyNavBar label="Playbook Contents" mode={navMode} />
        <Layout key={article.slug}>
          <Banner image={heroImage} />
          <Header
            title={title}
            byline={byline}
            hasBannerImage={heroImage ? true : false}
            section={section}
          />
          <Divider />
          <TOC sections={sectionsTOC} sectionsRef={sectionsRef} />
          <Introduction body={article?.introduction} />
          <Body body={article?.body} sectionsRef={sectionsRef} />

          <AuthorSection content={article?.author} />
          <NextUp article={article?.nextUp} />
          <Related content={article?.related} />
          <MobileFootnotes footnotes={footnotes} />
        </Layout>
        <Footer />
        <ExitPreviewButton
          href={{
            pathname: '/api/exitArticlePreview',
            query: { slug: article.slug },
          }}
          preview={preview}
        />
      </>
    );
  },
);

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

import { sanity } from '../lib/sanity';
import { queries } from '../data';
import {
  Layout,
  StickyNavBar,
  NavBarStyles,
  Meta,
  Breadcrumbs,
} from '../components';
import {
  Header,
  Divider,
  Section,
  TOC,
  SectionRefLookup,
  SectionTOC,
  SectionsTOC,
  Body,
  Banner,
} from '../components/Article';
import { Footer } from '../components/Footer';
import { useRef, useEffect, RefObject } from 'react';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

const Project = observer(({ article }: { article: any }) => {
  const { title, byline, introduction, body, heroImage } = article;

  const sectionsRef = useRef<SectionRefLookup>({});

  const sectionsTOC = body
    ?.filter((e) => e._type === 'articleSection')
    .map((e) => ({ key: e._key, title: e.title }));

  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;
  const navMode =
    scrollPosition > 0.05 ? NavBarStyles.dark : NavBarStyles.light;
  return (
    <>
      <Meta />
      <StickyNavBar label="Playbook Contents" mode={navMode} />
      <Layout key={article.slug}>
        <Banner image={heroImage} />
        <Header title={title} byline={byline} />
        <Divider />
        <TOC sections={sectionsTOC} sectionsRef={sectionsRef} />
        <Body body={[...introduction, ...body]} sectionsRef={sectionsRef} />
      </Layout>
      <Footer />
    </>
  );
});

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

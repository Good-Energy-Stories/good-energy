import { sanity } from '../lib/sanity';
import { queries } from '../data';
import { Layout, Meta, Breadcrumbs } from '../components';
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
import { PlaybookStickyNavBar } from '../components/Playbook';

const Project = ({ article }) => {
  const { title, byline, body, heroImage } = article;

  const sectionsRef = useRef<SectionRefLookup>({});

  const sectionsTOC = body
    .filter((e) => e._type === 'articleSection')
    .map((e) => ({ key: e._key, title: e.title }));

  return (
    <>
      <Meta />
      <PlaybookStickyNavBar />
      <Layout key={article.slug}>
        <Banner image={heroImage} />
        <Header title={title} byline={byline} />
        <Divider />
        <TOC sections={sectionsTOC} sectionsRef={sectionsRef} />
        <Body body={body} sectionsRef={sectionsRef} />
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

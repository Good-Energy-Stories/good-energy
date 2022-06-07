import { queries } from '../../data';
import {
  Layout,
  StickyNavBar,
  NavBarStyles,
  Meta,
  ExitPreviewButton,
} from '../../components';
import {
  Divider,
  TOC,
  SectionRefLookup,
  Body,
  Introduction,
  Banner,
  AuthorSection,
  NextUp,
} from '../../components/Article';
import { Footer } from '../../components/Footer';
import { useEffect, useRef } from 'react';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import Related from '../../components/Related';
import { getClient } from '../../lib/sanity/sanity.server';

import { Header, PageContent } from '../../components/WhyClimateStories';

const Project = observer(({ pageData }: { pageData: any }) => {
  const store = useStore();
  const {
    uiStore: {
      scrollPosition,
      setBorderColor,
      setTextColor,
      setBackgroundColor,
    },
  } = store;

  useEffect(() => {
    setBorderColor('var(--pink)');
    setBackgroundColor('var(--black)');
    setTextColor('var(--white)');
    return () => {
      setBorderColor('var(--pink)');
      setBackgroundColor('var(--blueFive)');
      setTextColor('var(--black)');
    };
  }, [setBorderColor, setBackgroundColor, setTextColor]);

  return (
    <>
      <Meta />
      <StickyNavBar mode={NavBarStyles.light} />
      <Layout key="two-worlds">
        <Header title={pageData?.title} subtitle={pageData?.subtitle} />
        {pageData?.content?.map((c, i) => {
          return <PageContent key={i} content={c} index={i} />;
        })}
        <AuthorSection content={pageData?.author} />
        <NextUp article={pageData?.nextUp} />
        <Related content={pageData?.related} />
      </Layout>
      <Footer />
    </>
  );
});

export const getStaticProps = async () => {
  const pageData = await getClient().fetch(queries.whyClimateArticle);

  return {
    props: {
      pageData,
    },
  };
};

export default Project;

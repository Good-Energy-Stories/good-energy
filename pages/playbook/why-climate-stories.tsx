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
import { usePreviewSubscription } from '../../lib/sanity/sanity';
import filterDataToSingleItem from '../../utils/filterDataToSingleItem';
import { AuthorCard } from '../../components/Cards';
import { PageContent, Header } from '../../components/TwoWorlds';

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
    setBorderColor('var(--blueBorder)');
    setBackgroundColor('var(--black)');
    setTextColor('var(--white)');
    return () => {
      setBorderColor('var(--pink)');
      setBackgroundColor('var(--blueFive)');
      setTextColor('var(--black)');
    };
  }, [setBorderColor, setBackgroundColor, setTextColor]);

  console.log(pageData);
  return (
    <>
      <Meta />
      <StickyNavBar mode={NavBarStyles.light} />
      <Layout key="two-worlds">
        <AuthorSection content={pageData?.author} />
        <NextUp article={pageData?.nextUp} />
        <Related content={pageData?.related} />
      </Layout>
      <Footer />
    </>
  );
});

export const getStaticProps = async () => {
  const pageData = await getClient().fetch(queries.twoWorldsArticleQuery);

  return {
    props: {
      pageData,
    },
  };
};

export default Project;

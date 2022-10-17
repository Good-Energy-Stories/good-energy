import { queries } from '../../data';
import { Meta } from '../../components';
import { AuthorSection, NextUp } from '../../components/Article';
import { Footer } from '../../components/Footer';
import { useEffect, useRef } from 'react';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import Related from '../../components/Related/Related';
import { getClient } from '../../lib/sanity/sanity.server';

import {
  PageContent,
  Header,
  Section,
  SingleSection,
  Controls,
} from '../../components/TwoWorlds';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

export enum ActiveSide {
  rise = 'rise',
  collapse = 'collapse',
}

const Project = observer(({ pageData }: { pageData: any }) => {
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;

  const [activeSide, setActiveSide] = useState(
    pageData?.initialSection ?? ActiveSide.rise,
  );

  return (
    <>
      <Meta />

      <Layout key="two-worlds">
        <Header title={pageData?.title} smallTitle={pageData?.smallTitle} />
        <SingleSection data={{ body: pageData?.description }} />
        {pageData?.content?.map((c, i) => {
          return (
            <PageContent
              key={i}
              content={c}
              index={i}
              activeSide={activeSide}
            />
          );
        })}
        <AuthorSection content={pageData?.author} />
        <NextUp article={pageData?.nextUp} />
        <Related content={pageData?.related} />
        <Controls
          activeSide={activeSide}
          setActiveSide={setActiveSide}
          visible={scrollPosition > 0.1 && scrollPosition < 0.94}
        />
      </Layout>
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

import { sanity } from '../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import { getClient } from '../lib/sanity/sanity.server';
import { groq } from 'next-sanity';
import { usePreviewSubscription } from '../lib/sanity/sanity';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../stores/store';
import {
  Layout,
  Masthead,
  Meta,
  PageBanner,
  NavBarStyles,
} from '../components';
import { PageContent, StickyNavBar, Header } from '../components/Landing';
import { queries } from '../data';
import { Footer } from '../components/Footer';
import { observer } from 'mobx-react-lite';

const Root = observer(
  ({
    data,
    playbookStructure,
    preview,
  }: {
    data: any;
    playbookStructure: any;
    preview: boolean;
  }) => {
    console.log(playbookStructure);
    const { data: pageData } = usePreviewSubscription(
      groq`${queries.landingPageQuery}`,
      {
        initialData: data,
        enabled: preview,
      },
    );

    const store = useStore();
    const {
      uiStore: { scrollPosition },
    } = store;

    if (!pageData) return null;

    const { title, subtitle, content, bannerImage, showBanner, bannerCopy } =
      pageData;

    const navMode =
      scrollPosition > 0.03 ? NavBarStyles.dark : NavBarStyles.light;
    return (
      <>
        <Meta />

        <StickyNavBar showBanner={showBanner} mode={navMode} />
        {showBanner && <PageBanner copy={bannerCopy} />}
        <Header title={title} subtitle={subtitle} image={bannerImage} />
        <Layout key="home">
          {content.map((c, i) => (
            <PageContent key={i} index={i} content={c} />
          ))}
        </Layout>
        <Footer />
      </>
    );
  },
);

export async function getStaticProps({ preview = false, previewData }) {
  const data = await getClient(preview).fetch(
    groq`${queries.landingPageQuery}`,
  );
  const playbookStructure = await getClient(preview).fetch(
    groq`${queries.playbookStructureQuery}`,
  );

  return { props: { preview, data, playbookStructure } };
}

export default Root;

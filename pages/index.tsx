import { sanity } from '../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

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

const Root = observer(({ pageData }: { pageData: any }) => {
  const { title, subtitle, content, bannerImage, showBanner, bannerCopy } =
    pageData;
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;
  const navMode =
    scrollPosition > 0.03 ? NavBarStyles.dark : NavBarStyles.light;
  return (
    <>
      <Meta />

      <StickyNavBar showBanner={showBanner} mode={navMode} />
      {showBanner && <PageBanner copy={bannerCopy} />}

      <Layout key="home">
        <Header title={title} subtitle={subtitle} image={bannerImage} />
        {content.map((c, i) => (
          <PageContent key={i} index={i} content={c} />
        ))}
      </Layout>
      <Footer />
    </>
  );
});

export async function getStaticProps({ preview, previewData }) {
  const pageData = await sanity.fetch(
    `
    *[_type == "landingPage" ] {
      "id": _id,
      title,
      subtitle,
      showBanner,
      bannerCopy,
      bannerImage{
        ${queries.imageMeta}
      },
      content[]{
        

          ${queries.playbookSections}
      },
    }[0]
  `,
  );
  return { props: { pageData } };
}

export default Root;

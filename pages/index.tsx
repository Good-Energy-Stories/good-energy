import { sanity } from '../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../stores/store';
import { Layout, Masthead, Meta, PageBanner } from '../components';
import { PageContent, StickyNavBar, Header } from '../components/Landing';
import { queries } from '../data';
import { Footer } from '../components/Footer';

const Root = ({ pageData }) => {
  const { title, subtitle, content, bannerImage, showBanner, bannerCopy } =
    pageData;

  return (
    <>
      <Meta />

      <StickyNavBar showBanner={showBanner} />
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
};

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

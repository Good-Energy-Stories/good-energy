import { sanity } from '../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../stores/store';
import {
  Layout,
  Masthead,
  StickyNavBar,
  Meta,
  QuoteCarousel,
  Tag,
} from '../components';
import { queries } from '../data';
import {
  PageContent,
  ThreeColumnLayout,
  ThreeColumnLayoutStyle,
} from '../components/PlaybookHome';
import { Footer } from '../components/Footer';

const Root = ({ pageData }) => {
  const { masthead, content } = pageData;
  console.log(pageData);
  const clearCookie = async () => {
    await fetch('/api/logout', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    window.location.reload();
  };

  return (
    <>
      <Meta />
      <Masthead />
      <StickyNavBar />

      <Layout key="home">
        <ThreeColumnLayout
          data={masthead}
          style={ThreeColumnLayoutStyle.primary}
        />
        {content.map((c, i) => (
          <PageContent key={i} index={i} content={c} />
        ))}
      </Layout>
      <Footer />
      <button onClick={clearCookie}>Logout</button>
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const pageData = await sanity.fetch(
    `
    *[_type == "playbookHome" ] {
      "id": _id,
      masthead{
        ${queries.threeColumnLayout}
      },
      content[]{
          ${queries.playbookSections}
      },
    }[0]
  `,
  );
  console.log(pageData);
  return { props: { pageData } };
}

export default Root;

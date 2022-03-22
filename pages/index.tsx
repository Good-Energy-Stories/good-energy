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
  ActionMegaQuote,
  Tag,
  ArticleLinkSmall,
} from '../components';
import { queries } from '../data';
import { PageContent } from '../components/PlaybookHome';
import { Footer } from '../components/Footer';

const Root = (props) => {
  console.log(props);
  const store = useStore();
  const {
    uiStore: { updateScrollPosition },
  } = store;

  const clearCookie = async () => {
    await fetch('/api/logout', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [updateScrollPosition]);

  return (
    <>
      <Meta />
      <Masthead />
      <StickyNavBar />
      <Layout key="home">
        {props.pageData.content.map((c, i) => (
          <PageContent key={i} index={i} content={c} />
        ))}

        <QuoteCarousel
          quotes={[
            {
              quote: 'This is a big quote it goes something like this',
              attribution: 'This is the attribution',
            },
            {
              quote: 'This is a big quote it goes something like this',
              attribution: 'This is the attribution',
            },
            {
              quote: 'This is a big quote it goes something like this',
              attribution: 'This is the attribution',
            },
            {
              quote: 'This is a big quote it goes something like this',
              attribution: 'This is the attribution',
            },
          ]}
        />

        <ArticleLinkSmall
          imageSrc={'/smokestacks.png'}
          title="Our possible futures: Two worlds"
          lede="The climate crisis directly taps into people's suffering and joy--all the things a good story is made of."
          href="/here"
          tags={['tips and tricks', 'tips and tricks', 'tips and tricks']}
        />
        <ArticleLinkSmall
          imageSrc={'/smokestacks.png'}
          title="Our possible futures: Two worlds"
          lede="The climate crisis directly taps into people's suffering and joy--all the things a good story is made of."
          href="/here"
          tags={['tips and tricks', 'tips and tricks', 'tips and tricks']}
        />
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
      masthead,
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

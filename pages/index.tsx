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
  Quote,
  MegaQuote,
  Tag,
  ArticleLinkSmall,
} from '../components';

const Root = (props) => {
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
        <Quote
          quote={'This is a big quote it goes something like this'}
          attribution={'This is the attribution'}
        />
        <MegaQuote
          quote={
            "Hope locates itself in the premises that we don't know what will happen and that in the spaciousness of uncertainty is room to act."
          }
          attribution={'Rebecca Solnit'}
        />
        <div>
          <Tag tag={'tips and tricks'} />
          <Tag tag={'tips and tricks'} />
        </div>
        <ArticleLinkSmall
          imageSrc={'/smokestacks.png'}
          title="Our possible futures: Two worlds"
          lede="The climate crisis directly taps into people's suffering and joy--all the things a good story is made of."
          href="/here"
          tags={['tips and tricks', 'tips and tricks', 'tips and tricks']}
        />
      </Layout>
      <button onClick={clearCookie}>Logout</button>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Root;

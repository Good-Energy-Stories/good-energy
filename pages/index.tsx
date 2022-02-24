import { sanity } from '../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../stores/store';
import { Masthead, StickyNavBar, Meta } from '../components';

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

import { sanity } from '../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../stores/store';
import { Masthead, StickyNavBar, Meta } from '../components';

const Playbook = (props) => {
  return (
    <>
      <Meta />
      <Masthead />
      <StickyNavBar />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Playbook;

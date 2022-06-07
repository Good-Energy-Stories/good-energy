import { sanity } from '../../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../../stores/store';

import { queries } from '../../data';
import {
  Layout,
  Masthead,
  Meta,
  PageDivider,
  StickyNavBar,
} from '../../components';
import { Header, Characters } from '../../components/CharacterProfilesHome';
import { Footer } from '../../components/Footer';
import Related from '../../components/Related';
import { Filters, SearchBar, SearchResults } from '../../components/SearchPage';
import SearchInformation from '../../components/SearchPage/SearchInformation';

const Root = ({ pageData }) => {
  const { title, description, related, characterProfiles } = pageData;

  return (
    <>
      <Meta />

      <StickyNavBar />

      <Layout key="search" paddingHorizontal={'7.5rem'}>
        <SearchBar />
        <SearchInformation />
        <SearchResults />
      </Layout>
      <Footer />
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const pageData = await sanity.fetch(queries.characterProfilePageQuery);
  return { props: { pageData } };
}

export default Root;

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
import { PageContent, StickyNavBar } from '../components/Landing';
import { queries } from '../data';
import { Footer } from '../components/Footer';
import { observer } from 'mobx-react-lite';
import { imageUrlFor } from '../utils/imageUrlFor';
import Header from '../components/Landing/Header/Header';
import Page from '../components/Page/Page';

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

    const {
      title,
      subtitle,
      content,
      bannerImage,
      showBanner,
      bannerCopy,
      donateLink,
      seo,
    } = pageData;

    const navMode =
      scrollPosition > 0.001 ? NavBarStyles.dark : NavBarStyles.light;

    const header = (
      <Header title={title} subtitle={subtitle} image={bannerImage} />
    );

    return (
      <>
        <Page pageData={pageData} header={header} />
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

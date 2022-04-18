import { sanity } from '../../../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../../../stores/store';

import { queries } from '../../../data';
import {
  Layout,
  Masthead,
  Meta,
  PageDivider,
  StickyNavBar,
} from '../../../components';
import { Header, Characters } from '../../../components/CharacterProfilesHome';
import { Footer } from '../../../components/Footer';
import Related from '../../../components/Related';
import { imageUrlFor } from '../../../utils/imageUrlFor';

const Root = ({ pageData }) => {
  console.log('pageData:', pageData);
  const { title, description, related, characterProfiles, seo } = pageData;
  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'playbook/characters'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />

      <StickyNavBar label="Playbook Contents" />

      <Layout key="characterProfiles">
        <Header title={title} description={description} />
        <PageDivider />
        <Characters content={characterProfiles} />
        <Related content={related} />
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

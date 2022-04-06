import { sanity } from '../../lib/sanity';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useStore } from '../../stores/store';

import { queries } from '../../data';
import { Layout, Masthead, Meta, StickyNavBar } from '../../components';
import { Header } from '../../components/CharacterProfilesHome';
import { Footer } from '../../components/Footer';

const Root = ({ pageData }) => {
  console.log('pageData:', pageData);
  const { title, description } = pageData;
  return (
    <>
      <Meta />

      <StickyNavBar label="Playbook Contents" />

      <Layout key="characterProfiles" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        <div />
      </Layout>
      <Footer />
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const pageData = await sanity.fetch(
    `
    *[_type == "characterProfilesPage" ] {
      "id": _id,
      title,
      description,
      characterProfiles[]-> {
        ${queries.characterProfilePreview}
      }
    }[0]
  `,
  );
  return { props: { pageData } };
}

export default Root;

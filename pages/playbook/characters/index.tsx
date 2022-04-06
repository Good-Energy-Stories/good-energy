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

const Root = ({ pageData }) => {
  console.log('pageData:', pageData);
  const { title, description, related, characterProfiles } = pageData;
  return (
    <>
      <Meta />

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
  const pageData = await sanity.fetch(
    `
    *[_type == "characterProfilesPage" ] {
      "id": _id,
      title,
      description,
      characterProfiles[]-> {
        ${queries.characterProfilePreview}
      },
      related[]-> {
        ${queries.related}
      }
    }[0]
  `,
  );
  return { props: { pageData } };
}

export default Root;

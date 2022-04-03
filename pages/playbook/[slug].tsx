import { sanity } from '../../lib/sanity';
import { queries } from '../../data';
import {
  Layout,
  StickyNavBar,
  NavBarStyles,
  Meta,
  Breadcrumbs,
} from '../../components';

import { Footer } from '../../components/Footer';
import { useRef, useEffect, RefObject } from 'react';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

const Project = observer(({ characterProfile }: { characterProfile: any }) => {
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;
  const navMode =
    scrollPosition > 0.05 ? NavBarStyles.dark : NavBarStyles.light;
  return (
    <>
      <Meta />
      <StickyNavBar mode={navMode} />
      <Layout key={characterProfile.slug}>
        <div />
        <div />
      </Layout>
      <Footer />
    </>
  );
});

export const getStaticPaths = async () => {
  const characterProfiles = await sanity.fetch(
    queries.characterProfilePathsQuery,
  );
  const paths = characterProfiles.map((characterProfile) => ({
    params: { slug: characterProfile.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const characterProfile = await sanity.fetch(queries.characterProfileQuery, {
    slug: params.slug,
  });
  return { props: { characterProfile } };
};

export default Project;

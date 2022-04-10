import { sanity } from '../../../../lib/sanity';
import { queries } from '../../../../data';
import {
  Layout,
  StickyNavBar,
  NavBarStyles,
  Meta,
  Breadcrumbs,
  SpotlightBody,
} from '../../../../components';

import { Footer } from '../../../../components/Footer';
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';
import Related from '../../../../components/Related';

const Project = observer(({ expertProfile }: { expertProfile: any }) => {
  console.log(expertProfile);
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
      <Layout key={expertProfile.slug}>
        <SpotlightBody
          name={expertProfile?.name}
          shortBio={expertProfile?.shortBio}
          bio={expertProfile?.bio}
          nextUp={expertProfile?.nextUp}
          portraitImage={expertProfile?.fullSizePortraitImage}
        />
        <Related content={expertProfile?.related} />
      </Layout>
      <Footer />
    </>
  );
});

export const getStaticPaths = async () => {
  const expertProfiles = await sanity.fetch(queries.expertProfilePathsQuery);

  const paths = expertProfiles.map((expertProfile) => ({
    params: { slug: expertProfile.slug.current },
  }));

  console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const expertProfile = await sanity.fetch(queries.expertProfileQuery, {
    slug: params.slug,
  });
  console.log(expertProfile);
  return { props: { expertProfile } };
};

export default Project;

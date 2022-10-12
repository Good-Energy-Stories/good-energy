import { sanity } from '../../../../lib/sanity';
import { queries } from '../../../../data';
import {
  Layout,
  StickyNavBar,
  NavBarStyles,
  Meta,
  SpotlightBody,
} from '../../../../components';

import { Footer } from '../../../../components/Footer';
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';
import Related from '../../../../components/Related';
import { imageUrlFor } from '../../../../utils/imageUrlFor';

const Project = observer(({ characterProfile }: { characterProfile: any }) => {
  const { related, name, shortBio, slug, portraitImage } = characterProfile;
  const store = useStore();
  const {
    uiStore: { scrollPosition },
  } = store;
  const navMode =
    scrollPosition > 0.05 ? NavBarStyles.dark : NavBarStyles.light;
  return (
    <>
      <Meta
        title={name}
        image={
          portraitImage ? imageUrlFor(portraitImage).width(500).url() : null
        }
        slug={`playbook/characters/spotlight/${slug}`}
        description={shortBio}
      />
      <Layout key={characterProfile.slug}>
        <SpotlightBody
          name={characterProfile?.name}
          shortBio={characterProfile?.shortBio}
          bio={characterProfile?.bio}
          nextUp={characterProfile?.nextUp}
          portraitImage={characterProfile?.portraitImage}
        />
        <Related content={related} />
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

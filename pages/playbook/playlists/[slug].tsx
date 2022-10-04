import { sanity } from '../../../lib/sanity';
import { queries } from '../../../data';
import { Layout, StickyNavBar, Meta, PageDivider } from '../../../components';

import { Footer } from '../../../components/Footer';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

import {
  ActiveIndex,
  CardRow,
  Header,
  PageContent,
  PageContentWrapper,
  NextUp,
} from '../../../components/Playlist';
import { useEffect, useState } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';

const Project = observer(({ playlist }: { playlist: any }) => {
  const [activeSlug, setActiveSlug] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextUpIndex, setNextUpIndex] = useState(1);

  const [direction, setDirection] = useState(1);
  const { title, description, slug, playlist: cards } = playlist;

  useEffect(() => {
    if (cards.length > 0) {
      if (cards[activeIndex]) {
        setActiveSlug(cards[activeIndex].slug);
      }
    }
  }, [cards, setActiveSlug, activeIndex]);

  useEffect(() => {
    const newActiveIndex = cards.findIndex((card) => card.slug === activeSlug);
    setDirection(activeIndex < newActiveIndex ? -1 : 1);
    setActiveIndex(newActiveIndex);
    setNextUpIndex((newActiveIndex + 1) % cards.length);
  }, [activeSlug]);

  const store = useStore();
  const {
    uiStore: { scrollToTop },
  } = store;

  return (
    <>
      <Meta
        title={`Playlist: ${title}`}
        image={null}
        slug={`playbook/playlists/${slug}`}
        description={description}
      />
      <StickyNavBar label="Playbook Contents" />
      <Layout key={playlist.slug}>
        <Header title={title} description={description} />
        <PageDivider />
        <ActiveIndex index={activeIndex} length={cards.length} />
        <CardRow
          playlist={cards}
          shadowActive={false}
          onActionButtonClicked={(slug) => setActiveSlug(slug)}
        />
        <PageContentWrapper key={activeIndex} direction={direction}>
          <PageContent content={cards[activeIndex]} />
        </PageContentWrapper>
        <NextUp
          data={cards[nextUpIndex]}
          onClick={() => {
            setActiveIndex((index) => (index + 1) % cards.length);
            setTimeout(() => {
              scrollToTop();
            }, (FRAMER_TRANSITION_EASEOUT.duration / 2) * 1000);
          }}
        />
      </Layout>
      <Footer />
    </>
  );
});

export const getStaticPaths = async () => {
  const playlists = await sanity.fetch(queries.playlistPathsQuery);

  const paths = playlists.map((playlist) => ({
    params: { slug: playlist.slug.current },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const playlist = await sanity.fetch(queries.playlistQuery, {
    slug: params.slug,
  });
  return { props: { playlist } };
};

export default Project;

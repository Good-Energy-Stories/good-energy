import { sanity } from '../../../lib/sanity';
import { useState } from 'react';
import { queries } from '../../../data';
import { Layout, Meta, StickyNavBar } from '../../../components';
import { Header } from '../../../components/CharacterProfilesHome';
import { Footer } from '../../../components/Footer';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import { Playlist } from '../../../components/PlaybookHome';

const Root = ({ pageData }) => {
  const [activeArticleSlug, setActiveArticleSlug] = useState(null);
  const { title, description, playlists, seo } = pageData;
  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'playbook/characters'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />

      <Layout key="characterProfiles">
        <Header title={title} description={description} />
        {playlists.map((p) => (
          <Playlist
            key={p.title}
            data={p}
            onActionButtonClicked={(slug) => setActiveArticleSlug(slug)}
          />
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const pageData = await sanity.fetch(queries.playlistsPageQuery);
  return { props: { pageData } };
}

export default Root;

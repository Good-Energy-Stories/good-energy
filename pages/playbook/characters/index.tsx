import { sanity } from '../../../lib/sanity';

import { queries } from '../../../data';
import { Layout, Meta, StickyNavBar } from '../../../components';
import { Header, Characters } from '../../../components/CharacterProfilesHome';
import { Footer } from '../../../components/Footer';
import Related from '../../../components/Related';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import PageDivider from '../../../components/PageDivider/PageDivider';

const Root = ({ pageData }) => {
  const { title, description, related, characterProfiles, seo } = pageData;
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

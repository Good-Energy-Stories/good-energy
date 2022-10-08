import { sanity } from '../../lib/sanity';

import { queries } from '../../data';
import { Layout, Meta, StickyNavBar } from '../../components';
import { Footer } from '../../components/Footer';
import { SearchBar, SearchResults } from '../../components/SearchPage';
import SearchInformation from '../../components/SearchPage/SearchInformation';

const Root = ({ pageData }) => {
  const { title, description, related, characterProfiles } = pageData;

  return (
    <>
      <Meta />

      <StickyNavBar />

      <Layout key="search" paddingHorizontal={'7.5rem'}>
        <SearchBar />
        <SearchInformation />
        <SearchResults />
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

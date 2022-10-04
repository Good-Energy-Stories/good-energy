import { sanity } from '../../../lib/sanity';
import { Layout, Meta, PageDivider, StickyNavBar } from '../../../components';
import { queries } from '../../../data';
import { Footer } from '../../../components/Footer';
import { Experts, Filters } from '../../../components/LibraryOfExperts';
import { useEffect } from 'react';
import { useStore } from '../../../stores/store';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import Header from '../../../components/About/Header/Header';

const LibraryOfExperts = ({ pageData, expertProfiles }) => {
  const { title, description, seo } = pageData;
  const store = useStore();
  const {
    dataStore: { setLibraryOfExpertsResults },
  } = store;

  setLibraryOfExpertsResults(expertProfiles);

  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about/library-of-experts'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="library-of-experts" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        <PageDivider />
        <Filters />
        <Experts />
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
    *[_type == "libraryOfExpertsPage" ] {
      "id": _id,
      seo {
        ${queries.pageSeo}
      },
      title,
      description,
    }[0]
  `,
  );
  const expertProfiles = await sanity.fetch(
    `
    *[_type == "expertProfile" ] {
      ${queries.expertProfilePreview}
    }
  `,
  );

  return {
    props: { pageData, expertProfiles },
  };
};

export default LibraryOfExperts;

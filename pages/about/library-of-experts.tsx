import { sanity } from '../../lib/sanity';
import { Layout, Meta, PageDivider, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { Header } from '../../components/About';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/ExpertProfiles';
const LibraryOfExperts = ({ pageData, expertProfiles }) => {
  console.log(expertProfiles);
  const { title, description } = pageData;

  return (
    <>
      <Meta />
      <StickyNavBar />
      <Layout key="library-of-experts" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        <PageDivider />
        <div className="results">
          {expertProfiles.map((e, i) => {
            return <Card key={i} index={i} data={e} />;
          })}
          <style jsx>{`
            .results {
              grid-column: 1/5;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}</style>
        </div>
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

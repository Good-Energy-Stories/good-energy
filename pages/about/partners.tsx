import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { Header } from '../../components/About';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';

const Partners = ({ pageData }) => {
  const { title, description } = pageData;
  return (
    <>
      <Meta />
      <StickyNavBar />
      <Layout key="partners" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        {pageData.sections.map((p, i) => (
          <PartnerSection key={i} index={i} data={p} />
        ))}
        <div className="spacer" />
        <style jsx>{`
          .spacer {
            height: 2.5rem;
          }
        `}</style>
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
    *[_type == "partnersPage" ] {
      "id": _id,
      title,
      description,
      sections[]->{
        ${queries.partnerSection}
      }
    }[0]
  `,
  );

  return {
    props: { pageData },
  };
};

export default Partners;

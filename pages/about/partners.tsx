import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import Header from '../../components/About/Header/Header';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { imageUrlFor } from '../../utils/imageUrlFor';
import NextUp from '../../components/NextUp/NextUp';

const Partners = ({ pageData }) => {
  const { title, description, seo } = pageData;
  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about/partners'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="partners" paddingHorizontal={'2.5rem'}>
        <Header title={title} description={description} />
        {pageData.sections.map((p, i) => (
          <PartnerSection key={i} index={i} data={p} />
        ))}
        <NextUp label={'Contact'} href={'/about/contact'} />
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(queries.partnersPageQuery);

  return {
    props: { pageData },
  };
};

export default Partners;

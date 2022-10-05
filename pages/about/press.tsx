import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import Header from '../../components/About/Header/Header';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { pressPageQuery } from '../../data/queries/press';
import PressSection from '../../components/Press/PressSection/PressSection';

const Press = ({ pageData }) => {
  const { title, description, seo } = pageData;
  console.log(pageData);

  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about/press'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="press" paddingHorizontal={'2.5rem'}>
        <Header title={title} description={description} />
        <PressSection data={pageData?.content} />
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(pressPageQuery);

  return {
    props: { pageData },
  };
};

export default Press;

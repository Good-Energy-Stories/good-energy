import { Layout, Meta, StickyNavBar } from '../../components';
import { Footer } from '../../components/Footer';
import Header from '../../components/Offerings/Header/Header';
import PageContent from '../../components/Offerings/PageContent';
import { queries } from '../../data';
import { consultingPageQuery } from '../../data/queries/offerings';
import { sanity } from '../../lib/sanity';
import { imageUrlFor } from '../../utils/imageUrlFor';

const Consulting = ({ pageData }) => {
  const { title, description, seo } = pageData;
  console.log(pageData);
  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="About">
        <Header title={title} description={description} />
        {pageData?.content.map((content) => (
          <PageContent content={content} />
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(consultingPageQuery);

  return {
    props: { pageData },
  };
};

export default Consulting;

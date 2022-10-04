import { imageUrlFor } from '../../utils/imageUrlFor';
import { Footer } from '../Footer';
import Layout from '../Layout';
import Meta from '../Meta';
import StickyNavBar from '../StickyNavBar';
import Header from './Header/Header';
import PageContent from './PageContent';

const OfferingsPage = ({ pageData }) => {
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
        {pageData?.content.map((content, index) => (
          <PageContent key={index} content={content} />
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export default OfferingsPage;

import { imageUrlFor } from '../../utils/imageUrlFor';
import { Footer } from '../Footer';
import Layout from '../Layout';
import Meta from '../Meta';
import NextUp from '../NextUp/NextUp';
import StickyNavBar from '../StickyNavBar';
import PageContent from './PageContent';

const Page = ({ pageData, header }) => {
  const { seo, nextUp } = pageData;
  console.log(nextUp);
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
        {header}
        {pageData?.content.map((content, index) => (
          <PageContent key={index} content={content} />
        ))}
        {nextUp && <NextUp label={nextUp?.title} href={nextUp?.slug.current} />}
      </Layout>
      <Footer />
    </>
  );
};

export default Page;

import { imageUrlFor } from '../../utils/imageUrlFor';
import Layout from '../Layout/Layout';
import Meta from '../Meta';
import NextUp from '../NextUp/NextUp';

import PageContent from './PageContent';

const Page = ({ pageData, header }: any) => {
  const { seo, nextUp } = pageData;

  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />

      <Layout key="About">
        {header}
        {pageData?.content.map((content, index) => (
          <PageContent key={index} content={content} />
        ))}
        {nextUp && <NextUp label={nextUp?.title} href={nextUp?.slug.current} />}
      </Layout>
    </>
  );
};

export default Page;

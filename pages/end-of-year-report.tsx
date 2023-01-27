import { queries } from '@/data/index';
import Meta from '@/components/Meta';
import { getClient } from '@/lib/sanity/sanity.server';
import { imageUrlFor } from '@/utils/imageUrlFor';
import PDFViewer from '@/components/PDFViewer';
import { LoginComponent } from '@/components/LoginComponent';
import { useState } from 'react';

const EndOfYearReportPage = ({ data }: { data: any }) => {
  const { seo, title, report } = data;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Meta
        title={seo?.title}
        image={seo?.image ? imageUrlFor(seo.image).width(500).url() : null}
        slug={'end-of-year-report'}
        description={seo?.description}
      />
      {!isLoggedIn && (
        <LoginComponent onSuccessfulLogin={() => setIsLoggedIn(true)} />
      )}
      {isLoggedIn && (
        <PDFViewer
          title={title}
          style={{ marginBottom: '-4px' }}
          url={report.asset.url}
        />
      )}
    </>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(queries.endOfYearReportPageQuery);

  if (!data || !data?.report?.asset?.url) return { notFound: true };

  return {
    props: {
      data,
    },
  };
};

export default EndOfYearReportPage;

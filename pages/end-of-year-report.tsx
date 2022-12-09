import { queries } from '@/data/index';
import Meta from '@/components/Meta';
import { getClient } from '@/lib/sanity/sanity.server';
import { imageUrlFor } from '@/utils/imageUrlFor';
import PDFViewer from '@/components/PDFViewer';

const EndOfYearReportPage = ({ data }: { data: any }) => {
  const { seo, report } = data;
  console.log(seo);
  return (
    <>
      <Meta
        title={seo?.title}
        image={seo?.image ? imageUrlFor(seo.image).width(500).url() : null}
        slug={'end-of-year-report'}
        description={seo?.description}
      />
      <PDFViewer style={{ marginBottom: '-4px' }} url={report.asset.url} />
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

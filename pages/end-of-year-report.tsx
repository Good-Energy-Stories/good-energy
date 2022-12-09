import { queries } from '@/data/index';
import Meta from '@/components/Meta';
import { getClient } from '@/lib/sanity/sanity.server';
import { imageUrlFor } from '@/utils/imageUrlFor';
import PDFViewer from '@/components/PDFViewer';

const EndOfYearReportPage = ({ data }: { data: any }) => {
  const { title, lede, heroImage, report } = data;

  return (
    <>
      <Meta
        title={title}
        image={heroImage ? imageUrlFor(heroImage).width(500).url() : null}
        slug={'end-of-year-report'}
        description={lede}
      />
      <PDFViewer
        style={{ marginTop: 'var(--header-height)', marginBottom: '-4px' }}
        url={report.asset.url}
      />
    </>
  );
};

export async function getServerSideProps() {
  const data = await getClient(false).fetch(queries.endOfYearReportPageQuery);

  if (data?.report?.asset?.url) {
    return {
      redirect: {
        destination: data?.report?.asset?.url,
        permanent: false,
      },
    };
  }

  if (!data) return { notFound: true };

  return {
    props: { data },
  };
}

export default EndOfYearReportPage;

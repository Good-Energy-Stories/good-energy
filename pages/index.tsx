import { getClient } from '../lib/sanity/sanity.server';
import { groq } from 'next-sanity';
import { usePreviewSubscription } from '../lib/sanity/sanity';
import { useStore } from '../stores/store';
import { NavBarStyles } from '../components';
import { queries } from '../data';
import { observer } from 'mobx-react-lite';
import Header from '../components/Landing/Header/Header';
import Page from '../components/Page/Page';

const Root = observer(
  ({
    data,

    preview,
  }: {
    data: any;
    playbookStructure: any;
    preview: boolean;
  }) => {
    const { data: pageData } = usePreviewSubscription(
      groq`${queries.landingPageQuery}`,
      {
        initialData: data,
        enabled: preview,
      },
    );

    if (!pageData) return null;

    const { title, subtitle, donateLink, bannerImage } = pageData;

    const header = (
      <Header
        title={title}
        subtitle={subtitle}
        image={bannerImage}
        donateLink={donateLink}
      />
    );

    return (
      <>
        <Page pageData={pageData} header={header} />
      </>
    );
  },
);

export async function getStaticProps({ preview = false, previewData }) {
  const data = await getClient(preview).fetch(
    groq`${queries.landingPageQuery}`,
  );
  const playbookStructure = await getClient(preview).fetch(
    groq`${queries.playbookStructureQuery}`,
  );

  return { props: { preview, data, playbookStructure } };
}

export default Root;

import { sanity } from '../../lib/sanity';

import { queries } from '../../data';

import Masthead from '../../components/Playbook/Masthead/Masthead';
import Page from '../../components/Page/Page';

const Root = ({ pageData }) => {
  const { description } = pageData;

  const header = <Masthead description={description} />;
  return (
    <>
      <Page header={header} pageData={pageData} />
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const pageData = await sanity.fetch(queries.playbookHomePageQuery);

  return { props: { pageData } };
}

export default Root;

import Layout from '../Layout/Layout';
import SpotlightPageContent from './SpotlightPageContent';

const SpotlightPage = ({ pageData }: any) => {
  return (
    <Layout>
      <SpotlightPageContent data={pageData} />
    </Layout>
  );
};

export default SpotlightPage;

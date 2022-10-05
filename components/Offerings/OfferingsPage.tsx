import Header from './Header/Header';
import Page from '../Page/Page';

const OfferingsPage = ({ pageData }) => {
  const { title, description } = pageData;
  const header = <Header title={title} description={description} />;
  return (
    <>
      <Page pageData={pageData} header={header} />
    </>
  );
};

export default OfferingsPage;

import Header from '../Page/Header/Header';
import Page from '../Page/Page';

const OfferingsPage = ({ pageData }) => {
  const { title, description, bannerImage, showHeader, showHeaderBorder } =
    pageData;
  const header = (
    <Header
      title={title}
      description={description}
      bannerImage={bannerImage}
      showHeader={showHeader}
      showHeaderBorder={showHeaderBorder}
    />
  );
  return (
    <>
      <Page pageData={pageData} header={header} />
    </>
  );
};

export default OfferingsPage;

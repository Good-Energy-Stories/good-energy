import Page from '../Page/Page';
import Header from './Header/Header';

const PressPage = ({ pageData }) => {
  const { title, description, bannerImage } = pageData;

  const header = (
    <Header title={title} description={description} bannerImage={bannerImage} />
  );

  return (
    <>
      <Page pageData={pageData} header={header} />
    </>
  );
};

export default PressPage;

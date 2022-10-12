import Header from '../Page/Header/Header';
import Page from '../Page/Page';

const AboutPage = ({ pageData }) => {
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

export default AboutPage;

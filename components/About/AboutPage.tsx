import Page from '../Page/Page';
import Header from './Header/Header';

const AboutPage = ({ pageData }) => {
  const { title, description, bannerImage } = pageData;
  console.log(pageData);
  const header = (
    <Header title={title} description={description} bannerImage={bannerImage} />
  );
  return (
    <>
      <Page pageData={pageData} header={header} />
    </>
  );
};

export default AboutPage;

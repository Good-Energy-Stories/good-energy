import Page from '../Page/Page';
import Header from './Header/Header';

const AboutPage = ({ pageData }) => {
  const { title, description, bannerImage } = pageData;

  return (
    <>
      <Page pageData={pageData} />
    </>
  );
};

export default AboutPage;

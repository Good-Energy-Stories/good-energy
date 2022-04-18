import { sanity } from '../../lib/sanity';
import { Layout, Meta, NextUpPage, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { Header } from '../../components/About';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';

const About = ({ pageData }) => {
  const { headline, description } = pageData;
  return (
    <>
      <Meta />
      <StickyNavBar />
      <Layout key="About" paddingHorizontal={'2.5rem'}>
        <Header title={headline} description={description} />
        <NextUpPage label={'Team'} href={'/about/team'} />
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
    *[_type == "aboutPage" ] {
      "id": _id,
      headline,
      description
    }[0]
  `,
  );

  return {
    props: { pageData },
  };
};

export default About;

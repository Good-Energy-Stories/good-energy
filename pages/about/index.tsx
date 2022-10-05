import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import Header from '../../components/About/Header/Header';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { imageUrlFor } from '../../utils/imageUrlFor';
import NextUp from '../../components/NextUp/NextUp';

const About = ({ pageData }) => {
  const { headline, description, seo } = pageData;
  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="About" paddingHorizontal={'2.5rem'}>
        <Header title={headline} description={description} fittedText />
        <NextUp label={'Consulting'} href={'/about/consulting'} />
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

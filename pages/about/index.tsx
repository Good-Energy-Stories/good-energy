import { sanity } from '../../lib/sanity';
import { Meta } from '../../components';
import Header from '../../components/About/Header/Header';
import { Footer } from '../../components/Footer';
import { imageUrlFor } from '../../utils/imageUrlFor';
import NextUp from '../../components/NextUp/NextUp';
import Layout from '../../components/Layout/Layout';

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

      <Layout key="About">
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

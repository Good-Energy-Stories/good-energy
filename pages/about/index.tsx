import { sanity } from '../../lib/sanity';
import { Meta } from '../../components';
import { imageUrlFor } from '../../utils/imageUrlFor';
import NextUp from '../../components/NextUp/NextUp';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Page/Header/Header';

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
        <Header title={headline} description={description} />
        <NextUp label={'Consulting'} href={'/about/consulting'} />
      </Layout>
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

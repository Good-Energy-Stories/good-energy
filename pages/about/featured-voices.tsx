import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { Header } from '../../components/About';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';

const FeaturedVoices = ({ pageData }) => {
  const { title, description } = pageData;
  return (
    <>
      <Meta />
      <StickyNavBar />
      <Layout key="featured-voices" paddingHorizontal={'7.5rem'}>
        <Header title={title} description={description} />
        <div />
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
    *[_type == "featuredVoicesPage" ] {
      "id": _id,
      title,
      description,
    }[0]
  `,
  );

  return {
    props: { pageData },
  };
};

export default FeaturedVoices;

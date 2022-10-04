import { sanity } from '../../lib/sanity';
import { Layout, Meta, NextUpPage, StickyNavBar } from '../../components';
import { queries } from '../../data';
import { PartnerSection } from '../../components/Partners';
import { Footer } from '../../components/Footer';
import { imageUrlFor } from '../../utils/imageUrlFor';
import ConsultingInterestForm from '../../components/ConsultingInterestForm';
import Header from '../../components/About/Header/Header';

const Consulting = ({ pageData }) => {
  const { title, description, seo } = pageData;
  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout paddingHorizontal={'2.5rem'}>
        <Header title={title} description={description} fittedText />

        <ConsultingInterestForm />

        <NextUpPage label={'Team'} href={'/about/team'} />
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
    *[_type == "consultingContactPage" ] {
      "id": _id,
      seo {
        ${queries.pageSeo}
      },
      title,
      description
    }[0]
  `,
  );

  return {
    props: { pageData },
  };
};

export default Consulting;

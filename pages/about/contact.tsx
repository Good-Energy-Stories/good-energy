import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { ContactForm, Footer } from '../../components/Footer';
import { dark } from '../../components/Footer/ContactForm';
import { queries } from '../../data';
import { imageUrlFor } from '../../utils/imageUrlFor';
import Header from '../../components/About/Header/Header';

const Contact = ({ pageData }) => {
  const { title, description, seo } = pageData;
  return (
    <>
      <Meta
        title={seo?.title}
        description={seo?.description}
        slug={'about/contact'}
        image={seo?.image ? imageUrlFor(seo?.image).width(500).url() : null}
      />
      <StickyNavBar />
      <Layout key="contact" paddingHorizontal={'2.5rem'}>
        <Header title={title} description={description} />
        <div className="contact-form">
          <ContactForm mode={dark} />
        </div>
      </Layout>
      <Footer includeContactForm={false} />
      <style jsx>{`
        .contact-form {
          grid-column: 1/-1;
          padding: 0 1.25rem;
          margin-bottom: 5rem;
        }
      `}</style>
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(queries.contactPageQuery);
  return {
    props: { pageData },
  };
};

export default Contact;

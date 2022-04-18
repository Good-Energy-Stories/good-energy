import { sanity } from '../../lib/sanity';
import { Layout, Meta, StickyNavBar } from '../../components';
import { ContactForm, Footer } from '../../components/Footer';
import { Header } from '../../components/About';
import { dark } from '../../components/Footer/ContactForm';

const Contact = ({ pageData }) => {
  const { title, description } = pageData;
  return (
    <>
      <Meta />
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
          grid-column: 1/5;
          padding: 0 1.25rem;
          margin-bottom: 5rem;
        }
      `}</style>
    </>
  );
};

export const getStaticProps = async () => {
  const pageData = await sanity.fetch(
    `
        *[_type == "contactPage" ] {
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

export default Contact;

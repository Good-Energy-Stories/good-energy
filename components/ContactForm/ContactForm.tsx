import NewsletterSignupForm from './NewsletterSignupForm/NewsletterSignupForm';
import ConsultingInterestForm from './ConsultingInterestForm';

const ContactForm = ({ data, index }: any) => {
  const type = data.form;

  switch (type) {
    case 'consultingInterestForm':
      return <ConsultingInterestForm />;
    case 'newsletterSignupForm':
      return <NewsletterSignupForm />;
    default:
      return null;
  }
};

export default ContactForm;

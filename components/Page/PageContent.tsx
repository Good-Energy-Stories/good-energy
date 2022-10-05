import dynamic from 'next/dynamic';
import PageDivider from '../PageDivider/PageDivider';
import { PartnerSection } from '../Partners';
import CalloutSection from '../Offerings/CalloutSection/CalloutSection';
import TeamSection from '../TeamSection/TeamSection';
import ContactForm from '../ContactForm/ContactForm';

const Callout = dynamic(() => import('../Offerings/Callout/Callout'));
const EmailCapture = dynamic(() => import('../PlaybookHome/EmailCapture'));
const ClimateLensBlock = dynamic(
  () => import('../Offerings/ClimateLensBlock/ClimateLensBlock'),
);
const TwoColumnLayout = dynamic(
  () => import('../Offerings/TwoColumnLayout/TwoColumnLayout'),
);
const FullWidthImage = dynamic(
  () => import('../FullWidthImage/FullWidthImage'),
);
const Testimonial = dynamic(
  () => import('../Offerings/Testimonial/Testimonial'),
);
const PageContent = ({ content, index }: any) => {
  const type = content._type;

  switch (type) {
    case 'callout':
      return <Callout data={content} index={index} />;
    case 'emailCapture':
      return <EmailCapture data={content} index={index} />;
    case 'climateLensBlock':
      return <ClimateLensBlock data={content} index={index} />;
    case 'testimonial':
      return <Testimonial data={content} index={index} />;
    case 'twoColumnLayout':
      return <TwoColumnLayout data={content} index={index} />;
    case 'fullWidthImage':
      return <FullWidthImage data={content} index={index} />;
    case 'pageDivider':
      return <PageDivider data={content} index={index} />;
    case 'partnerSection':
      return <PartnerSection data={content} index={index} />;
    case 'calloutSection':
      return <CalloutSection data={content} index={index} />;
    case 'teamSection':
      return <TeamSection data={content} index={index} />;
    case 'contactForm':
      return <ContactForm data={content} index={index} />;
    default:
      return null;
  }
};

export default PageContent;

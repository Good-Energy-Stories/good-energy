import dynamic from 'next/dynamic';
import PageDivider from '../PageDivider/PageDivider';
import { PartnerSection } from '../Partners';
import CalloutSection from '../Offerings/CalloutSection/CalloutSection';
import TeamSection from '../TeamSection/TeamSection';
import ContactForm from '../ContactForm/ContactForm';
import FullWidthQuote from '../FullWidthQuote/FullWidthQuote';
import FullWidthStatement from '../FullWidthStatement/FullWidthStatement';
import Accordion from '../Accordion/Accordion';
import ResourceSection from '../ResourceSection/ResourceSection';
import IndividualPartnerFeature from '../IndividualPartnerFeature/IndividualPartnerFeature';
import LandAcknowledgment from '../LandAcknowledgment/LandAcknowledgment';
import AboutBlock from '../AboutBlock/AboutBlock';
import PressSection from '../Press/PressSection/PressSection';
import DownloadsSection from '../DownloadsSection/DownloadsSection';
import IndividualPressFeature from '../Press/IndividualPressFeature/IndividualPressFeature';

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
  console.log(content);
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
    case 'quote':
      return <FullWidthQuote data={content} index={index} />;
    case 'fullWidthStatement':
      return <FullWidthStatement data={content} index={index} />;
    case 'accordion':
      return <Accordion data={content} index={index} />;
    case 'resourceSection':
      return <ResourceSection data={content} index={index} />;
    case 'individualPartnerFeature':
      return <IndividualPartnerFeature data={content} index={index} />;
    case 'landAcknowledgment':
      return <LandAcknowledgment data={content} index={index} />;
    case 'aboutBlock':
      return <AboutBlock data={content} index={index} />;
    case 'pressSection':
      return <PressSection data={content} index={index} />;
    case 'downloadsSection':
      return <DownloadsSection data={content} index={index} />;
    case 'individualPressFeature':
      return <IndividualPressFeature data={content} index={index} />;
    default:
      return null;
  }
};

export default PageContent;

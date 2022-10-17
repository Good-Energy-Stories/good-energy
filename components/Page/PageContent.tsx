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
import ThreeColumnLayout from '../ThreeColumnLayout/ThreeColumnLayout';
import Logline from '../Logline/Logline';
import FeaturedVoicesSection from '../FeaturedVoicesSection/FeaturedVoicesSection';
import LibraryOfExpertsSection from '../LibraryOfExpertsSection/LibraryOfExpertsSection';
import CharacterProfilesTeaseSection from '../CharacterProfilesTeaseSection/CharacterProfilesTeaseSection';
import CharacterProfilesSection from '../CharacterProfilesSection/CharacterProfilesSection';

const Callout = dynamic(() => import('../Offerings/Callout/Callout'));
const EmailCapture = dynamic(() => import('../EmailCapture/EmailCapture'));

const TwoColumnLayout = dynamic(
  () => import('../TwoColumnLayout/TwoColumnLayout'),
);
const FullWidthImage = dynamic(
  () => import('../FullWidthImage/FullWidthImage'),
);
const Testimonial = dynamic(() => import('../Testimonial/Testimonial'));
const PageContent = ({ content, index }: any) => {
  const type = content._type;

  switch (type) {
    case 'callout':
      return <Callout data={content} />;
    case 'emailCapture':
      return <EmailCapture data={content} />;
    case 'testimonial':
      return <Testimonial data={content} />;
    case 'twoColumnLayout':
      return <TwoColumnLayout data={content} />;
    case 'fullWidthImage':
      return <FullWidthImage data={content} />;
    case 'pageDivider':
      return <PageDivider data={content} />;
    case 'partnerSection':
      return <PartnerSection data={content} />;
    case 'calloutSection':
      return <CalloutSection data={content} />;
    case 'teamSection':
      return <TeamSection data={content} />;
    case 'contactForm':
      return <ContactForm data={content} />;
    case 'quote':
      return <FullWidthQuote data={content} />;
    case 'fullWidthStatement':
      return <FullWidthStatement data={content} />;
    case 'accordion':
      return <Accordion data={content} />;
    case 'resourceSection':
      return <ResourceSection data={content} />;
    case 'individualPartnerFeature':
      return <IndividualPartnerFeature data={content} />;
    case 'landAcknowledgment':
      return <LandAcknowledgment data={content} />;
    case 'aboutBlock':
      return <AboutBlock data={content} />;
    case 'pressSection':
      return <PressSection data={content} />;
    case 'downloadsSection':
      return <DownloadsSection data={content} />;
    case 'individualPressFeature':
      return <IndividualPressFeature data={content} />;
    case 'threeColumnLayout':
      return <ThreeColumnLayout data={content} />;
    case 'logline':
      return <Logline data={content} />;
    case 'featuredVoicesSection':
      return <FeaturedVoicesSection data={content} />;
    case 'libraryOfExpertsSection':
      return <LibraryOfExpertsSection data={content} />;
    case 'characterProfilesTeaseSection':
      return <CharacterProfilesTeaseSection data={content} />;
    case 'characterProfilesSection':
      return <CharacterProfilesSection data={content} />;
    default:
      return null;
  }
};

export default PageContent;

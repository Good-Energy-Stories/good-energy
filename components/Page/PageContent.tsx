import dynamic from 'next/dynamic';
const PartnerSection = dynamic(() => import('../Partners/PartnerSection'));
const PageDivider = dynamic(() => import('../PageDivider/PageDivider'));
const CalloutSection = dynamic(
  () => import('../Offerings/CalloutSection/CalloutSection'),
);
const TeamSection = dynamic(() => import('../TeamSection/TeamSection'));
const ContactForm = dynamic(() => import('../ContactForm/ContactForm'));
const FullWidthQuote = dynamic(
  () => import('../FullWidthQuote/FullWidthQuote'),
);
const FullWidthStatement = dynamic(
  () => import('../FullWidthStatement/FullWidthStatement'),
);
const Accordion = dynamic(() => import('../Accordion/Accordion'));
const ResourceSection = dynamic(
  () => import('../ResourceSection/ResourceSection'),
);
const IndividualPartnerFeature = dynamic(
  () => import('../IndividualPartnerFeature/IndividualPartnerFeature'),
);
const LandAcknowledgment = dynamic(
  () => import('../LandAcknowledgment/LandAcknowledgment'),
);
const AboutBlock = dynamic(() => import('../AboutBlock/AboutBlock'));
const PressSection = dynamic(
  () => import('../Press/PressSection/PressSection'),
);
const DownloadsSection = dynamic(
  () => import('../DownloadsSection/DownloadsSection'),
);
const IndividualPressFeature = dynamic(
  () => import('../Press/IndividualPressFeature/IndividualPressFeature'),
);
const ThreeColumnLayout = dynamic(
  () => import('../ThreeColumnLayout/ThreeColumnLayout'),
);
const Logline = dynamic(() => import('../Logline/Logline'));
const FeaturedVoicesSection = dynamic(
  () => import('../FeaturedVoicesSection/FeaturedVoicesSection'),
);
const LibraryOfExpertsSection = dynamic(
  () => import('../LibraryOfExpertsSection/LibraryOfExpertsSection'),
);
const CharacterProfilesTeaseSection = dynamic(
  () =>
    import('../CharacterProfilesTeaseSection/CharacterProfilesTeaseSection'),
);
const CharacterProfilesSection = dynamic(
  () => import('../CharacterProfilesSection/CharacterProfilesSection'),
);
const Callout = dynamic(() => import('../Offerings/Callout/Callout'));
const EmailCapture = dynamic(() => import('../EmailCapture/EmailCapture'));
const TwoColumnLayout = dynamic(
  () => import('../TwoColumnLayout/TwoColumnLayout'),
);
const FullWidthImage = dynamic(
  () => import('../FullWidthImage/FullWidthImage'),
);
const Testimonial = dynamic(() => import('../Testimonial/Testimonial'));

const PageContent = ({ content }: any) => {
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

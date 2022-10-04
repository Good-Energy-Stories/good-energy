import dynamic from 'next/dynamic';

const Callout = dynamic(() => import('./Callout/Callout'));
const EmailCapture = dynamic(() => import('../PlaybookHome/EmailCapture'));
const ClimateLensBlock = dynamic(
  () => import('./ClimateLensBlock/ClimateLensBlock'),
);
const TwoColumnLayout = dynamic(
  () => import('./TwoColumnLayout/TwoColumnLayout'),
);
const Testimonial = dynamic(() => import('./Testimonial/Testimonial'));
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
    default:
      return null;
  }
};

export default PageContent;

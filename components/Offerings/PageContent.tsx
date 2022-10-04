import dynamic from 'next/dynamic';

const Callout = dynamic(() => import('./Callout/Callout'));
const EmailCapture = dynamic(() => import('../PlaybookHome/EmailCapture'));
const ClimateLensBlock = dynamic(
  () => import('./ClimateLensBlock/ClimateLensBlock'),
);
const PageContent = ({ content }) => {
  const type = content._type;
  switch (type) {
    case 'callout':
      return <Callout data={content} />;
    case 'emailCapture':
      return <EmailCapture data={content} />;
    case 'climateLensBlock':
      return <ClimateLensBlock data={content} />;
    default:
      return null;
  }
};

export default PageContent;

import dynamic from 'next/dynamic';
import CTALink from '../../Buttons/CTALink/CTALink';
import CTAButton from '../../Buttons/CTAButton/CTAButton';
import SpotIllustration from '../../SpotIllustration/SpotIllustration';
import WrittenContent from '../../WrittenContent/WrittenContent';
import InlineQuote from '../../Quotes/InlineQuote/InlineQuote';

const HalfPageContent = ({ content, index }: any) => {
  const type = content._type;
  switch (type) {
    case 'spotIllustration':
      return <SpotIllustration data={content} index={index} />;
    case 'ctaButton':
      return <CTAButton data={content} index={index} />;
    case 'ctaLink':
      return <CTALink data={content} index={index} />;
    case 'writtenContent':
      return <WrittenContent data={content} index={index} />;
    case 'quote':
      return <InlineQuote data={content} index={index} />;
    default:
      return null;
  }
};

export default HalfPageContent;

import dynamic from 'next/dynamic';
import CTALink from '../../Buttons/CTALink/CTALink';
import CTAButton from '../../Buttons/CTAButton/CTAButton';
import SpotIllustration from '../../SpotIllustration/SpotIllustration';
import WrittenContent from '../../WrittenContent/WrittenContent';
import InlineQuote from '../../Quotes/InlineQuote/InlineQuote';
import Statement from '../Statement/Statement';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';
import DataVisualization from '../../DataVisualization/DataVisualization';
import PressCard, { PressCardType } from '../../Press/Cards/PressCard';

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
    case 'statement':
      return <Statement data={content} index={index} />;
    case 'imageCarousel':
      return <ImageCarousel data={content} index={index} />;
    case 'dataVisualization':
      return <DataVisualization data={content} index={index} />;
    case 'press':
      return (
        <PressCard type={PressCardType.Half} data={content} index={index} />
      );
    default:
      return null;
  }
};

export default HalfPageContent;

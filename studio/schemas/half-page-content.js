import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'halfPageContent',
  title: 'Half Page Content',
  type: 'array',
  of: [
    { type: 'writtenContent' },
    { type: 'quote' },
    { type: 'statement' },
    { type: 'ctaButton' },
    { type: 'ctaLink' },
    { type: 'spotIllustration' },
    { type: 'imageCarousel' },
    { type: 'dataVisualization' },
    {
      type: 'reference',
      to: [{ type: 'testimonial' }],
    },
  ],
};

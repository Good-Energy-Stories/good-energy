import { BsWindow as icon } from 'react-icons/bs';

export default [
  { type: 'emailCapture' },
  { type: 'twoColumnLayout' },
  { type: 'threeColumnLayout' },
  { type: 'quote' },
  { type: 'callout' },
  { type: 'fullWidthImage' },
  { type: 'fullWidthStatement' },
  { type: 'pageDivider' },
  { type: 'contactForm' },
  { type: 'accordion' },
  { type: 'landAcknowledgment' },
  { type: 'individualPartnerFeature' },
  { type: 'resourceSection' },
  { type: 'aboutBlock' },
  { type: 'partnerSection' },
  { type: 'downloadsSection' },
  { type: 'individualPressFeature' },
  { type: 'logline' },
  { type: 'featuredVoicesSection' },
  { type: 'libraryOfExpertsSection' },
  {
    type: 'reference',
    to: [
      { type: 'testimonial' },
      { type: 'teamSection' },
      { type: 'calloutSection' },
      { type: 'pressSection' },
    ],
  },
];

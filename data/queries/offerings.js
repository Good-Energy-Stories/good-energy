import { pageSeo } from './pageSeo';

export const calloutFragment = `
title, 
information
`;

export const climateLensBlockFragment = `
title, 
information,
showLinkToBookAConsultation
`;

export const offeringsPageContentFragment = `
  _type == 'reference' => @->{
    _type == 'climateLensBlock' => {
      _type,
     ${climateLensBlockFragment}
    },
  },
  _type != 'reference' => {
    _type == 'callout' => {
      _type,
     ${calloutFragment}
    },
    _type == 'emailCapture' => {
      _type,
      title,
      subtitle,
      backgroundColor
    },
  },
`;

export const consultingPageQuery = `
*[_type == "consultingPage" ] {
  "id": _id,
  seo {
    ${pageSeo}
  },
  title,
  description,
  content[] {
      ${offeringsPageContentFragment}
  }
}[0]
`;

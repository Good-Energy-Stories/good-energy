import { imageMeta } from './imageMeta';
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

export const halfColumnPageContentFragment = `
_type == 'reference' => @->{
    _type == 'testimonial' => {
      _type,
     ...
    },
  },
  _type != 'reference' => {
    _type == 'spotIllustration' => {
        _type,
        image {
            ${imageMeta}
        }
    },
    _type == 'ctaButton' => {
      _type,
     ...
    },
    _type == 'ctaLink' => {
        _type,
       ...
    },
    _type == 'writtenContent' => {
        _type,
       ...
    },
    _type == 'quote' => {
        _type,
       ...
    },
    _type == 'emailCapture' => {
      _type,
      title,
      subtitle,
      backgroundColor
    },
  },
`;

export const twoColumnLayoutFragment = `
leftColumn[] {
    ${halfColumnPageContentFragment}
},
rightColumn[] {
    ${halfColumnPageContentFragment}
}
`;

export const offeringsPageContentFragment = `
  _type == 'reference' => @->{
    _type == 'climateLensBlock' => {
      _type,
     ${climateLensBlockFragment}
    },
    _type == 'testimonial' => {
        _type,
       ...
      },
  },
  _type != 'reference' => {
    _type == 'twoColumnLayout' => {
        _type,
       ${twoColumnLayoutFragment}
    },
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

export const offeringsPagePathsQuery = `*[_type == "offeringsPage"] { slug }`;
export const offeringsPageQuery = `*[_type == "offeringsPage" && slug.current == $slug] {
    "id": _id,
    seo {
      ${pageSeo}
    },
    title,
    description,
    content[] {
        ${offeringsPageContentFragment}
    }
}[0]`;

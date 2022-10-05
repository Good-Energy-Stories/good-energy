import { imageMeta } from './imageMeta';
import { pageSeo } from './pageSeo';
import { partnerSection } from './partners';
import { teamSection } from './team';

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
    _type == 'imageCarousel' => {
        _type,
        content[] {
            ${imageMeta}
        }
    },
    _type == 'statement' => {
        _type,
       ...
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
backgroundColor,
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
    _type == 'teamSection' => {
      _type,
      ${teamSection},
    },
    _type == 'testimonial' => {
        _type,
       ...
    },
    _type == 'partnerSection' => {
        _type,
       ${partnerSection}
    },
    _type == 'calloutSection' => {
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
    _type == 'fullWidthImage' => {
        _type,
        image {
            ${imageMeta}
        }
    },
    _type == 'pageDivider' => {
        _type,
        ...
    },
    _type == 'contactForm' => {
      _type,
      form
    },
    _type == 'emailCapture' => {
      _type,
      title,
      subtitle,
      backgroundColor
    },
  },
`;

export const pageFragment = `
"id": _id,
seo {
  ${pageSeo}
},
bannerImage {
  ${imageMeta}
},
nextUp->{
  title,
  slug
},
title,
description,
content[] {
    ${offeringsPageContentFragment}
}
`;

export const offeringsPagePathsQuery = `*[_type == "offeringsPage"] { slug }`;
export const offeringsPageQuery = `*[_type == "offeringsPage" && slug.current == $slug] {
    ${pageFragment}
}[0]`;

export const aboutPagePathsQuery = `*[_type == "aboutPage"] { slug }`;
export const aboutPageQuery = `*[_type == "aboutPage" && slug.current == $slug] {
   ${pageFragment}
}[0]`;

import { imageMeta } from './imageMeta';
import { pageSeo } from './pageSeo';
import { partner, partnerSection } from './partners';
import { teamSection } from './team';
import { resourceSection } from './resource';
import { pressSection } from './press';

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
    _type == 'dataVisualization' => {
      _type,
      title,
      image {
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
marginBottom,
leftColumn[] {
    ${halfColumnPageContentFragment}
},
rightColumn[] {
    ${halfColumnPageContentFragment}
}
`;

export const pageContentFragment = `
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
    _type == 'calloutSection' => {
        _type,
       ...
    },
    _type == 'pressSection' => {
      _type,
      ${pressSection}
    },
  },
  _type != 'reference' => {
    _type == 'twoColumnLayout' => {
       _type,
       ${twoColumnLayoutFragment}
    },
    _type == 'partnerSection' => {
       _type,
       ${partnerSection}
    },
    _type == 'individualPartnerFeature' => {
      _type,
      description,
      partner -> {
        ${partner}
      }
    },
    _type == 'callout' => {
      _type,
     ${calloutFragment}
    },
    _type == 'downloadsSection' => {
      _type,
     ...
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
    _type == 'landAcknowledgment' => {
      _type,
      ...
    },
    _type == 'accordion' => {
      _type,
      ...
    },
    _type == 'fullWidthStatement' => {
      _type,
      ...
    },
    _type == 'contactForm' => {
      _type,
      form
    },
    _type == 'aboutBlock' => {
      _type,
      ...
    },
    _type == 'emailCapture' => {
      _type,
      title,
      subtitle,
      backgroundColor
    },
    _type == 'resourceSection' => {
      _type,
      ${resourceSection}
    }
  },
`;

export const pageFragment = `
"id": _id,
seo {
  ${pageSeo}
},
showHeader,
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
    ${pageContentFragment}
}
`;

export const pressPageQuery = `
*[_type == "pressPage" ] {
  ${pageFragment}
}[0]`;

export const offeringsPagePathsQuery = `*[_type == "offeringsPage"] { slug }`;
export const offeringsPageQuery = `*[_type == "offeringsPage" && slug.current == $slug] {
    ${pageFragment}
}[0]`;

export const aboutPagePathsQuery = `*[_type == "aboutPage"] { slug }`;
export const aboutPageQuery = `*[_type == "aboutPage" && slug.current == $slug] {
   ${pageFragment}
}[0]`;

import { imageMeta } from './imageMeta';
import { pageSeo } from './pageSeo';
import { partner, partnerSection } from './partners';
import { teamSection } from './team';
import { resourceSection } from './resource';
import { pressFragment, pressSection } from './press';
import { characterProfilePreview } from './characterProfiles';
import { expertProfilePreview } from './expertProfiles';
import { featuredVoice } from './featuredVoices';
import { ourOfferings } from './ourOfferings';
import { thirdColumnPageContentFragment, loglineFragment } from './playbook';

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
  },
`;

export const twoColumnLayoutFragment = `
backgroundColor,
marginBottom,
backgroundImage {
    ${imageMeta}
},
leftColumn[] {
    ${halfColumnPageContentFragment}
},
rightColumn[] {
    ${halfColumnPageContentFragment}
}
`;

export const threeColumnLayoutFragment = `
    leftColumn[]{
      ${thirdColumnPageContentFragment}
    },
    mainColumn[]{
      ${thirdColumnPageContentFragment}
    },
    rightColumn[]{
      ${thirdColumnPageContentFragment}
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
    _type == 'threeColumnLayout' => {
      _type,
      ${threeColumnLayoutFragment}
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
    _type == 'individualPressFeature' => {
      _type,
      title,
      description,
      press->{
        ${pressFragment}
      }
    },
    _type == 'quote' => {
      _type,
      ...
    },
    _type == 'ourOfferings' => {
      _type,
      ${ourOfferings}
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
     ...
    },
    _type == 'characterProfilesTeaseSection' => {
      _type,
      tag,
      title, 
      description,
      "content": characterProfiles[] {
        _type == 'reference' => @->{
          _type == 'expertProfile' => {
            _type,
            ${expertProfilePreview}
          },
          _type == 'characterProfile' => {
            _type,
            ${characterProfilePreview}
          }
        }
      }
    },
    _type == 'characterProfilesSection' => {
      _type,
      "content": characterProfiles[] {
        _type == 'reference' => @->{
          _type == 'expertProfile' => {
            _type,
            ${expertProfilePreview}
          },
          _type == 'characterProfile' => {
            _type,
            ${characterProfilePreview}
          }
        }
      }
    },
    _type == 'logline' => {
      _type,
     ${loglineFragment}
    },
    _type == 'resourceSection' => {
      _type,
      ${resourceSection}
    },
    _type == 'featuredVoicesSection' => {
      _type,
      "content": featuredVoices[]-> {
        ${featuredVoice}
      }
    },
    _type == 'libraryOfExpertsSection' => {
      _type,
      ...
    }
  },
`;

export const pageFragment = `
"id": _id,
seo {
  ${pageSeo}
},
showHeader,
showHeaderBorder,
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

export const playbookHomePageQuery = `
*[_type == "playbookHome" ] {
  ${pageFragment}
}[0]
`;
export const characterProfilesPageQuery = `*[_type == "characterProfilesPage"] { 
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

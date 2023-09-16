import { imageMeta } from './imageMeta';

export const partner = `
title,
size,
link,
logo{
    caption,
    ${imageMeta}
},
altLogo{
    ${imageMeta}
}
`;

export const partnerSection = `
title,
size,
rowWidth,
showLinkToPartnersPage,
useAltLogos,
CTAText,
CTALink,
backgroundColor,
partners[]->{
    ${partner}
},
`;

export const fundingPartners = `
title,
CTAText,
CTALink,
partners[]->{
    ${partner}
},
`;

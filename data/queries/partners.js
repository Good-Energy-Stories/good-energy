import { imageMeta } from './imageMeta';

export const partner = `
title,
size,
link,
logo{
    ${imageMeta}
},
`;

export const partnerSection = `
title,
size,
rowWidth,
showLinkToPartnersPage,
CTALink,
backgroundColor,
partners[]->{
    ${partner}
},
`;

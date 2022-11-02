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
backgroundColor,
partners[]->{
    ${partner}
},
`;

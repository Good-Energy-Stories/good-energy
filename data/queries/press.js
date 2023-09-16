import { imageMeta } from './imageMeta';

export const outletFragment = `
title,
logo {
  ${imageMeta}
}`;

export const pressFragment = `
title,
link,
outlet {
  ${outletFragment}
},
altLogo {
  ${imageMeta}
}
`;

export const pressSection = `
title,
content[]->{
    ${pressFragment}
},
`;

export const pressHero = `
mainArticle->{
  ${pressFragment}
},
CTAText,
CTALink,
content[]->{
  ${pressFragment}
}
`;

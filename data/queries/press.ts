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
}
`;

export const pressSection = `
title,
content[]->{
    ${pressFragment}
},
`;

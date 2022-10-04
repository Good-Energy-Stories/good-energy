import { imageMeta } from './imageMeta';
import { pageSeo } from './pageSeo';
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

export const pressPageQuery = `
*[_type == "pressPage" ] {
    "id": _id,
    seo {
      ${pageSeo}
    },
    title,
    content[]->{
      ${pressFragment}
    }
  }[0]
`;

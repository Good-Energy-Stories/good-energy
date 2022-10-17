import { imageMeta } from './imageMeta';

export const characterProfilePreview = `
_id,
_type,
name,
shortBio,
tags[],
"slug": slug.current,
portraitImage{
  ${imageMeta}
},
`;

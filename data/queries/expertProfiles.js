import { imageMeta } from './imageMeta';

export const expertProfilePreview = `
_id,
_type,
name,
expertType,
authorBio,
includeSpotlightPage,
slug,
pronouns,
organization,
shortBio,
Information,
links,
tags[],
"slug": slug.current,
smallPortraitImage{
  ${imageMeta}
},
fullSizePortraitImage {
  ${imageMeta}
},
`;

export const allExpertProfiles = `
*[_type == "expertProfile" ] {
  ${expertProfilePreview}
}
`;

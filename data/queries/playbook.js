import { imageMeta } from './imageMeta';

export const articlePreview = `
title,
lede,
byline,
tags[],
"slug": slug.current,
heroImage{
  ${imageMeta}
},
"heroImageUrl": heroImage.asset->url
`;

export const characterProfilePreview = `
_type,
name,
shortBio,
tags[],
"slug": slug.current,
portraitImage{
  ${imageMeta}
},
"portraitImageUrl": portraitImage.asset->url
`;

export const expertProfilePreview = `
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

export const quoteCollection = `
title,
quotes[] {
  quote,
  attribution
}
`;

export const characterProfilePagePreview = `
  "id": _id,
  title,
  cardStyle,
  cardStyle == 'carousel' => {
    "characterProfiles": *[_type == 'characterProfile'] {${characterProfilePreview}},
  },
  description
`;

export const playbookSubsection = `
title,
contents[]-> {
  _type == 'article' => {
    _type,
    ${articlePreview}
  },
  _type == 'twoWorldsArticle' => {
    _type,
    title,
    "slug": "two-worlds",
  },
}
`;
export const playbookSection = `
title,
contents[]-> {
  _type == 'article' => {
    _type,
    ${articlePreview}
  },
  _type == 'whyClimateArticle' => {
    _type,
    title,
    "slug": "why-climate-stories",
  },
  _type == 'playbookSubsection' => {
    _type,
    ${playbookSubsection}
  },
  _type == 'characterProfilesPage' => {
    _type,
    "title": "Character Profiles",
    "slug": "characters",
  },
}
`;

export const loglineFragment = `
title,
description,
genre,
image {
    ${imageMeta}
},
article->{slug}
`;

export const thirdColumnPageContentFragment = `
_type == 'reference' => @->{
  _type == 'article' => {
    _type,
    ${articlePreview}
  },
  _type == 'characterProfilesPage' => {
    _type,
    title,
    lede,
    heroImage{
      ${imageMeta}
    },
    "slug": "characters",
  },
  _type == 'twoWorldsArticle' => {
    _type,
    ${articlePreview},
    "slug": "two-worlds",
  },
  _type == 'whyClimateArticle' => {
    _type,
    ${articlePreview},
    "slug": "why-climate-stories",
  },
  _type == 'characterProfile' => {
    _type,
    ${characterProfilePreview}
  },
  _type == 'expertProfile' => {
    _type,
    ${expertProfilePreview}
  },
  _type == 'quoteCollection' => {
    _type,
    ${quoteCollection}
  },
  _type == 'characterProfilesPage' => {
    _type,
    ${characterProfilePagePreview}
  },
  _type == 'playbookSection' => {
    _type,
    ${playbookSection}
  },
},
_type != 'reference' => {
    _type == 'articleList' => {
        _type,
        title,
        content[]-> {
            ${articlePreview}
        }
    },
    _type == 'quote' => {
        _type,
       ...
    }
}
 
`;

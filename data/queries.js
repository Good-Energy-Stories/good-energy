export const imageMeta = `
asset,
caption,
attribution,
"blurHash":asset->.metadata.blurHash,
"lqip":asset->.metadata.lqip,
"imageAspect":asset->.metadata.dimensions.aspectRatio,
`;

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

export const articleSection = `
title,
body,
includeSpotIllustration,
spotIllustration{
    ${imageMeta}
},
"spotIllustrationImageUrl": spotIllustrationImage.asset->url
`;

export const articleQuote = `
quote,
includeAttribution,
attribution,
`;

export const articleStoryPossibility = `
body,
initialState
`;

export const articleBody = `
_type == 'articleSection' => {
  _type,
  _key,
  ${articleSection}
},
_type == 'articleQuote' => {
  _type,
  _key,
  ${articleQuote}
},
_type == 'articleBlockQuote' => {
  _type,
  _key,
  ${articleQuote}
},
_type == 'articleStoryPossibility' => {
  _type,
  _key,
  ${articleStoryPossibility}
},
`;

export const articleIntroduction = `
_type == 'articleIntroductionSection' => {
  _type,
  _key,
  body
},
_type == 'articleQuote' => {
  _type,
  _key,
  ${articleQuote}
},
_type == 'articleBlockQuote' => {
  _type,
  _key,
  ${articleQuote}
}
`;

export const article = `
title,
lede,
byline,
tags[],
"slug": slug.current,
heroImage{
  ${imageMeta}
},
"heroImageUrl": heroImage.asset->url,
introduction[] {
  ${articleIntroduction}
},
body[] {
 ${articleBody}
}
`;

export const characterProfilePreview = `
name,
shortBio,
"slug": slug.current,
portraitImage{
  ${imageMeta}
},
"portraitImageUrl": portraitImage.asset->url
`;

export const quoteCollection = `
title,
quotes[] {
  quote,
  attribution
}
`;

export const contentReferences = `
  _type == 'article' => {
    _type,
    ${articlePreview}
  },
  _type == 'characterProfile' => {
    _type,
    ${characterProfilePreview}
  },
  _type == 'quoteCollection' => {
    _type,
    ${quoteCollection}
  }
`;

export const playlist = `
title,
byline,
description,
playlist[]->{
  ${contentReferences}
}
`;

export const threeColumnLayout = `
    leftColumn[]->{
      ${contentReferences}
    },
    mainColumn[]->{
      ${contentReferences}
    },
    rightColumn[]->{
      ${contentReferences}
    }
  
`;

export const playbookSections = `
  _type == 'reference' => @->{
    _type == 'playlist' => {
      _type,
      ${playlist}
    }
  },
  _type != 'reference' => {
    _type == 'playbookThreeColumn' => {
      _type,
     ${threeColumnLayout}
    },
    _type == 'emailCapture' => {
      _type,
      title,
      subtitle,
      backgroundColor
    },
    _type == 'playbookQuote' => {
      _type,
      quote,
      attribution,
      backgroundColor,
      shouldLinkToAboutPage
    }
  },
  
`;

export const articlePathsQuery = `*[_type == "article"] { slug }`;

export const articleQuery = `*[_type == "article" && slug.current == $slug] {
  ${article}
}[0]`;

export const imageMeta = `
asset,
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
"heroImageUrl": heroImage.asset->url
`;

export const articleSection = `
title,
body,
includeSpotIllustration,
"spotIllustrationImageUrl": spotIllustrationImage.asset->url
`;

export const articleQuote = `
quote,
includeAttribution,
attribution,
`;

export const articleBody = `
_type == 'articleSection' => {
  _type,
  ${articleSection}
},
_type == 'articleQuote' => {
  _type,
  ${articleQuote}
},
`;

export const article = `
title,
lede,
byline,
tags[],
"slug": slug.current,
"heroImageUrl": heroImage.asset->url,
body[] {
 ${articleBody}
}
`;

export const characterProfilePreview = `
name,
shortBio,
"slug": slug.current,
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
`;

export const articlePathsQuery = `*[_type == "article"] { slug }`;

export const articleQuery = `*[_type == "article" && slug.current == $slug] {
  ${article}
}[0]`;

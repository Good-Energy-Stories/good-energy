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

export const playbookSections = `
  _type == 'playbookThreeColumn' => {
    _type,
    leftColumn[]->{
      ${contentReferences}
    },
    mainColumn[]->{
      ${contentReferences}
    },
    rightColumn[]->{
      ${contentReferences}
    },
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

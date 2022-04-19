export const imageMeta = `
asset,
caption,
attribution,
hotspot,
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
partners[]->{
    ${partner}
},
`;

export const articleSection = `
title,
body,
"footnotes": body[].markDefs[] {
  _type == 'footnote' => {
    _type,
    number,
    text
  }
},
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

export const resource = `
title,
slug,
description,
style,
heroImage{
  ${imageMeta}
},
`;

export const resourceSection = `
title,
resources[] -> {
  ${resource}
},
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

export const related = `
_type == 'article' => {
  _type,
  ${articlePreview}
},
_type == 'characterProfile' => {
  _type,
  ${characterProfilePreview}
}
`;

export const teamMember = `
_type,
name,
pronouns,
role,
links,
bio,
portraitImage {
  ${imageMeta}
}
`;

export const author = `
name,
authorBio,
portraitImage{
  ${imageMeta}
}
`;

export const pageSeo = `
title,
description,
image {
  ${imageMeta}
}`;

export const featureVoiceQuote = `
quote,
isFromArticle,
attribution,
article-> {
  ${articlePreview}
}`;

export const featuredVoice = `
_type,
name,
credentials,
shortBio,
portraitImage{
  ${imageMeta}
},
quotes[] {
 ${featureVoiceQuote}
}
`;

export const featuredVoiceAuthor = `
_type,
name,
credentials,
shortBio,
portraitImage{
  ${imageMeta}
}
`;

export const authorReferences = `
_type == 'expertProfile' => {
  _type,
  ${expertProfilePreview}
},
_type == 'featuredVoice' => {
  _type,
  ${featuredVoiceAuthor}
},
_type == 'author' => {
  _type,
${author}
}
`;

export const article = `
title,
lede,
byline,
seo {
  keywords
},
author[]-> {
  ${authorReferences}
},
tags[],
section,
"slug": slug.current,
"footnotes": body[].body[].markDefs[] {
  _type == 'footnote' => {
    _type,
    number,
    text
  }
},
heroImage{
  ${imageMeta}
},
includeDropCap,
introduction[] {
  ${articleIntroduction}
},
body[] {
 ${articleBody}
},
related[]-> {
  ${related}
},
"relatedSubsection": *[_type=='playbookSection' && references(^._id) ]  { title }[0],
nextUp->{
  _type,
  ${articlePreview}
}

`;

export const characterProfilePagePreview = `
  "id": _id,
  title,
  description
`;

export const characterProfile = `
_type,
name,
shortBio,
bio,
tags[],
"slug": slug.current,
fullSizePortraitImage {
  ${imageMeta}
},
portraitImage{
  ${imageMeta}
},
related[]-> {
  ${related}
},
nextUp->{
  ${characterProfilePreview}
}
`;

export const expertProfile = `
_type,
name,
includeSpotlightPage,
expertType,
pronouns,
organization,
links[],
bio,
authorBio,
shortBio,
tags[],
"slug": slug.current,
smallPortraitImage{
  ${imageMeta}
},
fullSizePortraitImage {
  ${imageMeta}
},
related[]-> {
  ${related}
},
nextUp->{
  ${expertProfilePreview}
}
`;

export const quoteCollection = `
title,
quotes[] {
  quote,
  attribution
}
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

export const contentReferences = `
  _type == 'article' => {
    _type,
    ${articlePreview}
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
    },
    _type == 'partnerSection' => {
      _type,
      ${partnerSection}
    },
    _type == 'individualPartnerFeature' => {
      _type,
      description,
      partner -> {
        ${partner}
      }
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
    },
    _type == 'resourceSection' => {
      _type,
      ${resourceSection}
    }
  },
  
`;

export const landingPageQuery = `
*[_type == "landingPage" ] {
  "id": _id,
  seo {
    ${pageSeo}
  },
  title,
  subtitle,
  showBanner,
  donateLink,
  bannerCopy,
  bannerImage{
    ${imageMeta}
  },
  content[]{
      ${playbookSections}
  },
}[0]
`;

export const playbookStructureQuery = `*[_type == "playbookStructure"] { 
  introduction[]->{
    ${contentReferences}
  },
  why[]->{
    ${contentReferences}
  },
  climateStorytelling[]->{
    ${contentReferences}
  },
  whatsNext[]->{
    ${contentReferences}
  },
}[0]`;

export const climateStorytellingSections = `
title,
"firstArticle": contents[0]->{
  _type == 'article' => {
    _type,
    title,
    "slug": slug.current,
  },
},
"articles": contents[]->{
  _type == 'article' => {
    _type,
    title,
    "slug": slug.current,
  },
  _type == 'whyClimateArticle' => {
    _type,
    title,
    "slug": "why-climate-stories",
  },
  _type == 'playbookSubsection' => {
    _type,
    title,
    contents[]->{
      _type == 'article' => {
        _type,
        title,
        "slug": slug.current,
      },
      _type == 'twoWorldsArticle' => {
        _type,
        title,
        "slug": "two-worlds",
      },
    }
  },
  _type == 'characterProfilesPage' => {
    _type,
    "title": "Character Profiles",
    "slug": "characters",
  },
}
`;

export const structureSectionsFirstArticle = `*[_type == "playbookStructure"] { 
introduction[]->{
  _type == 'article' => {
    _type,
    title,
    "slug": slug.current,
  },
},
why[]->{
  _type == 'article' => {
    _type,
    title,
    "slug": slug.current,
  },
},
climateStorytelling[]->{
  _type == 'playbookSection' => {
    _type,
  ${climateStorytellingSections}
  },
},
credits-> {
  _type == 'article' => {
    _type,
    title,
    "slug": slug.current,
  },
}
}[0]
`;

export const sectionsFirstArticle = `*[_type == "playbookSection"] { 
 ${climateStorytellingSections}
}
`;

export const characterProfilePageQuery = `
*[_type == "characterProfilesPage" ] {
  seo {
    ${pageSeo}
  },
  ${characterProfilePagePreview},
  characterProfiles[]-> {
    _type == 'characterProfile' => {
      _type,
      ${characterProfilePreview}
    },
    _type == 'expertProfile' => {
      _type,
      ${expertProfilePreview}
    },
  },
  related[]-> {
    ${related}
  }
}[0]
`;

export const searchArticlesQuery = `*[_type == "article" && title match $query] {
  _type,
  ${articlePreview}
}`;

export const searchCharacterProfilesQuery = `*[_type == "characterProfile" && name match $query] {
  _type,
  ${characterProfilePreview}
}`;

export const searchExpertProfilesQuery = `*[_type == "expertProfile" && name match $query] {
  _type,
  ${expertProfilePreview}
}`;

export const searchFeaturedVoicesQuery = `*[_type == "featuredVoice" && quotes[].quote match $query] {
  "_type": "quoteCarousel",
  quotes[] {
    quote,
    attribution
  }
}`;

export const articlePathsQuery = `*[_type == "article"] { slug }`;
export const characterProfilePathsQuery = `*[_type == "characterProfile"] { slug }`;

export const twoWorldsArticleQuery = `*[_type == "twoWorldsArticle"] { 
  title,
  smallTitle,
  description,
  author[]-> {
    ${authorReferences}
  },
  content[]{
    _type == 'illustration' => {
      _type,
      ${imageMeta}
    },
    _type == 'twoWorldsSection' => {
      _type,
      title,
      body
    },
    _type == 'twoWorldsCompareSection' => {
      _type,
      year,
      initialSection,
      riseIllustration {
        ${imageMeta}
      },
      rise[] {
        _type == 'twoWorldsSection' => {
          _type,
          title,
          body
        },
      },
      collapseIllustration {
        ${imageMeta}
      },
      collapse[] {
        _type == 'twoWorldsSection' => {
          _type,
          
          title,
          body
        },
      }
    },
    
  
   
    
  },
  related[]-> {
    ${related}
  },
  nextUp->{
    _type,
    ${articlePreview}
  }

 }[0]`;

export const whyClimateArticle = `*[_type == "whyClimateArticle"] {
  title,
  subtitle,
  author[]-> {
    ${authorReferences}
  },
  content[] {
    _type == 'illustration' => {
      _type,
      ${imageMeta}
    },
    _type == 'whyClimateTextBlock' => {
      _type,
      textSize,
      text
    },
  },
  related[]-> {
    ${related}
  },
  nextUp->{
    _type,
    ${articlePreview}
  }
 }[0]`;

export const expertProfilePathsQuery = `*[_type == "expertProfile" && includeSpotlightPage == true] { slug }`;

export const articleQuery = `*[_type == "article" && slug.current == $slug] {
  ${article}
}[0]`;
export const characterProfileQuery = `*[_type == "characterProfile" && slug.current == $slug] {
  ${characterProfile}
}[0]`;
export const expertProfileQuery = `*[_type == "expertProfile" && slug.current == $slug] {
  ${expertProfile}
}[0]`;

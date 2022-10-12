import { imageMeta } from './imageMeta';
import { articlePreview } from './playbook';

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

import { imageMeta } from './imageMeta';
import { pageContentFragment } from './offerings';
import { pageSeo } from './pageSeo';

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
  content[] {
      ${pageContentFragment}
  }
}[0]
`;

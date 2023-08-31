import { expertProfilePreview } from './expertProfiles';

// export const meetOurExperts = `
// *[_type == "expertProfile" && isFeaturedOnHomepage == true] {
//   ${expertProfilePreview}
// }
// `;

// WTF ???? //
export const meetOurExperts = `
title,
description,
CTAText,
CTALink,
experts[] {
  'expert': *[_type == "expertProfile" && isFeaturedOnHomepage == true] {
    ${expertProfilePreview}
  }
}
`;

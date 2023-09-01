import { expertProfilePreview } from './expertProfiles';

export const meetOurExperts = `
title,
description,
CTAText,
CTALink,
expertProfiles[]-> {
  _type,
  ${expertProfilePreview}
}
`;

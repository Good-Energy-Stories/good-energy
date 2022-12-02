import { imageMeta } from './imageMeta';
import { pt } from './pt';

export const teamMember = `
name,
title,
pronouns,
links[],
bio,
portraitImage {
    ${imageMeta}
}
`;

export const teamSection = `
title,
description[] {
    ${pt}
},
image,
teamMembers[]->{
    ${teamMember}
}
`;

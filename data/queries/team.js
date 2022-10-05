import { imageMeta } from './imageMeta';

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
description,
teamMembers[]->{
    ${teamMember}
}
`;

import { imageMeta } from './imageMeta';

export const resource = `
title,
name,
slug,
description,
buttonLabel,
style,
image {
  ${imageMeta}
},
`;

export const resourceSection = `
title,
backgroundColor,
resources[] -> {
  ${resource}
},
`;

import { imageMeta } from './imageMeta';

export const client = `
title,
link,
logo{
  ${imageMeta}
},
`;

export const ourClients = `
title,
description,
clearBackground,
CTAText,
CTALink,
clients[]->{
  ${client}
},
`;

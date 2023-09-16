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
CTAText,
CTALink,
clients[]->{
  ${client}
},
`;

import { imageMeta } from './imageMeta';

export const resource = `
title,
name,
slug,
description,
buttonLabel,
style,
media[] {
  _type != 'reference' =>{
    _type == 'image' => {
      _type,
      ${imageMeta}
    },
    _type == 'video' => {
      _type,
      video {
        asset->{...}
      },
      thumbnail {
        _type,
        ${imageMeta}
      },
      caption
    }
  },
}

`;

export const resourceSection = `
title,
backgroundColor,
resources[] -> {
  ${resource}
},
`;

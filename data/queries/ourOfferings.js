export const offering = `
title,
displayTitle,
description,
image,
CTAText,
CTALink,
`;

export const ourOfferings = `
title,
offerings[] -> {
  ${offering}
}`;

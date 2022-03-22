export const playbookSections = `
  _type == 'playbookThreeColumn' => {
    _type,
    leftColumn,
    mainColumn,
    rightColumn,
  },
  _type == 'emailCapture' => {
    _type,
    title,
    subtitle,
    backgroundColor
  },
  _type == 'playbookQuote' => {
    _type,
    quote,
    attribution,
    backgroundColor,
    shouldLinkToAboutPage
  }
`;

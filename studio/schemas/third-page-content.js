import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'thirdPageContent',
  title: 'Half Page Content',
  type: 'array',
  of: [
    { type: 'articleList' },
    { type: 'quote' },
    {
      type: 'reference',
      to: [
        { type: 'characterProfilesPage' },
        { type: 'whyClimateArticle' },
        { type: 'twoWorldsArticle' },
        { type: 'article' },
        { type: 'characterProfile' },
        { type: 'expertProfile' },
        { type: 'quoteCollection' },
      ],
    },
  ],
};

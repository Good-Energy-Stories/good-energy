import dynamic from 'next/dynamic';
import { Card } from '../Cards';
import ArticleList from './ArticleList/ArticleList';
import InlineQuote from './InlineQuote/InlineQuote';

const ThirdPageContent = ({ content, index }: any) => {
  const type = content._type;
  switch (type) {
    case 'twoWorldsArticle':
    case 'whyClimateArticle':
    case 'article':
    case 'characterProfilesPage':
    case 'characterProfile':
    case 'expertProfile':
    case 'featuredVoice':
      return <Card content={content} />;
    case 'quote':
      return <InlineQuote data={content} />;
    case 'articleList':
      return <ArticleList data={content} />;

    default:
      return null;
  }
};

export default ThirdPageContent;

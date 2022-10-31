import dynamic from 'next/dynamic';
import { ArticleCardStyle, Card } from '../Cards';
import ArticleList from './ArticleList/ArticleList';
import InlineQuote from './InlineQuote/InlineQuote';
import { ThreeColumnLayoutStyle } from './ThreeColumnLayout';

const ThirdPageContent = ({ content, style }: any) => {
  const type = content._type;
  switch (type) {
    case 'twoWorldsArticle':
    case 'whyClimateArticle':
    case 'article':
    case 'characterProfilesPage':
    case 'characterProfile':
    case 'expertProfile':
    case 'featuredVoice':
      const articleCardStyle =
        style === ThreeColumnLayoutStyle.PRIMARY
          ? ArticleCardStyle.standard
          : ArticleCardStyle.small;
      return <Card content={content} articleCardStyle={articleCardStyle} />;
    case 'quote':
      return <InlineQuote data={content} />;
    case 'articleList':
      return <ArticleList data={content} />;

    default:
      return null;
  }
};

export default ThirdPageContent;

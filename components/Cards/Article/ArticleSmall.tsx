import { ArticleCardData } from '../';
import ArticleStandard from './ArticleStandard/ArticleStandard';
const ArticleSmall = ({
  data,
  last,
  onActionButtonClicked,
}: {
  data: ArticleCardData;
  last?: boolean;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  return <ArticleStandard data={data} maxWidth={228} />;
};

export default ArticleSmall;

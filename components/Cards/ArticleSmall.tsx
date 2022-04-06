import { ArticleCardData, ArticleStandard } from '.';

const ArticleSmall = ({
  data,
  last,
}: {
  data: ArticleCardData;
  last?: boolean;
}) => {
  return <ArticleStandard data={data} last={last} maxWidth={228} />;
};

export default ArticleSmall;

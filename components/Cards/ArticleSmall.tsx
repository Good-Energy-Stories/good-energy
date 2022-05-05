import { ArticleCardData, ArticleStandard } from '.';

const ArticleSmall = ({
  data,
  last,
  onActionButtonClicked,
}: {
  data: ArticleCardData;
  last?: boolean;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  return (
    <ArticleStandard
      data={data}
      last={last}
      maxWidth={228}
      onActionButtonClicked={onActionButtonClicked}
    />
  );
};

export default ArticleSmall;

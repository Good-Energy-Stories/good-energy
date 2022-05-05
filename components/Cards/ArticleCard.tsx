import dynamic from 'next/dynamic';

const ArticleStandard = dynamic(() => import('./ArticleStandard'));
const ArticleSmall = dynamic(() => import('./ArticleSmall'));
const ArticleFeatured = dynamic(() => import('./ArticleFeatured'));
const ArticleFeaturedSecondary = dynamic(
  () => import('./ArticleFeaturedSecondary'),
);
const ArticleNextUp = dynamic(() => import('./ArticleNextUp'));
const ArticleSearch = dynamic(() => import('./ArticleSearch'));

const ArticleReadMore = dynamic(() => import('./ArticleReadMore'));
export interface ArticleCardData {
  title: string;
  lede: string;
  byline: string;
  tags: string[];
  slug: string;
  heroImage: any;
  heroImageUrl: string;
}

export enum ArticleCardStyle {
  standard = 'standard',
  small = 'small',
  readMore = 'readMore',
  featured = 'featured',
  featuredSecondary = 'featuredSecondary',
  featuredSecondaryWide = 'featuredSecondaryWide',
  nextUp = 'nextUp',
  search = 'search',
}
const ArticleCard = ({
  data,
  index,
  last,
  shouldUseExpandedStyles = true,
  style,
  onActionButtonClicked,
}: {
  data: ArticleCardData;
  shouldUseExpandedStyles?: boolean;
  last?: boolean;
  index: number;
  style: ArticleCardStyle;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  switch (style) {
    case ArticleCardStyle.standard:
      return <ArticleStandard data={data} last={last} />;
    case ArticleCardStyle.small:
      return (
        <ArticleSmall
          data={data}
          last={last}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case ArticleCardStyle.readMore:
      return (
        <ArticleReadMore
          data={data}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case ArticleCardStyle.featured:
      return <ArticleFeatured data={data} index={index} />;
    case ArticleCardStyle.nextUp:
      return (
        <ArticleNextUp
          data={data}
          onActionButtonClicked={onActionButtonClicked}
        />
      );
    case ArticleCardStyle.search:
      return <ArticleSearch data={data} />;
    case ArticleCardStyle.featuredSecondary:
      return (
        <ArticleFeaturedSecondary
          data={data}
          wide={shouldUseExpandedStyles && index === 0}
        />
      );
    default:
      return <ArticleStandard data={data} />;
  }
};

export default ArticleCard;

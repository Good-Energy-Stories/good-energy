import dynamic from 'next/dynamic';

const ArticleStandard = dynamic(() => import('./ArticleStandard'));
const ArticleSmall = dynamic(() => import('./ArticleSmall'));
const ArticleFeatured = dynamic(() => import('./ArticleFeatured'));
const ArticleFeaturedSecondary = dynamic(
  () => import('./ArticleFeaturedSecondary'),
);
const ArticleFeaturedSecondaryWide = dynamic(
  () => import('./ArticleFeaturedSecondaryWide'),
);
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
}
const ArticleCard = ({
  data,
  index,
  shouldUseExpandedStyles = true,
  style,
}: {
  data: ArticleCardData;
  shouldUseExpandedStyles?: boolean;
  index: number;
  style: ArticleCardStyle;
}) => {
  switch (style) {
    case ArticleCardStyle.standard:
      return <ArticleStandard data={data} />;
    case ArticleCardStyle.small:
      return <ArticleSmall data={data} />;
    case ArticleCardStyle.readMore:
      return <ArticleReadMore data={data} />;
    case ArticleCardStyle.featured:
      return <ArticleFeatured data={data} />;
    case ArticleCardStyle.featuredSecondary:
      if (shouldUseExpandedStyles && index === 0) {
        return <ArticleFeaturedSecondaryWide data={data} />;
      }
      return <ArticleFeaturedSecondary data={data} />;
    default:
      return <ArticleStandard data={data} />;
  }
};

export default ArticleCard;

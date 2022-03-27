import dynamic from 'next/dynamic';

const Standard = dynamic(() => import('./Standard'));
const Small = dynamic(() => import('./Small'));
const Featured = dynamic(() => import('./Featured'));
const FeaturedSecondary = dynamic(() => import('./FeaturedSecondary'));
const FeaturedSecondaryWide = dynamic(() => import('./FeaturedSecondaryWide'));

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
  featured = 'featured',
  featuredSecondary = 'featuredSecondary',
  featuredSecondaryWide = 'featuredSecondaryWide',
}
const ArticleCard = ({
  data,
  index,
  style,
}: {
  data: ArticleCardData;
  index: number;
  style: ArticleCardStyle;
}) => {
  switch (style) {
    case ArticleCardStyle.standard:
      return <Standard data={data} />;
    case ArticleCardStyle.small:
      return <Small data={data} />;
    case ArticleCardStyle.featured:
      return <Featured data={data} />;
    case ArticleCardStyle.featuredSecondary:
      if (index === 0) {
        return <FeaturedSecondaryWide data={data} />;
      }
      return <FeaturedSecondary data={data} />;
    default:
      return <Standard data={data} />;
  }
};

export default ArticleCard;

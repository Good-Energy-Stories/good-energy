import dynamic from 'next/dynamic';

const ArticleStandard = dynamic(
  () => import('./ArticleStandard/ArticleStandard'),
);
const ArticleNextUp = dynamic(() => import('./ArticleNextUp/ArticleNextUp'));
const ArticleSearch = dynamic(() => import('./ArticleSearch/ArticleSearch'));

export interface ArticleCardData {
  title: string;
  lede: string;
  byline: string;
  tags: string[];
  slug: string;
  heroImage: any;
  heroImageUrl: string;
  section: { title: string } | null;
}

export enum ArticleCardStyle {
  standard = 'standard',
  nextUp = 'nextUp',
  search = 'search',
}

interface ArticleCardProps {
  data: ArticleCardData;
  style: ArticleCardStyle;
  className?: string;
}

const ArticleCard = ({ data, style, className }: ArticleCardProps) => {
  switch (style) {
    case ArticleCardStyle.standard:
      return <ArticleStandard data={data} className={className} />;
    case ArticleCardStyle.nextUp:
      return <ArticleNextUp data={data} className={className} />;
    case ArticleCardStyle.search:
      return <ArticleSearch data={data} className={className} />;
    default:
      return <ArticleStandard data={data} className={className} />;
  }
};

export default ArticleCard;

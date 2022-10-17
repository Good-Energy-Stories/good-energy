import dynamic from 'next/dynamic';

const ExpertProfileLibrary = dynamic(
  () => import('./ExpertProfileLibrary/ExpertProfileLibrary'),
);
const ExpertProfileSearch = dynamic(
  () => import('./ExpertProfileSearch/ExpertProfileSearch'),
);
const ExpertProfileStandard = dynamic(
  () => import('./ExpertProfileStandard/ExpertProfileStandard'),
);

export enum ExpertProfileCardStyle {
  library = 'library',
  small = 'small',
  readMore = 'readMore',
  nextUp = 'nextUp',
  standard = 'standard',
  search = 'search',
}

const ExpertProfileCard = ({ data, index, style, className }: any) => {
  switch (style) {
    case ExpertProfileCardStyle.library:
      return (
        <ExpertProfileLibrary data={data} index={index} className={className} />
      );
    case ExpertProfileCardStyle.standard:
      return <ExpertProfileStandard data={data} className={className} />;
    case ExpertProfileCardStyle.search:
      return <ExpertProfileSearch data={data} className={className} />;
    default:
      return <ExpertProfileStandard data={data} className={className} />;
  }
};

export default ExpertProfileCard;

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
const ExpertProfileSmall = dynamic(
  () => import('./ExpertProfileSmall/ExpertProfileSmall'),
);

export enum ExpertProfileCardStyle {
  library = 'library',
  small = 'small',
  readMore = 'readMore',
  nextUp = 'nextUp',
  standard = 'standard',
  search = 'search',
}

const ExpertProfileCard = ({
  data,
  index,
  style,
  className,
  imageClassName,
  forceDesktop,
}: any) => {
  switch (style) {
    case ExpertProfileCardStyle.library:
      return (
        <ExpertProfileLibrary data={data} index={index} className={className} />
      );
    case ExpertProfileCardStyle.standard:
      return (
        <ExpertProfileStandard
          data={data}
          className={className}
          imageClassName={imageClassName}
        />
      );
    case ExpertProfileCardStyle.search:
      return <ExpertProfileSearch data={data} className={className} />;
    case ExpertProfileCardStyle.small:
      return (
        <ExpertProfileSmall
          data={data}
          className={className}
          index={index}
          forceDesktop={forceDesktop}
        />
      );
    default:
      return <ExpertProfileStandard data={data} className={className} />;
  }
};

export default ExpertProfileCard;

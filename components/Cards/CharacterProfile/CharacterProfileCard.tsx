import dynamic from 'next/dynamic';

const CharacterProfileSearch = dynamic(
  () => import('./CharacterProfileSearch/CharacterProfileSearch'),
);
const CharacterProfileStandard = dynamic(
  () => import('./CharacterProfileStandard/CharacterProfileStandard'),
);
const CharacterProfileNextUp = dynamic(
  () => import('./CharacterProfileNextUp/CharacterProfileNextUp'),
);

export enum CharacterProfileCardStyle {
  standard = 'standard',
  search = 'search',
  readMore = 'readMore',
  nextUp = 'nextUp',
}

export interface CharacterProfileData {
  name: string;
  shortBio?: string;
  slug: string;
  portraitImage: any;
}

interface CharacterProfileCardProps {
  data: CharacterProfileData;
  style: CharacterProfileCardStyle;
  className?: string;
  imageClassName?: string;
}

const CharacterProfileCard = ({
  data,
  style,
  className,
  imageClassName,
}: CharacterProfileCardProps) => {
  switch (style) {
    case CharacterProfileCardStyle.standard:
      return (
        <CharacterProfileStandard
          data={data}
          className={className}
          imageClassName={imageClassName}
        />
      );
    case CharacterProfileCardStyle.search:
      return <CharacterProfileSearch data={data} className={className} />;
    case CharacterProfileCardStyle.nextUp:
      return <CharacterProfileNextUp data={data} className={className} />;
    default:
      return <CharacterProfileStandard data={data} className={className} />;
  }
};

export default CharacterProfileCard;

import CharacterProfileStandard from './CharacterProfileStandard';
import { CharacterProfileData } from './CharacterProfileCard';

const CharacterProfileReadMore = ({
  data,
  index,
  onActionButtonClicked,
}: {
  data: CharacterProfileData;
  index: number;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  const { name, slug, portraitImage } = data;
  return (
    <CharacterProfileStandard
      index={index}
      data={{ name, slug, portraitImage }}
      onActionButtonClicked={onActionButtonClicked}
    />
  );
};

export default CharacterProfileReadMore;

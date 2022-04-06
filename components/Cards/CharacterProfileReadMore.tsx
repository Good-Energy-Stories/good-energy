import CharacterProfileStandard from './CharacterProfileStandard';
import { CharacterProfileData } from './CharacterProfileCard';

const CharacterProfileReadMore = ({
  data,
  index,
}: {
  data: CharacterProfileData;
  index: number;
}) => {
  const { name, slug, portraitImage } = data;
  return (
    <CharacterProfileStandard
      index={index}
      data={{ name, slug, portraitImage }}
    />
  );
};

export default CharacterProfileReadMore;

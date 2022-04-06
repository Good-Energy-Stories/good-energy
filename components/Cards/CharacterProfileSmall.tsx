import CharacterProfileStandard from './CharacterProfileStandard';
import { CharacterProfileData } from './CharacterProfileCard';

const CharacterProfileSmall = ({
  data,
  index,
  last,
}: {
  data: CharacterProfileData;
  index: number;
  last?: boolean;
}) => {
  return (
    <CharacterProfileStandard
      index={index}
      maxWidth={228}
      data={data}
      last={last}
    />
  );
};

export default CharacterProfileSmall;

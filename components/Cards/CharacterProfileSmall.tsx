import CharacterProfileStandard from './CharacterProfileStandard';
import { CharacterProfileData } from './CharacterProfileCard';

const CharacterProfileSmall = ({
  data,
  index,
  last,
  onActionButtonClicked,
}: {
  data: CharacterProfileData;
  index: number;
  last?: boolean;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  return (
    <CharacterProfileStandard
      index={index}
      maxWidth={228}
      data={data}
      last={last}
      onActionButtonClicked={onActionButtonClicked}
    />
  );
};

export default CharacterProfileSmall;

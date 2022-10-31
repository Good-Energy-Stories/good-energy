import ExpertSpotlightPage from './ExpertSpotlightPage';
import CharacterSpotlightPage from './CharacterSpotlightPage';

const SpotlightPageContent = ({ data }: any) => {
  const { _type } = data;
  switch (_type) {
    case 'characterProfile':
      return <CharacterSpotlightPage data={data} />;
    case 'expertProfile':
      return <ExpertSpotlightPage data={data} />;
    default:
      return null;
  }
};

export default SpotlightPageContent;

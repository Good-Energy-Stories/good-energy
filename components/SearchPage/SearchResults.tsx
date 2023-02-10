import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';

import { ArticleCardStyle, Card } from '../Cards';
import { CharacterProfileCardStyle } from '../Cards/CharacterProfile/CharacterProfileCard';
import { ExpertProfileCardStyle } from '../Cards/ExpertProfile/ExpertProfileCard';
import styles from './SearchResults.module.css';

const SearchResults = ({ data }: any) => {
  return (
    <>
      <div className={styles.container}>
        {data.map((c, i) => (
          <Card
            key={i}
            index={i}
            content={c}
            articleCardStyle={ArticleCardStyle.search}
            characterProfileCardStyle={CharacterProfileCardStyle.search}
            expertProfileCardStyle={ExpertProfileCardStyle.search}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;

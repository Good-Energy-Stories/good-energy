import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';

import { ArticleCardStyle, Card, CharacterProfileCardStyle } from '../Cards';
import { ExpertProfileCardStyle } from '../Cards/ExpertProfileCard';
import styles from './SearchResults.module.css';

const SearchResults = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSearchResults, filteredSearchResults },
  } = store;

  return (
    <>
      <div className={styles.container}>
        {filteredSearchResults.map((c, i) => (
          <Card
            key={i}
            index={i}
            last={i === playbookSearchResults.length - 1}
            content={c}
            articleCardStyle={ArticleCardStyle.search}
            characterProfileCardStyle={
              CharacterProfileCardStyle.featuredSecondary
            }
            expertProfileCardStyle={ExpertProfileCardStyle.search}
          />
        ))}
      </div>
    </>
  );
});

export default SearchResults;

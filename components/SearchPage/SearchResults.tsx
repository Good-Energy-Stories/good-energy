import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { useCallback } from 'react';
import { sanity } from '../../lib/sanity';
import { queries } from '../../data';
import { getClient } from '../../lib/sanity/sanity.server';
import { ThreeColumnLayout } from '../PlaybookHome';
import { ArticleCardStyle, Card, CharacterProfileCardStyle } from '../Cards';
import { ExpertProfileCardStyle } from '../Cards/ExpertProfileCard';

const SearchResults = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSearchResults, filteredSearchResults },
  } = store;

  return (
    <>
      <div>
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
        ))}{' '}
      </div>
      <style jsx>{`
        div {
          margin: 0 -5rem;
          margin-top: 2.5rem;
          grid-column: 2/4;
        }

        @media only screen and (max-width: 768px) {
          div {
            grid-column: 1/5;
            margin: 0 1.25rem;
          }
        }
      `}</style>
    </>
  );
});

export default SearchResults;

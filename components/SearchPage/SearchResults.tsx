import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { useCallback } from 'react';
import { sanity } from '../../lib/sanity';
import { queries } from '../../data';
import { getClient } from '../../lib/sanity/sanity.server';
import { ThreeColumnLayout } from '../PlaybookHome';
import { ArticleCardStyle, Card } from '../Cards';

const SearchResults = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSearchResults },
  } = store;

  return (
    <>
      <div>
        {playbookSearchResults.map((c, i) => (
          <Card
            key={i}
            index={i}
            last={i === playbookSearchResults.length - 1}
            content={c}
            articleCardStyle={ArticleCardStyle.featuredSecondary}
          />
        ))}{' '}
      </div>
      <style jsx>{`
        div {
          margin-top: 2.5rem;
          grid-column: 2/4;
        }
      `}</style>
    </>
  );
});

export default SearchResults;

import { AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import SearchLoader from './SearchLoader';
import SearchResultsFor from './SearchResultsFor';

const SearchInformation = observer(() => {
  const store = useStore();
  const {
    dataStore: { playbookSearchLoading },
  } = store;

  return (
    <AnimatePresence exitBeforeEnter>
      {playbookSearchLoading ? <SearchLoader /> : <SearchResultsFor />}
    </AnimatePresence>
  );
});

export default SearchInformation;

import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { useCallback, useEffect } from 'react';
import { queries } from '../../data';
import { getClient } from '../../lib/sanity/sanity.server';
import { useRouter } from 'next/router';
import * as ga from '../../lib/ga';
import { SubmitSearchButton } from '.';
import styles from './SearchBar.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const SearchBar = observer(() => {
  const router = useRouter();
  const { query } = router.query;
  const store = useStore();
  const {
    dataStore: {
      playbookSearchQuery,
      setPlaybookSearchLoading,
      setPlaybookSearchQuery,
      setPlaybookSearchResults,
      setPlaybookLastSearchedQuery,
    },
  } = store;

  const search = useCallback(
    async (query) => {
      setPlaybookSearchLoading(true);
      ga.event({
        action: 'search',
        params: {
          search_term: query,
        },
      });
      setPlaybookLastSearchedQuery(query);
      const params = { query: `${query}*` };
      const articleSearchResults = await getClient().fetch(
        queries.searchArticlesQuery,
        params,
      );
      const characterProfileSearchResults = await getClient().fetch(
        queries.searchCharacterProfilesQuery,
        params,
      );

      const expertProfileSearchResults = await getClient().fetch(
        queries.searchExpertProfilesQuery,
        params,
      );
      const featuredVoicesSearchResults = await getClient().fetch(
        queries.searchFeaturedVoicesQuery,
        params,
      );
      const results = [
        ...articleSearchResults,
        ...characterProfileSearchResults,
        ...expertProfileSearchResults,
        ...featuredVoicesSearchResults,
      ]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setPlaybookSearchResults(results);
    },
    [
      setPlaybookSearchLoading,
      setPlaybookSearchResults,
      setPlaybookLastSearchedQuery,
    ],
  );

  useEffect(() => {
    if (query) {
      setPlaybookSearchQuery(query);
      search(query);
    }
  }, [query, search, setPlaybookSearchQuery]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <input
            className={cx('nav-link-xl', styles.input)}
            type="text"
            placeholder="Search"
            value={playbookSearchQuery}
            onChange={(e) => {
              const query = e.target.value;
              setPlaybookSearchQuery(query);
            }}
          />
          <SubmitSearchButton onClick={() => search(playbookSearchQuery)} />
        </div>
      </div>
    </>
  );
});

export default SearchBar;

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import styles from './SearchPage.module.css';
import { useCallback, useEffect, useState } from 'react';
import * as ga from '../../lib/ga';
import { useRouter } from 'next/router';
import { getClient } from '@/lib/sanity/sanity.server';
import { queries } from '@/data/index';
import { AnimatePresence } from 'framer-motion';
import SearchLoader from './SearchLoader';
import SearchResultsFor from './SearchResultsFor';

const SearchPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(
    async (query) => {
      setLoading(true);
      ga.event({
        action: 'search',
        params: {
          search_term: query,
        },
      });

      const searchResults = await getClient().fetch(queries.searchQuery, {
        query: `${query}*`,
      });

      const results = [
        ...searchResults.articles,
        ...searchResults.characterProfiles,
        ...searchResults.expertProfiles,
        ...searchResults.featuredVoices,
      ];

      setSearchResults(results);
      setLoading(false);
    },
    [setSearchResults, setLoading],
  );

  const getQueryParam = useCallback((query) => {
    if (typeof query === 'string') {
      return query;
    } else if (Array.isArray(query)) {
      return query.join(',');
    } else {
      return JSON.stringify(query);
    }
  }, []);

  const handleSubmit = () => {
    setSearchResults([]);
    router.push(`/playbook/search?query=${query}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    // Always do navigations after the first render
    if (router.query.query && router.query.query !== '') {
      setQuery(getQueryParam(router.query.query));
      search(router.query.query);
    }
  }, [router.query, search, getQueryParam]);

  return (
    <div className={styles.container}>
      <SearchBar
        query={query}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={(_) => handleSubmit()}
      />
      <AnimatePresence exitBeforeEnter>
        {loading ? <SearchLoader /> : <SearchResultsFor />}
      </AnimatePresence>
      <SearchResults loading={loading} data={searchResults} />
    </div>
  );
};

export default SearchPage;

import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { useCallback, useEffect } from 'react';
import { queries } from '../../data';
import { getClient } from '../../lib/sanity/sanity.server';
import { useRouter } from 'next/router';
import * as ga from '../../lib/ga';
import { SubmitSearchButton } from '.';
import { BIG_SEARCH_BUTTON_WIDTH } from './SubmitSearchButton';

const SearchBar = observer(
  ({ expand = false, width }: { expand?: boolean; width?: string }) => {
    const router = useRouter();
    const { query } = router.query;
    const store = useStore();
    const {
      dataStore: {
        playbookSearchQuery,
        setPlaybookSearchQuery,
        setPlaybookSearchResults,
        setPlaybookLastSearchedQuery,
      },
    } = store;

    const search = useCallback(async (query) => {
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
    }, []);

    useEffect(() => {
      if (query) {
        setPlaybookSearchQuery(query);
        search(query);
      }
    }, [query, search, setPlaybookSearchQuery]);

    return (
      <>
        <div className="container">
          <div className="search-bar">
            <input
              className="nav-link-xl"
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

        <style jsx>{`
          .container {
            grid-column-start: 1;
            grid-column-end: 5;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .search-bar {
            background-color: var(--blueFive);
            border: 2px solid var(--black);
            max-width: 800px;
            margin-top: 1.25rem;
            padding: 0.625rem 1.25rem;
            width: 100%;
            position: relative;
            padding-right: calc(0.625rem + ${BIG_SEARCH_BUTTON_WIDTH}px);
          }
          .search-icon {
            display: flex;
            align-items: center;
            margin-right: 0.625rem;
          }
          span {
            margin-right: 5px;
          }
          input[type='text'] {
            text-transform: uppercase;
            padding: 0;
            text-align: left;
            color: var(--black);
            border: 0;
            width: 100%;
            background-color: transparent;
          }
          ::placeholder {
            color: var(--black);
          }

          :-ms-input-placeholder {
            color: var(--black);
          }

          ::-ms-input-placeholder {
            color: var(--black);
          }

          @media only screen and (max-width: 768px) {
            .container {
              padding-bottom: 40%;
            }
            .search-bar {
              margin: 0 1.25rem;
              margin-top: 2.5rem;
            }
            .search-icon {
              margin-right: 0;
            }
            .search-button-label {
              display: none;
            }
          }
        `}</style>
      </>
    );
  },
);

export default SearchBar;

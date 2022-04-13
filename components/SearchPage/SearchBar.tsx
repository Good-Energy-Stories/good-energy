import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { useCallback } from 'react';
import { sanity } from '../../lib/sanity';
import { queries } from '../../data';
import { getClient } from '../../lib/sanity/sanity.server';

const SearchBar = observer(
  ({ expand = false, width }: { expand?: boolean; width?: string }) => {
    const store = useStore();
    const {
      dataStore: {
        playbookSearchQuery,
        setPlaybookSearchQuery,
        setPlaybookSearchResults,
      },
    } = store;

    const search = useCallback(async (query) => {
      const params = { query: `${query}*` };
      const searchResults = await getClient().fetch(
        queries.searchQuery,
        params,
      );
      console.log(searchResults);
      setPlaybookSearchResults(searchResults);
    }, []);
    return (
      <>
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
          <div
            className="submit-search-button"
            onClick={() => search(playbookSearchQuery)}
          >
            <div className="search-icon ">
              <SearchIcon fill="var(--black);" />
              <div className="search-button-label nav-link-xl">Search</div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .search-bar {
            grid-column-start: 1;
            grid-column-end: 5;

            background-color: var(--blueFive);
            border: 2px solid var(--black);
            margin: 0 5rem;
            margin-top: 1.25rem;
            padding: 0.625rem 1.25rem;
            display: flex;
            align-items: center;

            position: relative;
          }
          .search-icon {
            display: flex;
            align-items: center;
            margin-right: 0.625rem;
          }
          .search-button-label {
            padding-top: 1px;
            margin-left: 10px;
            text-transform: uppercase;
          }
          .submit-search-button {
            cursor: pointer;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            background-color: var(--blueFour);
            display: flex;
            align-items: center;
            padding: 0 1.25rem;
            border-left: 2px solid var(--black);
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
            .search-bar {
              width: ${width ?? 'calc(100vw - 5rem)'};
            }
          }
        `}</style>
      </>
    );
  },
);

export default SearchBar;

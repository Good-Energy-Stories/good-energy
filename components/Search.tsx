import SearchIcon from '../public/search.svg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { SearchButton } from './Landing';
import { useState } from 'react';
const Search = ({
  expand = false,
  width,
}: {
  expand?: boolean;
  width?: string;
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: '/playbook/search',
      query: { query: searchQuery },
    });
  };
  return (
    <>
      <div className="search-bar">
        <div className="search-icon">
          <SearchIcon fill="var(--white)" />
        </div>
        <input
          className="nav-link-xl"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton
          active={searchQuery.length !== 0}
          onClick={() => handleClick()}
        />
      </div>
      <style jsx>{`
        .search-bar {
          grid-column-start: 1;
          grid-column-end: 2;
          width: ${expand ? '100%' : 'auto'};
          background-color: var(--black);
          border: 2px solid var(--white);
          margin-top: 1.25rem;
          padding: 0.625rem 1.25rem;
          display: flex;
          align-items: center;
          margin-right: 5rem;
          position: relative;
          overflow: hidden;
        }
        .search-icon {
          display: inline-block;
          margin-right: 0.625rem;
        }
        span {
          margin-right: 5px;
        }
        input[type='text'] {
          text-transform: uppercase;

          text-align: left;
          color: var(--white);
          border: 0;
          width: 100%;
          background-color: transparent;
        }
        ::placeholder {
          color: var(--white);
        }

        :-ms-input-placeholder {
          color: var(--white);
        }

        ::-ms-input-placeholder {
          color: var(--white);
        }
        @media only screen and (max-width: 768px) {
          .search-bar {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Search;

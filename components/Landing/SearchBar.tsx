import SearchIcon from '../../public/search.svg';
import { NavBarStyle } from '../StickyNavBar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SearchButton, { SEARCH_BUTTON_WIDTH } from './SearchButton';
import * as ga from '../../lib/ga';
import { motion } from 'framer-motion';
import NavLogo from './NavLogo';

const SearchBar = ({ theme }: { theme?: NavBarStyle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const handleClick = () => {
    ga.event({
      action: 'search_initiated',
      params: {
        origin: 'landing_page_nav_bar',
      },
    });
    router.push({
      pathname: '/playbook/search',
      query: { query: searchQuery },
    });
  };

  return (
    <>
      <div className="search-container">
        <motion.span
          animate={{
            transform:
              searchQuery.length !== 0
                ? 'matrix(1.20,-0.20,0.20,1.20,-2,2)'
                : 'matrix(1,0,0,1,0,2)',
          }}
        >
          <SearchIcon fill={theme.textColor} />
        </motion.span>
        <input
          type="text"
          className="nav-link-xl"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton
          active={searchQuery.length !== 0}
          onClick={() => handleClick()}
        />
      </div>
      <NavLogo theme={theme} />
      <style jsx>{`
        .search-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          padding-left: 1.25rem;
          border-left: 5px solid ${theme.textColor};
          display: flex;
          align-items: center;
          grid-column: span 1;
          margin-left: 8rem;
        }
        button {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          border: none;
          padding: 15px 24px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 28px;
          cursor: pointer;
          background-color: var(--pink);
        }
        input[type='text'] {
          padding: 0.625rem;
          text-transform: uppercase;
          color: ${theme.textColor};
          border: 0;
          background-color: transparent;
          width: 100%;
          padding-right: calc(0.625rem + ${SEARCH_BUTTON_WIDTH}px);
        }
        ::placeholder {
          color: ${theme.textColor};
        }

        :-ms-input-placeholder {
          color: ${theme.textColor};
        }

        ::-ms-input-placeholder {
          color: ${theme.textColor};
        }

        @media only screen and (max-width: 1080px) {
          .search-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default SearchBar;

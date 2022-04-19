import SearchIcon from '../../public/search.svg';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { useCallback, useEffect } from 'react';
import { sanity } from '../../lib/sanity';
import { queries } from '../../data';
import { getClient } from '../../lib/sanity/sanity.server';
import { useRouter } from 'next/router';
import * as ga from '../../lib/ga';
import { useState } from 'react';

const SearchBar = observer(({ onClick }: { onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        className="submit-search-button"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="search-icon ">
          <motion.span
            animate={{
              transform: hovered
                ? 'matrix(1.20,-0.20,0.20,1.20,-2,2)'
                : 'matrix(1,0,0,1,0,2)',
            }}
          >
            <SearchIcon fill="var(--black);" />
          </motion.span>
          <div className="search-button-label nav-link-xl">
            <motion.div
              animate={{ scale: hovered ? 0.95 : 1 }}
              whileTap={{ scale: 0.9 }}
            >
              Search
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @media only screen and (max-width: 768px) {
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
});

export default SearchBar;

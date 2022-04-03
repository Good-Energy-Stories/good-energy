import SearchIcon from '../public/search.svg';
import { motion } from 'framer-motion';
const Search = ({ expand = false }: { expand?: boolean }) => {
  return (
    <>
      <div className="search-bar">
        <div className="search-icon">
          <SearchIcon fill="var(--white)" />
        </div>
        <input className="nav-link-xl" type="text" placeholder="Search" />
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
      `}</style>
    </>
  );
};

export default Search;

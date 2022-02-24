import HamburgerIcon from '../public/hamburger.svg';
import SearchIcon from '../public/search.svg';

const NavLinks = () => {
  return (
    <div>
      <button className="border">
        <a>Contents</a>
      </button>
      <button>
        <a>Home</a>
      </button>
      <button>
        <a>Resources</a>
      </button>
      <button>
        <a>About</a>
      </button>
      <style jsx>{`
        div {
          display: flex;
        }
        .border {
          border-left: 4px solid var(--black);
          border-right: 4px solid var(--black);
        }

        @media only screen and (max-width: 768px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const NavButtons = () => {
  return (
    <div>
      <button>
        <HamburgerIcon />
      </button>
      <NavLinks />
      <style jsx>{`
        div {
          display: flex;
        }

        @media only screen and (max-width: 768px) {
          div {
          }
        }
      `}</style>
    </div>
  );
};

const SearchBar = () => {
  return (
    <>
      <div>
        <SearchIcon />
        <input type="text" placeholder="Search" />
        <style jsx>{`
          div {
            border-left: 5px solid var(--black);
            padding: 0.625rem 1.25rem;
            display: flex;
            align-items: center;
          }
          input {
            margin-left: 0.625rem;
          }

          @media only screen and (max-width: 768px) {
            div {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

const StickyNavBar = (props) => {
  return (
    <>
      <div>
        <NavButtons />
        <SearchBar />
        <style jsx>{`
          div {
            border-top: 5px solid var(--black);
            border-bottom: 5px solid var(--black);
            display: flex;
            justify-content: space-between;
            position: sticky;
            top: 0;
          }

          @media only screen and (max-width: 768px) {
            div {
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default StickyNavBar;

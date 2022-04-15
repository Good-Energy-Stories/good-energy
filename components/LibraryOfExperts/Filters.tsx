import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { Dropdown, PLAYBOOK_NAV_HEIGHT } from '../';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import ExpertTypeToggle from './ExpertTypeToggle';
import DropdownFilterSection from './DropdownFilterSection';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
    height: 'auto',
  },
  out: {
    opacity: 0,
    height: 0,
  },
};

const Filters = observer(() => {
  const store = useStore();
  const {
    dataStore: {
      setPlaybookSearchContentFilter,
      playbookSearchContentFilter,
      setPlaybookSearchTagFilter,
      playbookSearchTagFilter,
      searchResultsTags,
      setLibraryOfExpertsSortOrder,
      libraryOfExpertsSortOrder,
      libraryOfExpertsTags,
      setLibraryOfExpertsTagFilter,
      libraryOfExpertsTagFilter,
    },
  } = store;
  return (
    <div className="container">
      <ExpertTypeToggle />
      <div className="spacer-large" />
      <DropdownFilterSection
        label={'Filter By'}
        placeholder={'Tag'}
        onChange={(e) => setLibraryOfExpertsTagFilter(e.value)}
        value={libraryOfExpertsTagFilter}
        options={[
          { label: 'None', value: null },
          ...libraryOfExpertsTags.map((tag) => ({ label: tag, value: tag })),
        ]}
      />
      <div className="spacer-small" />
      <DropdownFilterSection
        label={'Sort By'}
        placeholder={'A to Z'}
        onChange={(e) => setLibraryOfExpertsSortOrder(e.value)}
        value={libraryOfExpertsSortOrder}
        options={[
          { label: 'A to Z', value: 'ascending' },
          { label: 'Z to A', value: 'descending' },
        ]}
      />

      <style jsx>{`
        .spacer-large {
          width: 2.5rem;
        }
        .spacer-small {
          width: 1.25rem;
        }
        .container {
          grid-column: 1/5;
          padding: 0 1.25rem;
          margin-bottom: 2.5rem;
          display: flex;
        }
        .dropdown-filter-section {
          margin-left: 2.5rem;
        }
        .spacer {
          width: 0.625rem;
        }
        .filter-row {
          display: flex;
        }
        h4 {
          text-transform: none;
          margin: 0;
          margin-bottom: 0.625rem;
        }
      `}</style>
    </div>
  );
});

export default Filters;

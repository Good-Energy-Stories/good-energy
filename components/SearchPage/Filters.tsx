import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { Dropdown, PLAYBOOK_NAV_HEIGHT } from '../';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
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
    },
  } = store;
  return (
    <div className="container">
      <h4>Filters</h4>
      <div className="filter-row">
        <Dropdown
          onChange={(e) => setPlaybookSearchContentFilter(e.value)}
          value={playbookSearchContentFilter}
          placeholder="Type"
          options={[
            { label: 'None', value: null },
            { label: 'Articles', value: 'article' },
            { label: 'Expert Profiles', value: 'expertProfile' },
            { label: 'Character Profiles', value: 'characterProfile' },
            { label: 'Featured Voices', value: 'featuredVoice' },
          ]}
        />
        <div className="spacer" />
        <Dropdown
          onChange={(e) => setPlaybookSearchTagFilter(e.value)}
          value={playbookSearchTagFilter}
          placeholder="Tags"
          options={[
            { label: 'None', value: null },
            ...searchResultsTags.map((tag) => ({ label: tag, value: tag })),
          ]}
        />
      </div>
      <style jsx>{`
        .container {
          grid-column: 1/5;
        }
        .spacer {
          height: 0.625rem;
          width: 0.625rem;
        }
        .filter-row {
          display: flex;
        }
        h4 {
          text-transform: none;
          margin-bottom: 0.625rem;
        }
        @media only screen and (max-width: 768px) {
          .filter-row {
            flex-direction: column;
            margin-bottom: 0.625rem;
          }
        }
      `}</style>
    </div>
  );
});

export default Filters;

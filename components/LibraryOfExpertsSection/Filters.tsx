import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import ExpertTypeToggle from './ExpertTypeToggle';
import DropdownFilterSection from './DropdownFilterSection';
import styles from './Filters.module.css';

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
      setLibraryOfExpertsSortOrder,
      libraryOfExpertsSortOrder,
      libraryOfExpertsTags,
      setLibraryOfExpertsTagFilter,
      libraryOfExpertsTagFilter,
    },
  } = store;
  return (
    <aside className={styles.container}>
      <ExpertTypeToggle />

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
    </aside>
  );
});

export default Filters;

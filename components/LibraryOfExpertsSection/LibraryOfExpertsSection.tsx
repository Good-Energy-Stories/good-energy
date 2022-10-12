import { useEffect } from 'react';
import { queries } from '../../data';
import { sanity } from '../../lib/sanity';

import { useStore } from '../../stores/store';
import Experts from './Experts';
import Filters from './Filters';
import styles from './LibraryOfExpertsSection.module.css';

const LibraryOfExpertsSection = ({ data }) => {
  const store = useStore();
  const {
    dataStore: { setLibraryOfExpertsResults },
  } = store;

  useEffect(() => {
    const getExpertProfiles = async () => {
      const expertProfiles = await sanity.fetch(queries.allExpertProfiles);
      setLibraryOfExpertsResults(expertProfiles);
    };
    getExpertProfiles();
  }, [setLibraryOfExpertsResults]);

  return (
    <div className={styles.container}>
      <Filters />
      <Experts />
    </div>
  );
};

export default LibraryOfExpertsSection;

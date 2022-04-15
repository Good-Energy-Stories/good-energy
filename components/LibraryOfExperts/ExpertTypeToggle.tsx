import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { Dropdown, PLAYBOOK_NAV_HEIGHT } from '../';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import ExpertTypeToggleButton from './ExpertTypeToggleButton';

const ExpertTypeToggle = observer(() => {
  const store = useStore();
  const {
    dataStore: { setLibraryOfExpertsCategory, libraryOfExpertsCategory },
  } = store;
  const tabs = [
    { label: 'Individuals', value: 'individual' },
    { label: 'Organizations', value: 'organization' },
  ];
  return (
    <div className="container">
      {tabs.map((tab) => (
        <ExpertTypeToggleButton
          key={tab.value}
          label={tab.label}
          onClick={() => setLibraryOfExpertsCategory(tab.value)}
          active={tab.value === libraryOfExpertsCategory}
        />
      ))}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
});

export default ExpertTypeToggle;

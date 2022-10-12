import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './ShowAllButton.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const ShowAllButton = ({ onClick, showAll }) => {
  const label = showAll ? 'Hide All' : 'Show All';
  return (
    <>
      <button className={cx('label-small', styles.button)} onClick={onClick}>
        {label}
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <motion.path
            animate={{ rotate: showAll ? 180 : 0 }}
            d="M7.29102 9.89551L12.4993 15.1038L17.7077 9.89551H7.29102Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
};

export default ShowAllButton;

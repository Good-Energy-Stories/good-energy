import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
const { className, styles } = css.resolve`
  h4 {
    margin: 0;
    margin-bottom: 0.625rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    dh4 {
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

const ExpertTypeToggleButton = ({ label, active, onClick }) => {
  return (
    <motion.h4
      className={className}
      onClick={onClick}
      animate={{ opacity: active ? 1 : 0.4 }}
    >
      {label}
      {styles}
    </motion.h4>
  );
};

export default ExpertTypeToggleButton;

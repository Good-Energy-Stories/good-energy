import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import ArrowIcon from '../../../public/arrow.svg';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import styles from './Header.module.css';

const variants = {
  expanded: {
    rotate: 0,
  },
  collapsed: {
    rotate: 180,
  },
};

const Arrow = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={variants}
    >
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <path d="M0.583008 11.2083L10.9997 0.791656L21.4163 11.2083H0.583008Z" />
      </svg>
    </motion.div>
  );
};

const StoryPossibility = ({
  collapsed,
  toggleCollapse,
}: {
  collapsed: boolean;
  toggleCollapse: () => void;
}) => {
  return (
    <>
      <div onClick={toggleCollapse} className={styles.container}>
        <h4>Story Seed</h4>
        <Arrow collapsed={collapsed} />
      </div>
    </>
  );
};

export default StoryPossibility;

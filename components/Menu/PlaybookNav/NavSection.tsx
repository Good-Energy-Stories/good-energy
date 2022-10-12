import { motion } from 'framer-motion';
import styles from './NavSection.module.css';
import NavItem from './NavItem';
import { useState } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';

const variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: {
        ...FRAMER_TRANSITION_FASTEASE,
      },
      height: {
        ...FRAMER_TRANSITION_FASTEASE,
        delay: FRAMER_TRANSITION_FASTEASE.duration,
      },
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      opacity: {
        ...FRAMER_TRANSITION_FASTEASE,
        delay: FRAMER_TRANSITION_FASTEASE.duration,
      },
      height: {
        ...FRAMER_TRANSITION_FASTEASE,
      },
    },
  },
};

const NavSection = ({ data, showAll }) => {
  const { title, contents } = data;
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const open = showAll || expanded;
  return (
    <>
      <ul className={styles.container}>
        <div
          data-disabled={showAll}
          aria-haspopup="true"
          className={styles.titleContainer}
          onClick={toggleExpanded}
        >
          <h4 className={styles.title}>{title}</h4>
          <motion.svg
            style={{ pointerEvents: showAll ? 'auto' : 'none' }}
            animate={{ opacity: showAll ? 0 : 1 }}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <motion.path
              animate={{ rotate: open ? 180 : 0 }}
              d="M7.29102 9.89551L12.4993 15.1038L17.7077 9.89551H7.29102Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <motion.div
          style={{ pointerEvents: open ? 'auto' : 'none' }}
          initial="closed"
          animate={open ? 'open' : 'closed'}
          variants={variants}
          className={styles.menuContainer}
        >
          {contents?.map((item, index) => (
            <NavItem
              key={index}
              data={item}
              parentExpanded={expanded}
              showAll={showAll}
            />
          ))}
        </motion.div>
      </ul>
    </>
  );
};

export default NavSection;

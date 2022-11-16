import { motion } from 'framer-motion';
import styles from './Accordion.module.css';
import classnames from 'classnames';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import DropdownButton from '../Buttons/DropdownButton/DropdownButton';
import { useState } from 'react';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEASE,
  FRAMER_TRANSITION_SPRING,
} from '../../lib/framer/framer-animations';
import TwoColumnLayout from '../TwoColumnLayout/TwoColumnLayout';

const cx = classnames.bind(styles);

const variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: {
        ...FRAMER_TRANSITION_SPRING,
      },
      height: {
        ...FRAMER_TRANSITION_SPRING,
      },
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      opacity: {
        ...FRAMER_TRANSITION_SPRING,
        delay: 0.2,
      },
      height: {
        ...FRAMER_TRANSITION_SPRING,
      },
    },
  },
};

const Accordion = ({ data }: any) => {
  const { title, content, marginBottom } = data;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <>
      <div
        className={cx(styles.container, marginBottom && styles.marginBottom)}
      >
        <div className={styles.title}>
          <PortableText value={title} components={PortableTextSerializer} />
        </div>
        <div className={styles.lineContainerOne}>
          <div className={styles.lineSection}></div>
        </div>
        <div className={styles.lineContainerTwo}>
          <div className={styles.lineSection}>
            <DropdownButton
              hiddenLabel="Show Details"
              expandedLabel="Hide Details"
              className={styles.button}
              expanded={expanded}
              onClick={toggleExpanded}
            />
          </div>
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={expanded ? 'open' : 'closed'}
        variants={variants}
        transition={FRAMER_TRANSITION_EASEOUT}
        className={styles.content}
      >
        <TwoColumnLayout data={{ ...content, noPadding: true }} />
      </motion.div>
    </>
  );
};

export default Accordion;

import { motion } from 'framer-motion';
import styles from './WrittenContent.module.css';
import classnames from 'classnames';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import DropdownButton from '../Buttons/DropdownButton/DropdownButton';
import { useState } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';

const cx = classnames.bind(styles);

const WrittenContent = ({ data }: any) => {
  const { content, truncateContent } = data;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const shouldTruncate = truncateContent && !expanded;
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.inner}
        animate={{ height: shouldTruncate ? 350 : 'auto' }}
        transition={FRAMER_TRANSITION_EASEOUT}
        data-truncate-content={shouldTruncate ? 'true' : 'false'}
      >
        <PortableText value={content} components={PortableTextSerializer} />
      </motion.div>
      {truncateContent && (
        <DropdownButton expanded={expanded} onClick={toggleExpanded} />
      )}
    </div>
  );
};

export default WrittenContent;

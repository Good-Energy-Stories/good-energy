import { motion } from 'framer-motion';
import styles from './TeamMemberCard.module.css';

import { PortableText } from '@portabletext/react';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEASE,
} from '../../../lib/framer/framer-animations';
import { useState } from 'react';
import Dropdown from './Dropdown';
import DropdownButton from '../../Buttons/DropdownButton/DropdownButton';
import Portrait, { PortraitSizes } from './Portrait/Portrait';

const cx = classnames.bind(styles);
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const getColor = (i) => {
  const colors = ['var(--yellow)', 'var(--pink)', 'var(--blueFour)'];
  return colors[i % colors.length];
};

const TeamMemberCard = ({
  data,
  index,
}: {
  data: any;
  index: number;
  last?: boolean;
  marginBottom?: string;
}) => {
  const { name, bio, title, portraitImage, pronouns, links } = data;
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  return (
    <motion.article
      ref={ref}
      initial={'out'}
      animate={inView ? 'in' : 'out'}
      variants={variants}
      transition={FRAMER_TRANSITION_EASEOUT}
      className={styles.container}
    >
      <div className={styles.left}>
        {portraitImage && (
          <Portrait
            image={portraitImage}
            size={PortraitSizes.medium}
            backgroundColor={getColor(index)}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.right}>
        {name && <h2>{name}</h2>}
        {pronouns && (
          <div className={cx(styles.pronouns, 'label-medium')}>{pronouns}</div>
        )}
        {title && <h4 className={styles.title}>{title}</h4>}
        <DropdownButton
          className={styles.dropdownButton}
          expanded={expanded}
          onClick={toggleExpanded}
          hiddenLabel={'Show Bio'}
          expandedLabel={'Hide Bio'}
        />
        <Dropdown expanded={expanded}>
          <PortableText value={bio} />
        </Dropdown>
      </div>
    </motion.article>
  );
};

export default TeamMemberCard;

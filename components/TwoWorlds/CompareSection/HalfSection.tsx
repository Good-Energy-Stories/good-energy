import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import { MODE } from '../../../stores/TwoWorldsStore';
import { useIsSmall } from '../../../utils/useMediaQuery';
import useWindowDimensions from '../../../utils/useWindowDimenions';
import PortableTextSerializer from '../../PortableTextSerializer';
import Section from '../Section/Section';
import styles from './HalfSection.module.css';

const variants = {
  active: ({ direction, width }) => ({
    opacity: 1,
    transform: `matrix(1,0.00,0.00,1,1,0)`,
    filter: 'blur(0px)',
  }),
  inactive: ({ direction }) => ({
    opacity: 0.3,
    transform: `matrix(1,0.00,0.00,1,${direction * 1},0)`,
    filter: 'blur(4px)',
  }),
};

const mobileVariants = {
  active: ({ direction, width }) => ({
    opacity: 1,
    transform: `matrix(1,0.00,0.00,1,${direction * -1},0)`,
    filter: 'blur(0px)',
  }),
  inactive: ({ direction }) => ({
    opacity: 0.3,
    transform: `matrix(1,0.00,0.00,1,${direction * 1},0)`,
    filter: 'blur(4px)',
  }),
};
const HalfSection = ({
  mode,
  year,
  data,
  active,
  direction,
}: {
  mode: MODE;
  year: string;
  data: any;
  active: boolean;
  direction: 1 | -1;
}) => {
  const { width } = useWindowDimensions();
  const isSmall = useIsSmall();
  return (
    <motion.div
      data-mode={mode}
      custom={{ direction, width }}
      transition={FRAMER_TRANSITION_EASEOUT}
      animate={active ? 'active' : 'inactive'}
      variants={isSmall ? mobileVariants : variants}
      className={styles.container}
    >
      <h3 className={styles.title}>
        {mode === MODE.COLLAPSE ? 'Collapse' : 'Rise'}
      </h3>
      <h1 className={styles.year}>{year}</h1>
      <div>
        {data.map(({ title, body }) => (
          <div key={title} className={styles.inner}>
            {title && <h3 className={styles.sectionTitle}>{title}</h3>}
            <PortableText value={body} components={PortableTextSerializer} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HalfSection;

import { motion } from 'framer-motion';
import { PortableTextSerializer } from '../..';
import { PortableText } from '@portabletext/react';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import styles from './Header.module.css';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Header = ({
  heroImage,
  title,
  description,
}: {
  heroImage?: any;
  title: string;
  description: any;
  fittedText?: boolean;
}) => {
  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={'in'}
      variants={variants}
      className={styles.container}
    >
      <div className={styles.inner}>
        <Breadcrumbs className={styles.breadcrumbs} />
      </div>

      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>
        <PortableText value={description} components={PortableTextSerializer} />
      </div>
    </motion.div>
  );
};

export default Header;

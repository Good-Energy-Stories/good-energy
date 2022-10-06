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
  bannerImage,
  title,
  description,
}: {
  bannerImage?: any;
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
        {bannerImage && (
          <img
            className={styles.image}
            alt={bannerImage?.caption}
            src={imageUrlFor(bannerImage).width(1080).url()}
          />
        )}
      </div>

      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>
        <PortableText value={description} components={PortableTextSerializer} />
      </div>
      <img className={styles.image} src="/press-header.png" />
    </motion.div>
  );
};

export default Header;

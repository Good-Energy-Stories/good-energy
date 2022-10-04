import { motion } from 'framer-motion';

import { imageUrlFor } from '../../../utils/imageUrlFor';
import styles from './Testimonial.module.css';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Testimonial = ({ data }: any) => {
  const { content, attribution } = data;
  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={'in'}
      variants={variants}
      className={styles.container}
    >
      <div className={cx('quote-lg', styles.content)}>{content}</div>
      <div className={styles.attribution}>
        {attribution?.image && (
          <div className={styles.image}>
            <img src={imageUrlFor(attribution.image).url()} />
          </div>
        )}
        {attribution?.name && (
          <h4 className={styles.name}>{attribution.name}</h4>
        )}
        {attribution?.title && (
          <div className={cx('h4-subheading', styles.title)}>
            {attribution.title}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Testimonial;

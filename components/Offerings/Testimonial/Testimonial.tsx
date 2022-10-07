import { motion } from 'framer-motion';

import { imageUrlFor } from '../../../utils/imageUrlFor';
import styles from './Testimonial.module.css';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import classnames from 'classnames';
import { useInView } from 'react-intersection-observer';
const cx = classnames.bind(styles);
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

enum TestimonialSize {
  Small = 'small',
  Large = 'large',
}
const Testimonial = ({ data }: any) => {
  const { content, size, attribution } = data;
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={cx(
        styles.container,
        data?.marginBottom && styles.marginBottom,
      )}
    >
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        initial={'out'}
        animate={inView ? 'in' : 'out'}
        variants={variants}
        className={cx(
          size === TestimonialSize.Large && 'quote-xl',
          size === TestimonialSize.Small && 'quote-lg',
          styles.content,
        )}
      >
        {content}
      </motion.div>
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
    </div>
  );
};

export default Testimonial;

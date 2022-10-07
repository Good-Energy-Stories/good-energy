import { motion, useInView } from 'framer-motion';
import styles from './InlineQuote.module.css';
import classnames from 'classnames';
import { useRef } from 'react';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';
const cx = classnames.bind(styles);

const SourceLink = ({ data }: any) => {
  const { url, title } = data;
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cx('h3-subheading-italic', styles.url)}
      >
        {data.title}
      </a>
    );
  }

  return data.title;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const InlineQuote = ({ data }: any) => {
  const { quote, attribution } = data;
  const ref = useRef(null);
  const isInView = useInView(ref);
  if (!quote) return null;
  return (
    <div ref={ref} className={cx(styles.container)}>
      <div className={cx(styles.inner)}>
        <div className={cx('quote-md', styles.quote)}>
          <motion.span
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={FRAMER_TRANSITION_FASTEASE}
          >
            {quote}
          </motion.span>
        </div>
        <div className={styles.attribution}>
          {attribution?.name && (
            <div className={cx('h3', styles.name)}>{attribution.name}</div>
          )}
          {attribution?.title && (
            <div className={cx('h3-subheading', styles.name)}>
              {attribution.title}
              {attribution?.source && (
                <span className={cx('h3-subheading-italic', styles.source)}>
                  {`, `}
                  <SourceLink data={attribution.source} />
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InlineQuote;

import { motion } from 'framer-motion';
import styles from './ImageCarousel.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { useCallback, useState } from 'react';
import useInterval from '../../utils/useInterval';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';

const cx = classnames.bind(styles);

const variants = {
  active: {
    clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)',
  },
  inactive: {
    clipPath: [
      'polygon(0% 100%,0% 0%,100% 0%,0% 100%)',
      'polygon(0% 100%,0% 0%,0% 0%,0% 100%)',
    ],
  },
};

const ImageCarousel = ({ data }: any) => {
  const { content } = data;

  const [activeIndex, setActiveIndex] = useState(0);
  const [skipNextInterval, setSkipNextInterval] = useState(false);

  const SLIDE_DURATION = 4;
  useInterval(() => {
    if (skipNextInterval) {
      setSkipNextInterval(false);
      return;
    }
    setActiveIndex((prev) => (prev + 1 > content.length - 1 ? 0 : prev + 1));
  }, SLIDE_DURATION * 1000);

  const renderImages = (content) => {
    return content.map((image, index) => {
      const active = index <= activeIndex;
      const src = imageUrlFor(image).width(800).url();
      return (
        <motion.img
          key={src}
          variants={variants}
          animate={active ? 'active' : 'inactive'}
          transition={FRAMER_TRANSITION_EASEOUT}
          className={styles.image}
          src={src}
        />
      );
    });
  };

  const renderDots = useCallback(
    (content) => {
      return content.map((image, index) => {
        const active = index === activeIndex;
        return (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setSkipNextInterval(true);
            }}
            className={cx(styles.dot, active && styles.active)}
          />
        );
      });
    },
    [activeIndex],
  );

  if (!content) return null;
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{renderImages(content)}</div>
      <div className={styles.dots}>{renderDots(content)}</div>
    </div>
  );
};

export default ImageCarousel;

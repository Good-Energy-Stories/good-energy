import { motion } from 'framer-motion';
import styles from './ImageCarousel.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { useCallback, useState } from 'react';
import useInterval from '../../utils/useInterval';

const cx = classnames.bind(styles);

const variants = {
  active: {
    opacity: 1,
    transition: { duration: 1, ease: 'linear' },
  },
  inactive: {
    opacity: 0,
    transition: { delay: 1, duration: 1, ease: 'linear' },
  },
};

const ImageCarousel = ({ data }: any) => {
  const { content } = data;

  const [activeIndex, setActiveIndex] = useState(0);
  const [skipNextInterval, setSkipNextInterval] = useState(false);

  const SLIDE_DURATION = 5;
  useInterval(() => {
    if (skipNextInterval) {
      setSkipNextInterval(false);
      return;
    }
    setActiveIndex((prev) => (prev + 1 > content.length - 1 ? 0 : prev + 1));
  }, SLIDE_DURATION * 1000);

  const renderImages = (content) => {
    return content.map((image, index) => {
      const active = index === activeIndex;
      const src = imageUrlFor(image).width(800).url();
      return (
        <motion.img
          key={src}
          variants={variants}
          animate={active ? 'active' : 'inactive'}
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

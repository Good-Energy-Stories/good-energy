import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import styles from './Section.module.css';

const variants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 30,
  },
};

export enum WhyClimateTextBlockSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const Text = ({ size, text }: { text: string; size: string }) => {
  switch (size) {
    case WhyClimateTextBlockSize.small:
      return <div className="body">{text}</div>;
    case WhyClimateTextBlockSize.medium:
      return (
        <h3>
          {text}
          <style jsx>{`
            h3 {
              text-transform: none;
            }
          `}</style>
        </h3>
      );
    case WhyClimateTextBlockSize.large:
      return (
        <h1>
          {text}{' '}
          <style jsx>{`
            h1 {
              text-transform: none;
            }
          `}</style>
        </h1>
      );
    default:
      return null;
  }
};

const Section = ({ data }: { data: any }) => {
  const { textSize, text } = data;
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={inView ? 'in' : 'out'}
      exit={'out'}
      variants={variants}
      className={styles.container}
    >
      <div className={styles.inner}>
        <Text size={textSize} text={text} />
      </div>
    </motion.div>
  );
};

export default Section;

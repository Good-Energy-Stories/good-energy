import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { imageUrlFor } from '../../utils/imageUrlFor';
import { useInView } from 'react-intersection-observer';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;

    max-height: 100vh;

    padding: 0 2.5rem;
    margin: 2.5rem 0;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    div {
      padding: 0 1.25rem;
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const Illustration = ({ data }: { data: any }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  if (!data) return null;
  return (
    <motion.div
      ref={ref}
      transition={{ ...FRAMER_TRANSITION_EASEOUT, duration: 2 }}
      initial={'out'}
      animate={inView ? 'in' : 'out'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <img alt={data?.caption} src={imageUrlFor(data).width(1000).url()} />

      <style jsx>{`
        img {
          max-width: 400px;
        }
        @media only screen and (max-width: 768px) {
          img {
            max-width: calc(100vw - 24px);
          }
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Illustration;

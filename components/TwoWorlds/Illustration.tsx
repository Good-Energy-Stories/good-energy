import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

import { imageUrlFor } from '../../utils/imageUrlFor';
import { forwardRef } from 'react';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;

    max-height: 100vh;
    min-height: 70vh;

    padding: 0 2.5rem;
    margin: 2.5rem 0;
  }
  @media only screen and (max-width: 768px) {
    div {
      min-height: 15vh;
      padding: 0 1.25rem;
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Illustration = ({ data }, ref) => {
  if (!data) return null;
  return (
    <motion.div
      ref={ref}
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <img alt={data?.caption} src={imageUrlFor(data).width(1000).url()} />

      <style jsx>{`
        img {
          min-width: 100%;
          max-width: 100%;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default forwardRef(Illustration);

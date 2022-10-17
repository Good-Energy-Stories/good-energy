import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';

const { className, styles } = css.resolve`
  div {
  }
  @media only screen and (max-width: 768px) {
    div {
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

const Title = ({ title }: { title: string }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <h3>{title}</h3>

      <style jsx>{`
        .open-quote {
        }
        h3 {
          margin: 0;
          margin-bottom: 0;
          margin-right: 0.625rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Title;

import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
    grid-column: 1/4;
    margin-left: 2.5rem;
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

const Title = ({ title }: { title: String }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <h1>{title}</h1>

      <style jsx>{`
        .open-quote {
        }
        h3 {
          margin: 0.625rem auto;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Title;

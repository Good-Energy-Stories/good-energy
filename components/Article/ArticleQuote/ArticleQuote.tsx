import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  div {
    margin-left: 1.25rem;
    grid-column: 2/4;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    margin-left: -2.75rem;
  }
  @media only screen and (min-width: 1200px) {
    div {
      margin-left: -2.75rem;
    }
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

const ArticleQuote = ({ data, index }: { data: any; index: number }) => {
  const { quote } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="pull-quote">{quote}</div>
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

export default ArticleQuote;

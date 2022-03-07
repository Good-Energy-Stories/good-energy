import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { ReactChild, Key } from 'react';
import { Tag } from '../';

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

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      {tags.map((t, i) => (
        <Tag key={`${t}${i}`} tag={t} />
      ))}

      <style jsx>{`
        .open-quote {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default Tags;

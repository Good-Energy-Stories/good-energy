import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import ArrowIcon from '../../../public/arrow.svg';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { CollapsibleBody, Header } from '.';
import { useState } from 'react';

const { className, styles } = css.resolve`
  div {
    margin-left: 1.25rem;

    grid-column: 2/4;
    margin-bottom: 2.5rem;
    padding: 1.25rem 0;
    border-top: 1px solid var(--blueThree);
    border-bottom: 1px solid var(--blueThree);
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

const ArticleStoryPossibility = ({
  data,
  index,
}: {
  data: any;
  index: number;
}) => {
  const { body, initialState } = data;
  const [collapsed, setCollapsed] = useState(!initialState ?? true);
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Header
        collapsed={collapsed}
        toggleCollapse={() => setCollapsed(!collapsed)}
      />
      <CollapsibleBody body={body} collapsed={collapsed} />
      <style jsx>{`
        .title {
          display: flex;
          justify-content: space-between;
        }
        h4 {
          margin: 0;
          margin-bottom: 1.25rem;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleStoryPossibility;
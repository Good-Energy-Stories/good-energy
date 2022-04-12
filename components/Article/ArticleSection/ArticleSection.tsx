import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { Content } from './';
import SpotIllustration from './SpotIllustration';
import { RefObject } from 'react';
import { SectionRefLookup } from '../';
const { className, styles } = css.resolve`
  div {
    grid-column: 2/5;
    margin-bottom: 2.5rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/5;
      margin-bottom: 0;
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

const ArticleSection = ({
  data,
  index,
  sectionsRef,
}: {
  data: any;
  index: number;
  sectionsRef: RefObject<SectionRefLookup>;
}) => {
  const { includeSpotIllustration, _key } = data;
  return (
    <motion.div
      ref={(el) => (sectionsRef.current[_key] = el)}
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <Content data={data} />
      {includeSpotIllustration && (
        <SpotIllustration image={data?.spotIllustration} />
      )}
      <style jsx>{`
        .open-quote {
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleSection;

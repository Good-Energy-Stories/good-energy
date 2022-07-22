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
import { PortableText } from '@portabletext/react';
import Footnote from '../Footnote';
import DesktopFootnotes from '../DesktopFootnotes';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/5;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media only screen and (max-width: 768px) {
    div {
      grid-column: 1/5;
      margin-bottom: 0;
    }
  }

  h3 {
    margin-block-end: 0.5rem;
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
  const { includeSpotIllustration, _key, footnotes } = data;

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
        <SpotIllustration
          image={data?.spotIllustration}
          illustrationPosition={data?.illustrationPosition}
        />
      )}
      <DesktopFootnotes footnotes={footnotes} />
      <style jsx>{`
        .open-quote {
        }

        .footnotes {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: absolute;
          max-width: 228px;
          right: 2.5rem;
          color: var(--blueThree);
          font-family: var(--flexa);
          font-variation-settings: 'wght' 220;
          font-size: 14px;
          line-height: 18px;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleSection;

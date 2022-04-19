import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { Content } from './ArticleSection';
import SpotIllustration from './ArticleSection/SpotIllustration';
import { RefObject } from 'react';
import { SectionRefLookup } from '.';
import { PortableText } from '@portabletext/react';
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

const Footnote = ({ text, number }: { text: any; number: string }) => {
  return (
    <>
      <div className="footnote">
        <div className="footnote-number">{number}</div>
        <PortableText value={text} />
      </div>

      <style jsx>{`
        .footnote-number {
          border-bottom: 1px solid var(--blueThree);
          width: 100%;
          padding-bottom: 0.3125rem;
        }
        .footnote {
          margin-bottom: 1.25rem;
          margin-right: 1.25rem;
          color: var(--blueThree);
          font-family: var(--flexa);
          font-variation-settings: 'wght' 220;
          font-size: 14px;
          line-height: 18px;
        }
        @media only screen and (max-width: 768px) {
          .footnote {
            margin-right: 0;
          }
        }
      `}</style>
      {styles}
    </>
  );
};

export default Footnote;

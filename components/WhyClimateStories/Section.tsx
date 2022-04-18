import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { RefObject } from 'react';
import PortableTextSerializer from '../PortableTextSerializer';
import { PortableText } from '@portabletext/react';
const { className, styles } = css.resolve`
  div {
    grid-column: 1/-1;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
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

export enum WhyClimateTextBlockSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const WhyClimateTextBlock = ({
  size,
  text,
}: {
  text: string;
  size: string;
}) => {
  switch (size) {
    case WhyClimateTextBlockSize.small:
      return <div className="body">{text}</div>;
    case WhyClimateTextBlockSize.medium:
      return (
        <h3>
          {text}
          <style jsx>{`
            h3 {
              text-transform: none;
            }
          `}</style>
        </h3>
      );
    case WhyClimateTextBlockSize.large:
      return (
        <h1>
          {text}{' '}
          <style jsx>{`
            h1 {
              text-transform: none;
            }
          `}</style>
        </h1>
      );
    default:
      return null;
  }
};

const ArticleSection = ({ data, index }: { data: any; index: number }) => {
  const { _key, textSize, text } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="container">
        <WhyClimateTextBlock size={textSize} text={text} />
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 5rem 0;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleSection;

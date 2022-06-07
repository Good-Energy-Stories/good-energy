import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { RefObject } from 'react';
import PortableTextSerializer from '../PortableTextSerializer';
import { PortableText } from '@portabletext/react';
import { useInView } from 'react-intersection-observer';
import {
  FRAMER_TRANSITION_EASEOUT,
  FRAMER_TRANSITION_FASTEASE,
} from '../../lib/framer/framer-animations';
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
      padding: 0 1.25rem;
      grid-column: 1/5;
      margin-bottom: 0;
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 100,
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
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      transition={{ ...FRAMER_TRANSITION_EASEOUT, duration: 2 }}
      initial={'out'}
      animate={inView ? 'in' : 'out'}
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

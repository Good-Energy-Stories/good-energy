import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

const { className, styles } = css.resolve`
  div {
    margin-left: 1.25rem;
    grid-column: 2/4;
    margin-bottom: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      margin: 0 1.25rem;
      grid-column: 1/5;
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

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children, index }) => {
      return <p className="block-quote">{children}</p>;
    },
  },
};

const introComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children, index }) => {
      if (index === 0) {
        return <p className="intro-block-quote">{children}</p>;
      }
      return <p className="block-quote">{children}</p>;
    },
  },
};

const ArticleQuote = ({
  data,
  index,
  includeDropCap = false,
}: {
  data: any;
  index: number;
  includeDropCap?: boolean;
}) => {
  const { quote, attribution } = data;
  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <PortableText
        value={quote}
        components={
          includeDropCap && index === 0 ? introComponents : components
        }
      />

      {attribution && (
        <div className="attribution ">
          <span className="line" />
          <div className="label-medium">{attribution}</div>
        </div>
      )}
      <style jsx>{`
        .open-quote {
        }
        h3 {
          margin: 0.625rem auto;
        }
        .label-medium {
          color: var(--blueThree);
          text-align: right;
          display: inline-block;
        }
        .line {
          display: inline-block;
          height: 1px;
          background-color: var(--blueThree);
          flex-grow: 1;
          margin-right: 10px;
          min-width: 70px;
        }
        .attribution {
          margin-top: 2.5rem;
          max-width: 100%;
          display: flex;
          align-items: center;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ArticleQuote;

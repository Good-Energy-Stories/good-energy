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
import Footnote from './Footnote';

const MobileFootnotes = ({ footnotes }: { footnotes: any }) => {
  return (
    <>
      <div className="footnotes">
        {footnotes.map((f, i) => {
          if (f._type === 'footnote') {
            return (
              <Footnote key={f.text + i} text={f.text} number={f.number} />
            );
          }
        })}
      </div>
      <style jsx>{`
        .footnotes {
          display: none;
        }
        @media only screen and (max-width: 768px) {
          .footnotes {
            background-color: var(--greyBlue);
            display: block;
            grid-column: 1/5;
            padding: 2.5rem 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default MobileFootnotes;

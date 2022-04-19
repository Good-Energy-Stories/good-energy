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

const DesktopFootnotes = ({ footnotes }: { footnotes: any }) => {
  return (
    <>
      <div className="footnotes">
        {footnotes.map((f) => {
          if (f._type === 'footnote') {
            return <Footnote key={f.text} text={f.text} number={f.number} />;
          }
        })}
      </div>
      <style jsx>{`
        .footnotes {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: absolute;
          max-width: 228px;
          right: 2.5rem;
        }
        @media only screen and (max-width: 768px) {
          .footnotes {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default DesktopFootnotes;

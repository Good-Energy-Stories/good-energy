import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import ArrowIcon from '../../public/arrow.svg';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { useState } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
const { className, styles } = css.resolve`
  div {
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="body-italic">{children}</p>,
  },
};

const variants = {
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { height: FRAMER_TRANSITION_EASEOUT, opacity: { delay: 0.7 } },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { height: FRAMER_TRANSITION_EASEOUT, opacity: { delay: 0 } },
  },
};

const CollapsibleBody = ({
  body,
  collapsed,
}: {
  body: any;
  collapsed: boolean;
}) => {
  return (
    <motion.div
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={variants}
      className={className}
    >
      <div className="spacer" />
      <PortableText value={body} components={components} />

      {styles}
      <style jsx>{`
        .spacer {
          height: 1.25rem;
        }
      `}</style>
    </motion.div>
  );
};

export default CollapsibleBody;

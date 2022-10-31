import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import ArrowIcon from '../../public/arrow.svg';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { useState } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import styles from './Body.module.css';
const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <span className="body-italic">{children}</span>,
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
      data-collapsed={collapsed ? 'true' : 'false'}
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={variants}
      className={styles.container}
    >
      <div className={styles.spacer} />
      <PortableText value={body} components={components} />
      <div className={styles.spacer} />
    </motion.div>
  );
};

export default CollapsibleBody;

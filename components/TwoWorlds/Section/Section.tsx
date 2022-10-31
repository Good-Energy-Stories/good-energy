import Head from 'next/head';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import BlockContent from '@sanity/block-content-to-react';
import { RefObject } from 'react';
import PortableTextSerializer from '../../PortableTextSerializer';
import { PortableText } from '@portabletext/react';
import styles from './Section.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Section = ({ data, className }: { data: any; className?: string }) => {
  const { title, body } = data;
  return (
    <div className={cx(styles.container, className)}>
      {title && <h3>{title}</h3>}
      <PortableText value={body} components={PortableTextSerializer} />
    </div>
  );
};

export default Section;

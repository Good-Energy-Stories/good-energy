import { motion } from 'framer-motion';
import styles from './WrittenContent.module.css';
import classnames from 'classnames';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
const cx = classnames.bind(styles);

const WrittenContent = ({ data }: any) => {
  const { content } = data;

  return (
    <div className={styles.container}>
      <PortableText value={content} components={PortableTextSerializer} />
    </div>
  );
};

export default WrittenContent;

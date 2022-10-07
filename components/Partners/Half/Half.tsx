import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import PageDivider from '../../PageDivider/PageDivider';
import { Card } from '..';
import styles from './Half.module.css';
import { useCallback } from 'react';
import Partner from '../Partner/Partner';

import classnames from 'classnames';
const cx = classnames.bind(styles);

const Half = ({ data }: { data: any }) => {
  const { title, partners } = data;
  const renderPartners = useCallback((content) => {
    return content.map((item, index) => <Partner key={index} data={item} />);
  }, []);

  return (
    <div className={styles.container}>
      {title && <div className={cx('label-medium', styles.title)}>{title}</div>}
      <div className={styles.inner}>{renderPartners(partners)}</div>
    </div>
  );
};

export default Half;

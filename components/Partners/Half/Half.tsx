import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import PageDivider from '../../PageDivider/PageDivider';
import { Card } from '..';
import styles from './Half.module.css';
import { useCallback } from 'react';

const Half = ({ data }: { data: any }) => {
  const { title, partners } = data;
  const renderPartners = useCallback((content) => {
    return content.map((item, index) => <Card key={index} data={item} />);
  }, []);

  const gridTemplateColumns = `repeat(
    ${partners.length === 1 ? '1' : '3'},
    minmax(0, 1fr)
  )`;
  return (
    <div className={styles.container}>
      <div style={{ gridTemplateColumns }} className={styles.inner}>
        {renderPartners(partners)}
      </div>
    </div>
  );
};

export default Half;

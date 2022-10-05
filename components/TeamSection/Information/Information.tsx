import React from 'react';
import styles from './Information.module.css';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../PortableTextSerializer';

const Information = ({ description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Our Board</h2>
        <div className={styles.description}>
          <PortableText
            value={description}
            components={PortableTextSerializer}
          />
        </div>
      </div>
    </div>
  );
};

export default Information;

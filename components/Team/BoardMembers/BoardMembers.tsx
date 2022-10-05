import React from 'react';
import styles from './BoardMembers.module.css';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../PortableTextSerializer';

const BoardMembers = ({ description }) => {
  return (
    <>
      <h2 className={styles.title}>Our Board</h2>
      <div className={styles.description}>
        <PortableText value={description} components={PortableTextSerializer} />
      </div>
    </>
  );
};

export default BoardMembers;

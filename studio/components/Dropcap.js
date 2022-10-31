import React from 'react';
import styles from './Dropcap.module.css';
export const dropcapIcon = () => <span style={{ fontWeight: 'bold' }}>D</span>;
export const dropcapRender = (props) => (
  <p className={styles.dropcap}>{props.children}</p>
);

import React from 'react';
import styles from './Information.module.css';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../PortableTextSerializer';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const Information = ({ title, description, image }) => {
  console.log(description);
  return (
    <div className={styles.container}>
      <div className={cx(styles.inner, !image && styles.showBorder)}>
        {image && (
          <img className={styles.image} src={imageUrlFor(image).url()} />
        )}
        <h2 className={styles.title}>{title}</h2>
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

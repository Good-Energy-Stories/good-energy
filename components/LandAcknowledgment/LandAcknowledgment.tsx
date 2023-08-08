import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import classNames from 'classnames';
import styles from './LandAcknowledgment.module.css';

const cx = classNames.bind(styles);

const LandAcknowledgment = ({ data }: any) => {
  const { title, content } = data;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={cx('label-large-updated', styles.title)}>{title}</div>
        <div className={styles.statement}>
          <PortableText value={content} components={PortableTextSerializer} />
        </div>
      </div>
      <img className={styles.image} src="land-acknowledgement-bg.png" />
    </div>
  );
};

export default LandAcknowledgment;

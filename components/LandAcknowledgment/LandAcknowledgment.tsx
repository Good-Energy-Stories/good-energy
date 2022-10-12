import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import styles from './LandAcknowledgment.module.css';

const LandAcknowledgment = ({ data }: any) => {
  const { title, content } = data;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.statement}>
          <PortableText value={content} components={PortableTextSerializer} />
        </div>
      </div>
      <img className={styles.image} src="land-acknowledgement-bg.png" />
    </div>
  );
};

export default LandAcknowledgment;

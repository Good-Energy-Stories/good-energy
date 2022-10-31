import { PortableText } from '@portabletext/react';
import styles from './Footnote.module.css';

const Footnote = ({ text, number }: { text: any; number: string }) => {
  return (
    <div className={styles.footnote}>
      <div className={styles.footnoteNumber}>{number}</div>
      <PortableText value={text} />
    </div>
  );
};

export default Footnote;

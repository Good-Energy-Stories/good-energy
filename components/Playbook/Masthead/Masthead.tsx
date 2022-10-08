import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../PortableTextSerializer';
import styles from './Masthead.module.css';
import Wordmark from './Wordmark';

const Masthead = ({ description }) => {
  return (
    <header className={styles.container}>
      <div className={styles.wordmark}>
        <Wordmark />
      </div>

      <div className={styles.description}>{description}</div>
    </header>
  );
};

export default Masthead;

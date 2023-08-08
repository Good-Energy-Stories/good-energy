/**
 * Default heading for new homepage design.
 */
import styles from './Heading.module.css';

const Heading = ({ title }) => {
  return <h4 className={styles.title + ' h4-updated'}>{title}</h4>;
};

export default Heading;

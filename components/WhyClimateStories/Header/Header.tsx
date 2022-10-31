import styles from './Header.module.css';
import ScrollDownPrompt from './ScrollDownPrompt';

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>
      <ScrollDownPrompt />
    </div>
  );
};

export default Header;

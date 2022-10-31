import { AuthorCard } from '../../Cards';
import styles from './AuthorSection.module.css';

export const AuthorSection = ({ content }) => {
  if (!content) return null;
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.authorContainer}>
          {content.map((a, i) => {
            return <AuthorCard key={i} content={a} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;

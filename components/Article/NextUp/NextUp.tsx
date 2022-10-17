import { ArticleCardStyle, Card } from '../../Cards';
import styles from './NextUp.module.css';

const NextUp = ({ article }: { article }) => {
  return (
    <div className={styles.container}>
      <Card
        className={styles.card}
        content={article}
        articleCardStyle={ArticleCardStyle.nextUp}
      />
    </div>
  );
};

export default NextUp;

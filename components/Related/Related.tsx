import { Card, ArticleCardStyle } from '../Cards';
import { CharacterProfileCardStyle } from '../Cards/CharacterProfile/CharacterProfileCard';
import styles from './Related.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const Related = ({ content }: any) => {
  if (!content) return null;
  return (
    <div className={styles.container}>
      <div className={cx('label-small', styles.label)}>Related</div>
      <div className={styles.inner}>
        {content.map((item) => (
          <Card
            key={item._id}
            content={item}
            articleCardStyle={ArticleCardStyle.standard}
            characterProfileCardStyle={CharacterProfileCardStyle.readMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Related;

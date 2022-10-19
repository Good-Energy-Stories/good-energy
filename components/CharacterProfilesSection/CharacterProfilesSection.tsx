import { Card } from '../Cards';
import styles from './CharacterProfilesSection.module.css';

const CharacterProfilesSection = ({ data }: any) => {
  const { content } = data;

  return (
    <div className={styles.container}>
      {content.map((item, index) => (
        <Card
          key={item._id}
          index={index}
          className={styles.card}
          imageClassName={styles.cardImage}
          content={item}
        />
      ))}
    </div>
  );
};

export default CharacterProfilesSection;

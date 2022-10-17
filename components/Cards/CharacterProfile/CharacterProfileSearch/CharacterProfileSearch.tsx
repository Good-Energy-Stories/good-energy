import Link from 'next/link';
import { Tags } from '../../';
import Photo from '../../../Photo/Photo';
import styles from './CharacterProfileSearch.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const CharacterProfileSearch = ({ data, className }: any) => {
  const { name, shortBio, portraitImage, slug, tags } = data;

  return (
    <Link href={`/playbook/characters/${slug}`} passHref>
      <a className={cx(styles.container, className)}>
        <div className={styles.imageContainer}>
          {portraitImage && (
            <Photo className={styles.image} photo={portraitImage} />
          )}
        </div>
        <div className={styles.textContainer}>
          <div className={cx('label-small', styles.label)}>
            Character Profile
          </div>
          <h3>{name}</h3>

          {shortBio && (
            <div className={cx('body', styles.bio)}>
              <span>{shortBio}</span>
            </div>
          )}
          {tags && <Tags tags={tags} />}
        </div>
      </a>
    </Link>
  );
};

export default CharacterProfileSearch;

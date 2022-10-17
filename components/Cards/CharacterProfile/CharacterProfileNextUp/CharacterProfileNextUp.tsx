import styles from './CharacterProfileNextUp.module.css';
import classnames from 'classnames';
import Photo from '../../../Photo/Photo';
import Link from 'next/link';
const cx = classnames.bind(styles);

const CharacterProfileFeaturedSecondary = ({ data, className }: any) => {
  const { name, shortBio, slug, portraitImage } = data;
  return (
    <Link href={`/playbook/characters/${slug}`}>
      <a className={cx(styles.container, className)}>
        <article className={styles.inner}>
          <div className={styles.imageContainer}>
            {portraitImage && (
              <Photo className={styles.image} photo={portraitImage} />
            )}
          </div>
          <div className={styles.textContainer}>
            <div className={cx('label-small', styles.label)}>
              {'Character Profile'}
            </div>
            <h2>{name}</h2>
            {shortBio && (
              <div className={cx('tease-lede', styles.bio)}>
                <span>{shortBio}</span>
              </div>
            )}
          </div>
        </article>
      </a>
    </Link>
  );
};

export default CharacterProfileFeaturedSecondary;

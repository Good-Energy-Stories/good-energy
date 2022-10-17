import styles from './ExpertProfileStandard.module.css';
import classnames from 'classnames';
import Link from 'next/link';
import Photo from '../../../Photo/Photo';
const cx = classnames.bind(styles);

const ExpertProfileStandard = ({ data, className }: any) => {
  const { name, shortBio, fullSizePortraitImage, slug } = data;

  return (
    <Link href={`/about/library-of-experts/${slug}`}>
      <a className={cx(styles.container, className)}>
        <article className={cx(styles.inner)}>
          {fullSizePortraitImage && (
            <Photo className={styles.image} photo={fullSizePortraitImage} />
          )}
          <div className={cx('label-small', styles.label)}>Expert Profile</div>
          <h3>{name}</h3>
          {shortBio && (
            <div className={cx('tease-lede-small', styles.bio)}>
              <span>{shortBio}</span>
            </div>
          )}
        </article>
      </a>
    </Link>
  );
};

export default ExpertProfileStandard;

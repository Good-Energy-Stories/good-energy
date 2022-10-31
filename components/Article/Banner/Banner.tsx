import Photo from '../../Photo/Photo';
import styles from './Banner.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Banner = ({ image, hasTOC }: { image: any; hasTOC: boolean }) => {
  if (!image) return null;
  return (
    <div
      data-width={hasTOC ? 'two-thirds' : 'full'}
      className={styles.container}
    >
      <Photo className={styles.image} photo={image} />
      {image?.attribution && (
        <cite className={cx('label-small', styles.attribution)}>
          {image.attribution}
        </cite>
      )}
    </div>
  );
};

export default Banner;

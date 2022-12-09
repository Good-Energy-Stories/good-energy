import styles from './FeaturedVoice.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../utils/imageUrlFor';
import DropdownButton from '../Buttons/DropdownButton/DropdownButton';
import ActiveQuoteCard from './ActiveQuoteCard';
import { useIsSmall } from '../../utils/useMediaQuery';
import Photo from '../Photo/Photo';
const cx = classnames.bind(styles);
const FeaturedVoice = ({ data, active, onClick }) => {
  const { name, credentials, quotes } = data;
  const isSmall = useIsSmall();
  return (
    <div className={styles.container}>
      {data?.portraitImage && (
        <div className={styles.imageContainer}>
          <Photo className={styles.image} photo={data.portraitImage} />
        </div>
      )}
      <div className={cx('label-small', styles.label)}>Featured Voice</div>
      <h3 className={styles.name}>{name}</h3>
      <div className={cx('tease-lede-small', styles.title)}>{credentials}</div>
      <DropdownButton
        className={styles.button}
        onClick={onClick}
        expanded={active}
        expandedLabel="Hide"
        hiddenLabel="Show"
      />
      {isSmall && active && <ActiveQuoteCard quotes={quotes} />}
    </div>
  );
};

export default FeaturedVoice;

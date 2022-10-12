import styles from './FeaturedVoice.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../utils/imageUrlFor';
import DropdownButton from '../Buttons/DropdownButton/DropdownButton';
import ActiveQuoteCard from './ActiveQuoteCard';
import { useIsSmall } from '../../utils/useMediaQuery';
const cx = classnames.bind(styles);
const FeaturedVoice = ({ data, active, onClick }) => {
  const { name, credentials, quotes } = data;
  const isSmall = useIsSmall();
  return (
    <div className={styles.container}>
      {data?.portraitImage && (
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imageUrlFor(data.portraitImage).width(300).url()}
          />
        </div>
      )}
      <h2>{name}</h2>
      <div className={cx('label-medium', styles.title)}>{credentials}</div>
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

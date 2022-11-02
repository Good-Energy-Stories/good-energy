import { imageUrlFor } from '../../../../utils/imageUrlFor';
import styles from './Portrait.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

export enum PortraitSizes {
  extraSmall = 120,
  small = 200,
  medium = 260,
  large = 360,
}

const Portrait = ({
  image,
  size = PortraitSizes.small,
  backgroundColor = 'var(--blueFour)',
  className,
}: {
  image: any;
  size?: PortraitSizes;
  backgroundColor?: string;
  className?: string;
}) => {
  return (
    <div
      style={{
        backgroundColor,
      }}
      className={cx(styles.container, className)}
    >
      <img
        className={styles.image}
        alt={image?.caption}
        src={imageUrlFor(image).height(size).width(size).url()}
      />
    </div>
  );
};

export default Portrait;

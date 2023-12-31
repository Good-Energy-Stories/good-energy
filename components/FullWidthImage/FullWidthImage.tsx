import { motion } from 'framer-motion';
import styles from './FullWidthImage.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../utils/imageUrlFor';
const cx = classnames.bind(styles);

const FullWidthImage = ({ data }: any) => {
  const { image } = data;
  if (!image) return null;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrlFor(image).url()} />
    </div>
  );
};

export default FullWidthImage;

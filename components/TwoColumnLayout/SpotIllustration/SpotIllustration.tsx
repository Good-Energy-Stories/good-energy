import { motion } from 'framer-motion';
import styles from './SpotIllustration.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import Photo from '../../Photo/Photo';
const cx = classnames.bind(styles);

const SpotIllustration = ({ data }: any) => {
  const { image } = data;
  if (!image) return null;
  return <Photo className={styles.image} photo={image} />;
};

export default SpotIllustration;

import styles from './SpotIllustration.module.css';
import Photo from '../../Photo/Photo';

const SpotIllustration = ({ data }: { data: any }) => {
  const { image, size } = data;

  return (
    <div data-size={size} className={styles.container}>
      <Photo photo={image} />
    </div>
  );
};

export default SpotIllustration;

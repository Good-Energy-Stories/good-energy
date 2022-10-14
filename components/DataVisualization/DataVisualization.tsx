import styles from './DataVisualization.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../utils/imageUrlFor';
const cx = classnames.bind(styles);

const DataVisualization = ({ data }: any) => {
  const { title, image } = data;
  return (
    <div className={cx(styles.container)}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={cx(styles.imageContainer)}>
        {image && (
          <img className={cx(styles.image)} src={imageUrlFor(image).url()} />
        )}
      </div>
    </div>
  );
};

export default DataVisualization;

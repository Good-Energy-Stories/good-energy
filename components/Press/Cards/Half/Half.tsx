import { imageUrlFor } from '../../../../utils/imageUrlFor';
import styles from './Half.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Half = ({ data }) => {
  const { title, outlet, link } = data;

  return (
    <article className={styles.container}>
      <a href={link} className={styles.inner} target="_blank" rel="noreferrer">
        <div className={cx(styles.textContainer)}>
          <div className={cx('label-small', styles.attribution)}>
            {outlet.title}
          </div>
          <h3 className={styles.title}>
            <span>{title}</span>
          </h3>
        </div>
        <div className={styles.logoContainer}>
          <img
            className={styles.image}
            src={imageUrlFor(outlet.logo).url()}
            alt="arrow"
          />
        </div>
      </a>
    </article>
  );
};

export default Half;

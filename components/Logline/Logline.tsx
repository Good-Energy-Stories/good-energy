import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import styles from './Logline.module.css';
import classnames from 'classnames';
import PortableTextSerializer from '../PortableTextSerializer';
import { imageUrlFor } from '../../utils/imageUrlFor';
import CTALink from '../Buttons/CTALink/CTALink';
import { article } from '../../data/queries';

const cx = classnames.bind(styles);
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Logline = ({ data, className }: any) => {
  const { title, genre, description, image, article } = data;
  return (
    <div className={cx(styles.container, className)}>
      <div className={cx(styles.inner)}>
        <div className={cx(styles.textContainer)}>
          <h2 className={styles.title}>
            <span>Logline: </span>
            <span className={styles.italic}>{title}</span>
          </h2>
          <div className={cx('label-medium', styles.genre)}>{genre}</div>
          <PortableText
            value={description}
            components={PortableTextSerializer}
          />
          <CTALink
            className={styles.button}
            data={{ label: 'Read More Climate Loglines', link: article?.slug }}
          />
        </div>
        <div className={cx(styles.imageContainer)}>
          {image && (
            <img
              className={styles.image}
              src={imageUrlFor(image).url()}
              alt={title}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Logline;

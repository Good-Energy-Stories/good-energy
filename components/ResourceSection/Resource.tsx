import { imageUrlFor } from '../../utils/imageUrlFor';
import styles from './Resource.module.css';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import classname from 'classnames';
import CTAButton, { ButtonLabelSize } from '../Buttons/CTAButton/CTAButton';
const cx = classname.bind(styles);
const Resource = ({ data, backgroundColor }: any) => {
  const { title, name, description, buttonLabel, slug, image } = data;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={cx('label-medium', styles.name)}>{name}</div>
        <h2>{title}</h2>
        <div>
          <PortableText
            value={description}
            components={PortableTextSerializer}
          />
        </div>
        <CTAButton
          data={{
            label: buttonLabel,
            labelSize: ButtonLabelSize.Small,
            link: slug,
            backgroundColor,
          }}
        />
      </div>
      <div className={styles.imageContainer}>
        {image && (
          <img className={styles.image} src={imageUrlFor(image).url()} />
        )}
      </div>
    </div>
  );
};

export default Resource;

/**
 * Offering card column for Offerings section of homepage.
 */

import styles from './Offering.module.css';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../PortableTextSerializer';
import Photo from '../../Photo/Photo';
import classname from 'classnames';
import CTAButton, { ButtonLabelSize } from '../../Buttons/CTAButton/CTAButton';
const cx = classname.bind(styles);
const Offering = ({ key, data }) => {
  const { description, CTAText, CTALink, displayTitle, image, title } = data;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Photo photo={image} />
      </div>
      {title && <div className={cx('label-medium', styles.name)}>{title}</div>}
      <h4 className={'h4-updated'}>{displayTitle}</h4>
      <PortableText value={description} components={PortableTextSerializer} />
      {CTAText && CTALink && (
        <CTAButton
          className={styles.cta}
          data={{
            label: CTAText,
            labelSize: ButtonLabelSize.Small,
            link: CTALink,
            backgroundColor: 'white',
            type: 'fill',
          }}
        />
      )}
    </div>
  );
};

export default Offering;

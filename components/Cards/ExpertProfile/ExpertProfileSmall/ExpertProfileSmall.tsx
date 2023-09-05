import { PronounsAndOrganization, Links } from '../ExpertProfileCardComponents';
import { Tags } from '../../';
import { toPlainText } from '@portabletext/react';
import styles from './ExpertProfileSmall.module.css';
import Photo from '../../../Photo/Photo';
import classnames from 'classnames';
import Link from 'next/link';
const cx = classnames.bind(styles);

const ExpertProfileSmall = ({ data, index, allowHover, className }: any) => {
  const { name, Information, smallPortraitImage, pronouns, organization } =
    data;

  const getColor = (index) => {
    const colors = ['var(--yellow)', 'var(--pink)', 'var(--blueFour)'];
    return colors[index % colors.length];
  };

  return (
    <div
      className={cx(styles.container, className)}
      data-include-hover-animation={allowHover}
    >
      <div className={styles.imageContainer}>
        {smallPortraitImage && (
          <Photo
            className={styles.image}
            photo={smallPortraitImage}
            style={{
              backgroundColor: getColor(index),
            }}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.name}>{name}</h4>
        <span className={cx(styles.pronouns, 'label-small')}>{pronouns}</span>
      </div>
    </div>
  );
};

export default ExpertProfileSmall;

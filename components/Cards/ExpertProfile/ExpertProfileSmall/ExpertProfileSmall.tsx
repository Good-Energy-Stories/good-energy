/**
 * Small expert profile card for homepage carousel.
 */

import styles from './ExpertProfileSmall.module.css';
import Photo from '../../../Photo/Photo';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const ExpertProfileSmall = ({
  data,
  index,
  allowHover,
  className,
  forceDesktop,
}: any) => {
  const { name, smallPortraitImage, pronouns, title, organization } = data;

  const getColor = (index) => {
    const colors = ['var(--yellow)', 'var(--pink)', 'var(--blueFour)'];
    return colors[index % colors.length];
  };

  return (
    <div
      className={cx(
        styles.container,
        className,
        forceDesktop && styles.forceDesktop,
      )}
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
        <div className={styles.nameContainer}>
          <h4 className={styles.name}>{name}</h4>
          <span className={cx(styles.pronouns)}>{pronouns}</span>
        </div>
        <span className={styles.title}>{title}</span>
        <span className={styles.organization}>{organization}</span>
      </div>
    </div>
  );
};

export default ExpertProfileSmall;

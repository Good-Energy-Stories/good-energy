/**
 * Client logo parade for homepage.
 */
import { useCallback } from 'react';
import classnames from 'classnames';
import styles from './OurClients.module.css';
import Photo from '../../Photo/Photo';
import Heading from '../../Heading/Heading';
import SeeMoreButton from '../../Buttons/SeeMoreButton/SeeMoreButton';
const cx = classnames.bind(styles);

enum CalloutSectionTheme {
  Clear = 'none',
  White = 'white',
}

const OurClients = ({ data }) => {
  const { title, description, clients, CTAText, CTALink, clearBackground } =
    data;

  const getDataTheme = useCallback(() => {
    let dataTheme = CalloutSectionTheme.White;

    if (clearBackground === true) {
      dataTheme = CalloutSectionTheme.Clear;
    }

    return dataTheme;
  }, [clearBackground]);

  return (
    <div data-theme={getDataTheme()} className={styles.container}>
      <Heading title={title} />
      {description && (
        <div className={styles.paragraphContainer}>
          <p className="body">{description}</p>
        </div>
      )}
      <div className={styles.clientContainer}>
        {clients?.map((item, index) => {
          return (
            <Photo
              className={cx(styles.photo, index > 0 && styles.hiddenMobile)}
              key={index}
              photo={item.logo}
            />
          );
        })}
      </div>
      {CTAText && CTALink && (
        <div className={styles.buttonContainer}>
          <SeeMoreButton label={CTAText} link={CTALink} />
        </div>
      )}
    </div>
  );
};

export default OurClients;

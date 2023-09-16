import { useCallback } from 'react';
import styles from './Full.module.css';
import classnames from 'classnames';
import Partner from '../Partner/Partner';
import Heading from '../../Heading/Heading';
import SeeMoreButton from '../../Buttons/SeeMoreButton/SeeMoreButton';
const cx = classnames.bind(styles);

const Full = ({ data, truncate = false, className }: any) => {
  const {
    title,
    partners,
    backgroundColor,
    showLinkToPartnersPage,
    useAltLogos,
    CTAText,
    CTALink,
    rowWidth,
  } = data;
  const shouldTruncate = partners.length > 6 && truncate;
  const partnersFormatted = shouldTruncate ? partners.slice(0, 6) : partners;

  const renderPartners = useCallback((content) => {
    return content.map((item, index) => {
      return (
        <Partner
          key={index}
          className={index > 0 && styles.hiddenMobile}
          width={rowWidth}
          data={item}
          useAltLogos
        />
      );
    });
  }, []);
  return (
    <>
      <div
        data-theme={backgroundColor}
        className={cx(styles.container, className)}
      >
        {title && <Heading title={title} />}
        <div className={styles.inner}>{renderPartners(partnersFormatted)}</div>

        {showLinkToPartnersPage && (
          <div className={styles.buttonContainer}>
            <SeeMoreButton label={CTAText} link={CTALink} />
          </div>
        )}
      </div>
    </>
  );
};

export default Full;

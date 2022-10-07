import { useCallback } from 'react';
import CTAButton from '../../Buttons/CTAButton/CTAButton';
import styles from './Full.module.css';
import classnames from 'classnames';
import Partner from '../Partner/Partner';
const cx = classnames.bind(styles);

const Full = ({ data, truncate = false, className }: any) => {
  const { title, partners, backgroundColor, showLinkToPartnersPage } = data;
  const shouldTruncate = partners.length > 6 && truncate;
  const partnersFormatted = shouldTruncate ? partners.slice(0, 6) : partners;

  const renderPartners = useCallback((content) => {
    return content.map((item, index) => <Partner key={index} data={item} />);
  }, []);
  return (
    <>
      <div
        data-theme={backgroundColor}
        className={cx(styles.container, className)}
      >
        {title && (
          <div className={cx('label-medium', styles.title)}>{title}</div>
        )}
        <div className={styles.inner}>{renderPartners(partnersFormatted)}</div>
        <div className={styles.buttonRow}>
          {showLinkToPartnersPage && (
            <CTAButton
              data={{
                link: '/about/partners',
                label: 'See Our Full List of partners',
                backgroundColor,
              }}
              className={styles.button}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Full;

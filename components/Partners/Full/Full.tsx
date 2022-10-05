import { useCallback } from 'react';
import { Card } from '..';
import CTAButton from '../../Buttons/CTAButton/CTAButton';
import PageDivider from '../../PageDivider/PageDivider';
import styles from './Full.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Full = ({ data, truncate = false, className }: any) => {
  const { title, partners, showLinkToPartnersPage } = data;
  const shouldTruncate = partners.length > 6 && truncate;
  const partnersFormatted = shouldTruncate ? partners.slice(0, 6) : partners;

  const renderPartners = useCallback((content) => {
    return content.map((item, index) => <Card key={index} data={item} />);
  }, []);
  return (
    <>
      <div className={cx(styles.container, className)}>
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

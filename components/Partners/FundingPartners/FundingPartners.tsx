/**
 * Funding Partners section for the homepage.
 * Different layout than the other Funding Partners sections.
 */

import SeeMoreButton from '../../Buttons/SeeMoreButton/SeeMoreButton';
import Heading from '../../Heading/Heading';
import styles from './FundingPartners.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import * as ga from '../../../lib/ga';

const cx = classnames.bind(styles);

const renderPartners = (partners) => {
  return partners.map((item, key) => {
    return (
      <div
        className={cx(key > 0 && styles.hiddenMobile, styles.partner)}
        key={key}
      >
        <a
          href={item.link}
          className={styles.partner}
          onClick={() => ga.captureOutboundLink(item.link)}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.image}
            alt={item.logo?.caption}
            src={item.logo.asset.url}
            // src={item.altLogo.asset.url} // REPLACE WHEN NEW ASSETS COME IN
          />
        </a>
      </div>
    );
  });
};

export const fundingPartners = ({ data, className }: any) => {
  const { title, CTAText, CTALink, partners } = data;
  console.log('partners');
  console.log(partners);
  // console.log(partners.forEach(partner => console.log(partner.logo.asset.url)))
  return (
    <div className={styles.container}>
      <Heading title={title} />
      <div className={styles.partnersContainer}>{renderPartners(partners)}</div>
      <div className={styles.buttonContainer}>
        <SeeMoreButton label={CTAText} link={CTALink} />
      </div>
    </div>
  );
};

export default fundingPartners;

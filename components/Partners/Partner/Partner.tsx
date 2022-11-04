import { motion } from 'framer-motion';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import * as ga from '../../../lib/ga';

import styles from './Partner.module.css';
import { ROW_WIDTH } from '../PartnerSection';

const Logo = ({ logo, link }: any) => {
  if (!logo) return null;
  if (link) {
    return (
      <a
        href={link}
        onClick={() => ga.captureOutboundLink(link)}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.image}
          alt={logo?.caption}
          src={imageUrlFor(logo).url()}
        />
      </a>
    );
  }
  return (
    <img
      className={styles.image}
      alt={logo?.caption}
      src={imageUrlFor(logo).url()}
    />
  );
};

const Partner = ({
  data,
  width = ROW_WIDTH.FOUR,
}: {
  data: any;
  width?: ROW_WIDTH;
}) => {
  const { logo, size, link } = data;
  console.log('width', width);
  return (
    <>
      <div className={styles.container} data-width={width ?? ROW_WIDTH.FOUR}>
        <Logo logo={logo} link={link} size={size} />
      </div>
    </>
  );
};

export default Partner;

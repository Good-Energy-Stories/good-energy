import { motion } from 'framer-motion';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import * as ga from '../../../lib/ga';

import styles from './Partner.module.css';

const Logo = ({ logo, link }: any) => {
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

const Partner = ({ data }: { data: any }) => {
  const { logo, size, link } = data;

  return (
    <>
      <div className={styles.container}>
        <Logo logo={logo} link={link} size={size} />
      </div>
    </>
  );
};

export default Partner;

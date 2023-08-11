import { imageUrlFor } from '../../../utils/imageUrlFor';
import * as ga from '../../../lib/ga';
import classNames from 'classnames';

import styles from './Partner.module.css';
import { ROW_WIDTH } from '../PartnerSection';
const cx = classNames.bind(styles);

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
  className,
}: {
  data: any;
  width?: ROW_WIDTH;
  className: string;
}) => {
  const { logo, size, link } = data;
  return (
    <>
      <div
        className={cx(styles.container, className)}
        data-width={width ?? ROW_WIDTH.FOUR}
      >
        <Logo logo={logo} link={link} size={size} />
      </div>
    </>
  );
};

export default Partner;

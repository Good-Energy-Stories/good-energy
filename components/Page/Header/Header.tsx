import { PortableTextSerializer } from '../..';
import { PortableText } from '@portabletext/react';
import { imageUrlFor } from '../../../utils/imageUrlFor';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import styles from './Header.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const Header = ({
  bannerImage,
  title,
  description,
  showHeader,
  showHeaderBorder,
}: {
  bannerImage?: any;
  title: string;
  description: any;
  showHeader?: boolean;
  showHeaderBorder?: boolean;
}) => {
  return (
    <div
      className={cx(
        styles.container,
        showHeader && styles.marginBottom,
        showHeaderBorder && styles.borderBottom,
      )}
    >
      <div className={styles.inner}>
        <Breadcrumbs className={styles.breadcrumbs} />
        {showHeader && bannerImage && (
          <img
            className={styles.image}
            alt={bannerImage?.caption}
            src={imageUrlFor(bannerImage).width(1080).url()}
          />
        )}
      </div>

      {showHeader && (
        <>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>
            <PortableText
              value={description}
              components={PortableTextSerializer}
            />
          </div>
          {bannerImage && (
            <img
              className={styles.image}
              src={imageUrlFor(bannerImage).url()}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;

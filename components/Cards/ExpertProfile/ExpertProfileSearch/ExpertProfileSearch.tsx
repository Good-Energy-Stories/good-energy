import { PronounsAndOrganization, Links } from '../ExpertProfileCardComponents';
import { Tags } from '../../';
import { toPlainText } from '@portabletext/react';
import styles from './ExpertProfileSearch.module.css';
import Photo from '../../../Photo/Photo';
import classnames from 'classnames';
import Link from 'next/link';
const cx = classnames.bind(styles);

const Card = ({ data, allowHover, className }: any) => {
  const {
    name,
    Information,
    smallPortraitImage,
    tags,
    pronouns,
    links,
    organization,
  } = data;

  return (
    <div
      className={cx(styles.container, className)}
      data-include-hover-animation={allowHover}
    >
      <div className={styles.imageContainer}>
        {smallPortraitImage && (
          <Photo
            className={styles.image}
            photo={smallPortraitImage}
            style={{ backgroundColor: 'var(--greyBlue)' }}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={cx('label-small', styles.label)}>Expert Profile</div>
        <h3>{name}</h3>
        <PronounsAndOrganization
          pronouns={pronouns}
          organization={organization}
        />

        {Information && (
          <div className={cx('body', styles.bio)}>
            <span>{toPlainText(Information)}</span>
          </div>
        )}

        {links && <Links links={links} />}
        {tags && <Tags tags={tags} />}
      </div>
    </div>
  );
};

const ExpertProfileSearch = ({ data, className }) => {
  const { includeSpotlightPage } = data;
  if (includeSpotlightPage) {
    return (
      <Link href={`/about/library-of-experts/${data.slug}`} passHref>
        <a>
          <Card data={data} allowHover className={className} />
        </a>
      </Link>
    );
  }
  return <Card data={data} className={className} />;
};

export default ExpertProfileSearch;

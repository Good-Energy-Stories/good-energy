import styles from './ExpertProfileLibrary.module.css';
import classnames from 'classnames';
import Photo from '../../../Photo/Photo';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../../PortableTextSerializer';
import { PronounsAndOrganization } from '../ExpertProfileCardComponents';
import CTALink from '../../../Buttons/CTALink/CTALink';

const cx = classnames.bind(styles);

const ExpertProfileLibrary = ({ data, index, className }: any) => {
  const {
    name,
    Information,
    pronouns,
    organization,
    smallPortraitImage,
    slug,
    includeSpotlightPage,
    expertType,
  } = data;
  console.log(data);
  const getColor = (index) => {
    if (expertType === 'organization') return 'var(--greyBlue)';
    const colors = ['var(--yellow)', 'var(--pink)', 'var(--blueFour)'];
    return colors[index % colors.length];
  };
  return (
    <article className={cx(styles.container)}>
      <div className={styles.imageContainer}>
        {smallPortraitImage && (
          <Photo
            style={{
              backgroundColor: getColor(index),
            }}
            className={styles.image}
            photo={smallPortraitImage}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <PronounsAndOrganization
          pronouns={pronouns}
          organization={organization}
        />
        {Information && (
          <PortableText
            value={Information}
            components={PortableTextSerializer}
          />
        )}
        {includeSpotlightPage && (
          <CTALink
            data={{
              label: 'Read More',
              link: `/about/library-of-experts/${slug}`,
            }}
          />
        )}
      </div>
    </article>
  );
};

export default ExpertProfileLibrary;

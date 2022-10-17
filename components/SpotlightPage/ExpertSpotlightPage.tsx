import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';

import Photo from '../Photo/Photo';
import styles from './ExpertSpotlightPage.module.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import classnames from 'classnames';
import { Card } from '../Cards';
import { CharacterProfileCardStyle } from '../Cards/CharacterProfile/CharacterProfileCard';
const cx = classnames.bind(styles);

const ExpertSpotlightPage = ({ data }: any) => {
  const { name, shortBio, bio, fullSizePortraitImage, nextUp } = data;
  return (
    <div className={styles.container}>
      {fullSizePortraitImage && (
        <div className={styles.imageContainer}>
          <Photo width={1080} photo={fullSizePortraitImage} />
        </div>
      )}
      <div className={styles.textContainer}>
        <Breadcrumbs className={styles.breadcrumbs} />
        <h1 className={styles.title}>{name}</h1>
        <div className={cx('spotlight-intro-graf')}>{shortBio}</div>
        <PortableText value={bio} components={PortableTextSerializer} />
        <Card
          content={nextUp}
          className={styles.nextUp}
          characterProfileCardStyle={CharacterProfileCardStyle.nextUp}
        />
      </div>
    </div>
  );
};

export default ExpertSpotlightPage;

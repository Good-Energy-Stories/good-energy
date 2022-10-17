import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';

import Photo from '../Photo/Photo';
import styles from './CharacterSpotlightPage.module.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import classnames from 'classnames';
import { Card } from '../Cards';
import { CharacterProfileCardStyle } from '../Cards/CharacterProfile/CharacterProfileCard';
const cx = classnames.bind(styles);

const CharacterSpotlightPage = ({ data }: any) => {
  const { name, shortBio, bio, portraitImage, nextUp } = data;
  return (
    <div className={styles.container}>
      {portraitImage && (
        <div className={styles.imageContainer}>
          <Photo width={1080} photo={portraitImage} />
        </div>
      )}
      <div className={styles.textContainer}>
        <Breadcrumbs className={styles.breadcrumbs} />
        <h1 className={styles.title}>{name}</h1>
        <div className={cx('spotlight-intro-graf')}>{shortBio}</div>
        <PortableText value={bio} components={PortableTextSerializer} />
        <div className={styles.nextUp}>
          <div className={cx('label-small', styles.label)}>Next Up</div>
          <Card
            content={nextUp}
            characterProfileCardStyle={CharacterProfileCardStyle.nextUp}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterSpotlightPage;

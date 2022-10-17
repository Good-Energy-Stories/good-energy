import { motion } from 'framer-motion';
import styles from './CharacterProfileStandard.module.css';
import classnames from 'classnames';
import Link from 'next/link';
import Photo from '../../../Photo/Photo';
const cx = classnames.bind(styles);

const CharacterProfileStandard = ({ data, className, imageClassName }: any) => {
  const { name, shortBio, portraitImage, slug } = data;

  return (
    <Link href={`/playbook/characters/${slug}`} passHref>
      <a className={cx(styles.container, className)}>
        <article className={cx(styles.inner)}>
          {portraitImage && (
            <Photo
              className={cx(styles.image, imageClassName)}
              width={400}
              photo={portraitImage}
            />
          )}
          <div className={cx('label-small', styles.label)}>
            Character Profile
          </div>
          <h3>{name}</h3>
          {shortBio && (
            <div className={cx('tease-lede-small', styles.bio)}>
              <span>{shortBio}</span>
            </div>
          )}
        </article>
      </a>
    </Link>
  );
};

export default CharacterProfileStandard;

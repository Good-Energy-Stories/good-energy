import styles from './CharacterProfilesTeaseSection.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../utils/imageUrlFor';
import CTALink from '../Buttons/CTALink/CTALink';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../PortableTextSerializer';
import CharacterProfileCard, {
  CharacterProfileCardStyle,
} from '../Cards/CharacterProfile/CharacterProfileCard';
import { useCallback, useState } from 'react';
import { useIsMedium, useIsSmall } from '../../utils/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';
const cx = classnames.bind(styles);

const CharacterProfilesTeaseSection = ({ data }: any) => {
  const { tag, title, description, content } = data;

  const [endIndex, setEndIndex] = useState(0);

  const isMedium = useIsMedium();

  const pageLength = isMedium ? 1 : 5;

  const handleIncrement = useCallback(() => {
    if (endIndex + 1 < content.length) {
      setEndIndex(endIndex + 1);
    } else {
      setEndIndex(0);
    }
  }, [endIndex, content.length]);

  const handleDecrement = useCallback(() => {
    if (endIndex - 1 >= 0) {
      setEndIndex(endIndex - 1);
    } else {
      setEndIndex(content.length - 1);
    }
  }, [endIndex, content.length]);

  // Make the array twice as long so we can loop through it
  const activeProfiles = [...content, ...content].slice(
    endIndex,
    endIndex + pageLength,
  );

  return (
    <div className={cx(styles.container)}>
      <div className={styles.textContainer}>
        <div className={cx('label-small', styles.label)}>{tag}</div>
        <h2>{title}</h2>
        <div>
          <PortableText
            value={description}
            components={PortableTextSerializer}
          />
        </div>
        <CTALink
          className={styles.link}
          data={{ label: 'Read More', link: '/playbook/characters' }}
        />
      </div>
      <div className={styles.characterProfilesContainer}>
        <div className={styles.characterProfiles}>
          <div className={styles.characterProfilesInner}>
            {activeProfiles.map((item: any) => {
              return (
                <CharacterProfileCard
                  key={item._id}
                  data={item}
                  style={CharacterProfileCardStyle.standard}
                  className={styles.characterProfile}
                  imageClassName={styles.characterProfileImage}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.button} onClick={handleDecrement}>
            {'<'}
          </button>
          <button className={styles.button} onClick={handleIncrement}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfilesTeaseSection;

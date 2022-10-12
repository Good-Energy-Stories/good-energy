import { motion } from 'framer-motion';
import { Banner, Title, Lede } from '../ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '../..';
import { Tags } from '../..';
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';
import styles from './ArticleStandard.module.css';
import classnames from 'classnames';
import { imageUrlFor } from '../../../../utils/imageUrlFor';
const cx = classnames.bind(styles);
const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Small = observer(
  ({
    data,
    maxWidth,
  }: {
    data: ArticleCardData;

    maxWidth?: number;
  }) => {
    const { title, lede, tags, slug, heroImage, section } = data;

    const store = useStore();
    const {
      uiStore: { textColor },
    } = store;
    console.log('textColor', data);
    return (
      <motion.div
        style={{ maxWidth: maxWidth ?? '100%', color: textColor }}
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={styles.container}
      >
        <Link href={`/playbook/${slug}`} passHref>
          <a>
            {heroImage && (
              <img
                className={styles.image}
                alt={heroImage?.caption}
                src={imageUrlFor(heroImage).width(768).url()}
              />
            )}
            {!heroImage && <div className={styles.line} />}
            {section?.title && (
              <div className={cx('label-small', styles.sectionLabel)}>
                {section.title}
              </div>
            )}
            <h3 className={styles.title}>
              <span>{title}</span>
            </h3>
            {lede && (
              <div className={cx('tease-lede-small', styles.lede)}>{lede}</div>
            )}
            {tags && <Tags tags={tags} />}
          </a>
        </Link>
      </motion.div>
    );
  },
);

export default Small;

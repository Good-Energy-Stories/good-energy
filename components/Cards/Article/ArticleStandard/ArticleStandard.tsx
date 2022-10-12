import { motion } from 'framer-motion';
import { Banner, Title, Lede } from '../ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '../..';
import { Tags } from '../..';
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';
import styles from './ArticleStandard.module.css';
import classnames from 'classnames';
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
    last,
    maxWidth,
    onActionButtonClicked,
  }: {
    data: ArticleCardData;
    last?: boolean;
    maxWidth?: number;
    onActionButtonClicked?: (slug: string) => void;
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
        whileHover={{ opacity: 0.8, transition: { duration: 0.4 } }}
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={styles.container}
      >
        <Link href={`/playbook/${slug}`} passHref>
          <a>
            <div className="container">
              {heroImage && <Banner image={heroImage} />}
              {!heroImage && <div className={styles.line} />}
              {section?.title && (
                <div className={cx('label-small', styles.sectionLabel)}>
                  {section.title}
                </div>
              )}
              <Title title={title} />
              {lede && <Lede lede={lede} />}
              {tags && <Tags tags={tags} />}
            </div>
          </a>
        </Link>
      </motion.div>
    );
  },
);

export default Small;

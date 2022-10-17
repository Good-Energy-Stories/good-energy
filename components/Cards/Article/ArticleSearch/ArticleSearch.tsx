import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from '../ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '../..';
import { Tags } from '../..';

import styles from './ArticleSearch.module.css';
import classnames from 'classnames';
import Photo from '../../../Photo/Photo';
const cx = classnames.bind(styles);

const ArticleSearch = ({ data, className }: any) => {
  const { title, lede, tags, slug, heroImage } = data;

  return (
    <Link href={`/playbook/${slug}`}>
      <a className={cx(styles.container, className)}>
        <div className={styles.textContainer}>
          <div className={cx('label-small', styles.label)}>Article</div>
          <Title title={title} />
          {lede && (
            <div className={cx('body', styles.lede)}>
              <span>{lede}</span>
            </div>
          )}
          {tags && <Tags tags={tags} truncateTags={false} />}
        </div>
        {heroImage && (
          <div className={styles.imageContainer}>
            <Photo className={styles.image} photo={heroImage} />
          </div>
        )}
      </a>
    </Link>
  );
};

export default ArticleSearch;

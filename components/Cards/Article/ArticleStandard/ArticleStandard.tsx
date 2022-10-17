import Link from 'next/link';
import { Tags } from '../..';

import styles from './ArticleStandard.module.css';
import classnames from 'classnames';

import Photo from '../../../Photo/Photo';
const cx = classnames.bind(styles);

const ArticleStandard = ({ data, className }: any) => {
  const { title, lede, tags, slug, heroImage, section } = data;

  return (
    <article className={cx(styles.container, className)}>
      <Link href={`/playbook/${slug}`} passHref>
        <a>
          {heroImage && <Photo className={styles.image} photo={heroImage} />}
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
    </article>
  );
};

export default ArticleStandard;

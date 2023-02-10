import Link from 'next/link';
import { Tags } from '../..';
import styles from './ArticleSmall.module.css';
import classnames from 'classnames';

import Photo from '../../../Photo/Photo';
const cx = classnames.bind(styles);

const ArticleSmall = ({ data, className }: any) => {
  const { title, lede, slug, heroImage, section } = data;
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
          <h4 className={styles.title}>
            <span>{title}</span>
          </h4>
          {lede && (
            <div className={cx('tease-lede-small', styles.lede)}>{lede}</div>
          )}
        </a>
      </Link>
    </article>
  );
};

export default ArticleSmall;

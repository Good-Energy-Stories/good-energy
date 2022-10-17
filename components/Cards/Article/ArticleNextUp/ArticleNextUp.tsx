import { motion } from 'framer-motion';

import Link from 'next/link';
import { Tags } from '../..';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../stores/store';
import styles from './ArticleNextUp.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const ArticleNextUp = observer(({ data, className }: any) => {
  const { title, lede, tags, slug } = data;
  const store = useStore();
  const {
    uiStore: { textColor },
  } = store;
  return (
    <div className={cx(styles.container, className)}>
      <Link href={`/playbook/${slug}`}>
        <a className={cx(styles.inner, className)}>
          <div className={cx('label-small', styles.label)}>Next Up</div>
          <h2>{title} </h2>
          <div className={cx('tease-lede', styles.lede)}>
            <span>{lede}</span>
          </div>

          {tags && <Tags tags={tags} />}
        </a>
      </Link>
    </div>
  );
});

export default ArticleNextUp;

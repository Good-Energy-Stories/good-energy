import styles from './PressHero.module.css';
import classnames from 'classnames';
import * as ga from '../../../lib/ga';
import PressCard, { PressCardType } from '../Cards/PressCard';
import { PortableText } from '@portabletext/react';
import PortableTextSerializer from '../../PortableTextSerializer';
import SeeMoreButton from '../../Buttons/SeeMoreButton/SeeMoreButton';
import Photo from '@/components/Photo/Photo';
import Link from 'next/link';
const cx = classnames.bind(styles);

const IndividualPressFeature = ({ data }: any) => {
  const { mainArticle, content } = data;
  console.log('data');
  console.log(data);

  return (
    <article className={styles.container}>
      <div className={styles.mainArticleContainer}>
        <Photo className={styles.mainArticleLogo} photo={mainArticle.altLogo} />
        <h3 className={cx(styles.heading, 'quote-md')}>{mainArticle.title}</h3>
        <a
          href={mainArticle.link}
          className={cx(styles.link, 'label-small-updated')}
        >
          Read article →
        </a>
      </div>
      <div className={styles.asSeenInContainer}>
        <div className="label-medium-updated">As seen in</div>
        <div className={styles.logoContainer}>
          {content?.map((article, i) => (
            <a
              href={article.link}
              onClick={() => ga.captureOutboundLink(article.link)}
              target="_blank"
              rel="noreferrer"
              key={i}
            >
              <Photo photo={article.altLogo} className={styles.asSeenInLogo} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.seeMoreButtonContainer}>
        <SeeMoreButton
          data={{
            label: 'See More Press',
            link: '/about/press',
          }}
        />
      </div>
    </article>
  );
};

export default IndividualPressFeature;

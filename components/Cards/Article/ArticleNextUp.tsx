import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Banner, Title, Lede } from './ArticleCardComponents';
import Link from 'next/link';
import { ArticleCardData } from '../';
import { Tags } from '../';
import { FRAMER_TRANSITION_EASEOUT } from '../../../lib/framer/framer-animations';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/store';

const { className, styles } = css.resolve`
  div {
    display: inline-block;
    padding-top: 1.25rem;
    width: 100%;
    margin-bottom: 1.25rem;
    padding-bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const NextUpCard = observer(({ data }: { data: ArticleCardData }) => {
  const { title, lede, tags } = data;
  const store = useStore();
  const {
    uiStore: { textColor },
  } = store;
  return (
    <div className="container">
      <div className="featured-tag">Next Up</div>

      <h2>{title} </h2>
      <div className="layout tease-lede">{lede}</div>

      {tags && <Tags tags={tags} />}
      <style jsx>{`
        .container {
          color: ${textColor};
        }
        h2 {
          margin: 0;
          margin-bottom: 0.625rem;
        }
        .tease-lede {
          margin-bottom: 0.625rem;
        }
        .featured-tag {
          margin-bottom: 0.625rem;
          color: var(--blueThree);
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
});

const LinkWrapper = ({ slug, children }) => {
  return (
    <Link href={`/playbook/${slug}`}>
      <a>{children}</a>
    </Link>
  );
};

const NextUp = ({
  data,
  onActionButtonClicked,
}: {
  data: ArticleCardData;
  onActionButtonClicked: (slug: string) => void;
}) => {
  const { slug } = data;

  return (
    <motion.div
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      whileHover={{ opacity: 0.8 }}
      variants={variants}
      className={className}
    >
      {onActionButtonClicked ? (
        <a onClick={() => onActionButtonClicked(slug)}>
          <NextUpCard data={data} />
        </a>
      ) : (
        <LinkWrapper slug={slug}>
          <NextUpCard data={data} />
        </LinkWrapper>
      )}

      <style jsx>{`
        .line {
          width: 100%;
          border-top: 4px solid var(--black);
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default NextUp;

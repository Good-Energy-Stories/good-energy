import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { Portrait } from './CharacterProfileCardComponents';
import { PortraitSizes } from './CharacterProfileCardComponents';
import SmallBorderCTAButton from '../SmallBorderCTAButton';

function getStyles(maxWidth, last) {
  return css.resolve`
    div {
      display: inline-block;
      height: 100%;
      width: 100%;

      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      text-align: center;
      border-bottom: ${last ? '0' : '1px solid var(--blueThree)'};
    }
    @media only screen and (max-width: 768px) {
      div {
        display: grid;
        max-width: none;
      }
    }
  `;
}

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ExpertProfileStandard = ({
  data,
  index,
  maxWidth,
  last,
  onActionButtonClicked,
}: {
  data: any;
  index: number;
  maxWidth?: number;
  last?: boolean;
  onActionButtonClicked?: (slug: string) => void;
}) => {
  const { className, styles } = getStyles(maxWidth, last);
  const { name, shortBio, Information, slug, fullSizePortraitImage } = data;

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={className}
    >
      <div className="layout">
        {fullSizePortraitImage && (
          <Portrait
            image={fullSizePortraitImage}
            size={PortraitSizes.small}
            backgroundColor={'var(--greyBlue)'}
          />
        )}
        {!fullSizePortraitImage && <div className="line" />}
        <div className="label-medium">{'Expert Profile'}</div>
        <h3>{name}</h3>
        {shortBio && <div className="tease-lede-small">{shortBio}</div>}
        <SmallBorderCTAButton
          label="Read More"
          href={`/about/library-of-experts/spotlight/${slug}`}
        />
      </div>

      <style jsx>{`
        .label-medium {
          margin-top: 1.25rem;
          color: var(--blueThree);
        }
        h3 {
          margin: 0.625rem 0;
          margin-top: 0.625rem;
          margin-bottom: 0.625rem;
        }
        .tease-lede-small {
          text-align: center;
          margin-bottom: 0.625rem;
        }
        .layout {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      {styles}
    </motion.div>
  );
};

export default ExpertProfileStandard;

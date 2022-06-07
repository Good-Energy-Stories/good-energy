import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../lib/framer/framer-animations';
import useBannerHeight from '../utils/hooks/useBannerHeight';
import PageBannerText from './PageBannerText';

const { className, styles } = css.resolve`
  div {
    width: calc(100% - 24px);
    background-color: var(--black);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 12px;
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    div {
      top: 12px;
      padding: 0 1.25rem;
    }
  }
`;

const PageBanner = ({ copy }: { copy: any }) => {
  const bannerHeight = useBannerHeight();
  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        style={{ height: bannerHeight }}
        className={className}
      >
        <PageBannerText copy={copy} />
        {styles}
      </motion.div>
    </>
  );
};

export default PageBanner;

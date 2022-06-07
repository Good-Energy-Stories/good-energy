import useBannerHeight from '../../utils/hooks/useBannerHeight';
import { NavBarStyles, dark, light } from '../StickyNavBar';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
function getStyles(theme) {
  return css.resolve`
    div {
      border-top: 5px solid ${theme.textColor};
      border-bottom: 5px solid ${theme.textColor};
      display: flex;
      background-color: ${theme.backgroundColor};
      justify-content: space-between;
      position: sticky;
      top: 0;

      font-size: 20px;

      z-index: 100;
    }

    @media only screen and (max-width: 768px) {
      div {
      }
    }
  `;
}

const StickyNavBar = ({
  mode = NavBarStyles.light,
  showBanner,
  donateLink,
}: {
  mode?: NavBarStyles;
  showBanner: boolean;
  donateLink?: string;
}) => {
  const theme = mode === NavBarStyles.dark ? dark : light;
  const { className, styles } = getStyles(theme);
  const bannerHeight = useBannerHeight();
  return (
    <>
      <motion.div
        style={{ marginTop: showBanner ? bannerHeight : 0 }}
        className={className}
      >
        <NavButtons theme={theme} donateLink={donateLink} />
        <SearchBar theme={theme} />

        {styles}
      </motion.div>
    </>
  );
};

export default StickyNavBar;

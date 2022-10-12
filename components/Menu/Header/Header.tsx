import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/store';
import styles from './Header.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import MenuButton from './MenuButton';
import { FRAMER_TRANSITION_FASTEASE } from '../../../lib/framer/framer-animations';
import NavLogo from './NavLogo';
import SearchBar from './SearchBar';

const Header = observer(() => {
  const store = useStore();
  const {
    uiStore: { playbookNavOverlayOpen, navOverlayOpen },
  } = store;
  const navPadding = navOverlayOpen ? 400 : 0;
  const playbookNavPadding = playbookNavOverlayOpen ? 400 : 0;
  const paddingLeft = navPadding + playbookNavPadding;

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 12], [0, -12]);
  return (
    <motion.header
      style={{ y }}
      initial={{ paddingLeft: 0 }}
      animate={{ paddingLeft }}
      className={styles.container}
      transition={FRAMER_TRANSITION_FASTEASE}
    >
      <MenuButton />
      <SearchBar />
      <NavLogo />
    </motion.header>
  );
});
export default Header;

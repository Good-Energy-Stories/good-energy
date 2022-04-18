import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import { SECONDARY_MENU_HEIGHT } from './SecondaryNavMenu';

function getStyles() {
  return css.resolve`
    div {
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
      div {
      }
    }
  `;
}

const variants = {
  expanded: {
    height: SECONDARY_MENU_HEIGHT,
  },
  collapsed: {
    height: 0,
  },
};

const PlaybookAnimatedSpacer = observer(() => {
  const { className, styles } = getStyles();

  const store = useStore();
  const {
    uiStore: { playbookSecondaryNavOpen },
  } = store;

  return (
    <>
      <motion.div
        transition={FRAMER_TRANSITION_EASEOUT}
        variants={variants}
        className={className}
        animate={playbookSecondaryNavOpen ? 'expanded' : 'collapsed'}
      />
      {styles}
    </>
  );
});

export default PlaybookAnimatedSpacer;

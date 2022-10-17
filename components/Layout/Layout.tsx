import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import { Key } from 'react';
import { FRAMER_TRANSITION_EASEOUT } from '../../lib/framer/framer-animations';
import useIsPlaybook from '../../utils/useIsSecondMenuActive';
import styles from './Layout.module.css';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Layout = observer(({ children, key }: any) => {
  const isPlaybook = useIsPlaybook();

  return (
    <motion.main
      data-is-playbook={isPlaybook}
      key={key}
      transition={FRAMER_TRANSITION_EASEOUT}
      initial={'out'}
      animate={'in'}
      exit={'out'}
      variants={variants}
      className={styles.container}
    >
      {children}
    </motion.main>
  );
});

export default Layout;

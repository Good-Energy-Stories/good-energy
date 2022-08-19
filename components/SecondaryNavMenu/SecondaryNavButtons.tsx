import HamburgerIcon from '../../public/small-hamburger.svg';
import SearchIcon from '../../public/small-search.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SecondaryNavButtons = observer(() => {
  const store = useStore();
  const {
    uiStore: { openNavOverlay },
  } = store;
  return (
    <div>
      <button onClick={() => openNavOverlay()}>
        <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
          <HamburgerIcon fill={'#000'} />
        </motion.div>
      </button>
      <Link href={'/playbook/search'}>
        <a style={{ height: 30 }}>
          <motion.div whileHover={{ opacity: 0.6 }} whileTap={{ scale: 0.95 }}>
            <SearchIcon fill={'#000'} />
          </motion.div>
        </a>
      </Link>
      <style jsx>{`
        button {
          padding: 0;
          margin-right: 0.625rem;
        }
        div {
          padding-left: 0.625rem;
          display: flex;
          align-items: center;
        }
        @media only screen and (max-width: 768px) {
          .right {
          }
        }
      `}</style>
    </div>
  );
});

export default SecondaryNavButtons;

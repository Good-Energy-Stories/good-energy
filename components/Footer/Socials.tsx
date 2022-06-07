import { LinkColumn } from './';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Socials = observer(() => {
  const store = useStore();
  const {
    dataStore: {
      socials: { twitter, instagram, facebook },
    },
  } = store;
  return (
    <div className="container">
      {twitter !== null && (
        <motion.div whileHover={{ opacity: 0.4 }} whileTap={{ scale: 0.98 }}>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </a>
        </motion.div>
      )}
      <div className="spacer" />
      {instagram !== null && (
        <motion.div whileHover={{ opacity: 0.4 }} whileTap={{ scale: 0.98 }}>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </motion.div>
      )}
      <div className="spacer" />
      {facebook !== null && (
        <motion.div whileHover={{ opacity: 0.4 }} whileTap={{ scale: 0.98 }}>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
        </motion.div>
      )}
      <style jsx>{`
        .container {
          height: 100%;
          display: flex;
          align-items: flex-end;
        }
        .spacer {
          width: 0.625rem;
        }
      `}</style>
    </div>
  );
});

export default Socials;

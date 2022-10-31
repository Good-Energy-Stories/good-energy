import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/store';
import styles from './MenuButton.module.css';
import classnames from 'classnames';
import { useUIStore } from '../../../providers/RootStoreProvider';
const cx = classnames.bind(styles);

const MenuButton = observer(() => {
  const { navOverlayOpen, toggleNavOverlay } = useUIStore();

  const handleClick = () => {
    toggleNavOverlay();
  };

  const showMenuLabel = (
    <>
      <svg
        className={styles.icon}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.50195 15H17.502V13.3333H2.50195V15ZM2.50195 10.8333H17.502V9.16667H2.50195V10.8333ZM2.50195 5V6.66667H17.502V5H2.50195Z" />
      </svg>
      <span className={styles.labelText}>Show Menu</span>
    </>
  );

  const hideMenuLabel = (
    <>
      <svg
        className={styles.icon}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.8337 5.34199L14.6587 4.16699L10.0003 8.82533L5.34199 4.16699L4.16699 5.34199L8.82533 10.0003L4.16699 14.6587L5.34199 15.8337L10.0003 11.1753L14.6587 15.8337L15.8337 14.6587L11.1753 10.0003L15.8337 5.34199Z" />
      </svg>
      <span className={styles.labelText}>Close Menu</span>
    </>
  );

  return (
    <button onClick={handleClick} className={cx('label-medium', styles.button)}>
      {navOverlayOpen ? hideMenuLabel : showMenuLabel}
    </button>
  );
});
export default MenuButton;

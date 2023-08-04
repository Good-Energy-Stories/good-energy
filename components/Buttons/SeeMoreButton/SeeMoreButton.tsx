import styles from './SeeMoreButton.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

const SubmitButton = ({
  label = 'See More',
  link,
  newTab = true,
  className,
  ...props
}: any) => {
  return (
    <button className={cx(styles.container, styles[className])} {...props}>
      <a
        href={link}
        {...(newTab && { target: '__blank', rel: 'noopener noreferrer' })}
      >
        <div className={cx('label-small-updated', styles.label)}>{label} →</div>
      </a>
    </button>
  );
};

export default SubmitButton;

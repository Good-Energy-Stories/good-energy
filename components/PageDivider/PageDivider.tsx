import styles from './PageDivider.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

export enum PageDividerLabelSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const PageDivider = ({ data, className, style }: any) => {
  return (
    <div
      data-theme={data?.backgroundColor}
      className={cx(
        styles.container,
        data?.labelSize === PageDividerLabelSize.Small &&
          cx('label-medium', styles.smallLabel),
        data?.labelSize === PageDividerLabelSize.Medium && 'h4',
        data?.labelSize === PageDividerLabelSize.Large && 'h2',
        className,
      )}
      style={style}
    >
      <div className={cx(styles.inner, data?.label && styles.padding)}>
        {data?.label && <div className={styles.label}> {data.label}</div>}
      </div>
    </div>
  );
};

export default PageDivider;

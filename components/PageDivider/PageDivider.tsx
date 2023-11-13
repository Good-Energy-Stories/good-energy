import styles from './PageDivider.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

export enum PageDividerLabelSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra-large',
}

const Label = ({ size, label }) => {
  switch (size) {
    case PageDividerLabelSize.Small:
      return <span className="label-medium">{label}</span>;
    case PageDividerLabelSize.Medium:
      return <h4 className={'h4-updated'}>{label}</h4>;
    case PageDividerLabelSize.Large:
      return <h2>{label}</h2>;
    case PageDividerLabelSize.ExtraLarge:
      return <h1>{label}</h1>;
    default:
      return null;
  }
};

export const PageDivider = ({ data, className, style }: any) => {
  return (
    <div
      data-theme={data?.backgroundColor}
      className={cx(
        styles.container,
        className,

        data?.marginBottom && styles.marginBottom,
      )}
      style={style}
    >
      <div
        className={cx(
          styles.inner,
          data?.labelSize === PageDividerLabelSize.ExtraLarge &&
            styles.extraLarge,
          data?.label && data?.clearTopPadding
            ? styles.clearTopPadding
            : styles.padding,
        )}
      >
        {data?.label && <Label size={data.labelSize} label={data.label} />}
      </div>
    </div>
  );
};

export default PageDivider;

import styles from './PDFViewer.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const PDFViewer = ({
  url,
  className,
  style,
}: {
  url: string;
  className?: string;
  style?: any;
}) => {
  return (
    <embed
      className={cx(styles.viewer, className)}
      style={style}
      src={url}
      type="application/pdf"
    ></embed>
  );
};

export default PDFViewer;

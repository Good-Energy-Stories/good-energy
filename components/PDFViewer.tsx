import styles from './PDFViewer.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);
const PDFViewer = ({
  title,
  url,
  className,
  style,
}: {
  title?: string;
  url: string;
  className?: string;
  style?: any;
}) => {
  return (
    <iframe
      className={cx(styles.viewer, className)}
      style={style}
      src={url}
      title={title}
      frameBorder="0"
    ></iframe>
  );
};

export default PDFViewer;

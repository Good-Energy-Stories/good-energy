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
      title={title}
      src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${url}#toolbar=0&scrollbar=0`}
      frameBorder="0"
      height="100%"
      width="100%"
    ></iframe>
  );
};

export default PDFViewer;

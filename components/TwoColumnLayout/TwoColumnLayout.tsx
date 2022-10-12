import { imageUrlFor } from '../../utils/imageUrlFor';
import styles from './TwoColumnLayout.module.css';
import classnames from 'classnames';
import { useCallback } from 'react';
import HalfPageContent from './HalfPageContent';

const cx = classnames.bind(styles);

const TwoColumnLayout = ({ data }: any) => {
  const {
    leftColumn,
    rightColumn,
    backgroundColor,
    marginBottom,
    noPadding,
    backgroundImage,
  } = data;

  const renderContent = useCallback((content: any) => {
    return content.map((item, index) => (
      <HalfPageContent key={index} content={item} />
    ));
  }, []);
  return (
    <div
      data-theme={backgroundColor}
      className={cx(
        styles.container,
        !noPadding && styles.padding,
        marginBottom && styles.marginBottom,
      )}
    >
      {leftColumn && (
        <div className={cx(styles.column, styles.left)}>
          {renderContent(leftColumn)}
        </div>
      )}
      {rightColumn && (
        <div className={cx(styles.column, styles.right)}>
          {renderContent(rightColumn)}
        </div>
      )}
      {backgroundImage && (
        <img
          className={cx(styles.image)}
          src={imageUrlFor(backgroundImage).width(1080).url()}
        />
      )}
    </div>
  );
};

export default TwoColumnLayout;

import { useCallback } from 'react';
import Callout from '../Callout/Callout';
import styles from './CalloutSection.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

enum CalloutSectionTheme {
  Light = 'white',
  Dark = 'black',
}

const CalloutSection = ({ data }: any) => {
  const { title, backgroundColor, content, marginBottom } = data;

  const renderCallouts = useCallback((content: any) => {
    return content.map((item, index) => (
      <Callout key={index} className={styles.callout} data={item} />
    ));
  }, []);
  return (
    <div
      data-theme={
        backgroundColor === CalloutSectionTheme.Dark ? 'dark' : 'light'
      }
      className={cx(styles.container, marginBottom && styles.marginBottom)}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      {renderCallouts(content)}
    </div>
  );
};

export default CalloutSection;

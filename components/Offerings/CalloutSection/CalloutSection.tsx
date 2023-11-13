import { useCallback } from 'react';
import Callout from '../Callout/Callout';
import styles from './CalloutSection.module.css';
import classnames from 'classnames';
const cx = classnames.bind(styles);

enum CalloutSectionTheme {
  Light = 'none',
  White = 'white',
  Dark = 'black',
}

const CalloutSection = ({ data }: any) => {
  const { title, backgroundColor, content, marginBottom, clearTopRule } = data;

  const getDataTheme = useCallback(() => {
    let dataTheme = CalloutSectionTheme.Light;

    if (backgroundColor === CalloutSectionTheme.Dark) {
      dataTheme = CalloutSectionTheme.Dark;
    } else if (backgroundColor === CalloutSectionTheme.White) {
      dataTheme = CalloutSectionTheme.White;
    }

    return dataTheme;
  }, [backgroundColor]);

  const renderCallouts = useCallback((content: any) => {
    return content.map((item, index) => (
      <Callout
        key={index}
        className={styles.callout}
        data={{ ...item, clearTopRule }}
      />
    ));
  }, []);

  return (
    <div
      data-theme={getDataTheme()}
      className={cx(styles.container, marginBottom && styles.marginBottom)}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      {renderCallouts(content)}
    </div>
  );
};

export default CalloutSection;

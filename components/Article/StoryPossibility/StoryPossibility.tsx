import { useState } from 'react';
import Body from './Body';
import Header from './Header';
import styles from './StoryPossibility.module.css';

const ArticleStoryPossibility = ({
  data,
  index,
}: {
  data: any;
  index: number;
}) => {
  const { body, initialState } = data;
  const [collapsed, setCollapsed] = useState(!initialState ?? true);
  return (
    <div className={styles.container}>
      <Header
        collapsed={collapsed}
        toggleCollapse={() => setCollapsed(!collapsed)}
      />
      <Body body={body} collapsed={collapsed} />
    </div>
  );
};

export default ArticleStoryPossibility;

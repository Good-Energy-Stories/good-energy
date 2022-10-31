import Link from 'next/link';
import styles from './ArticleList.module.css';
const ArticleList = ({ data }: any) => {
  const { title, content } = data;

  const renderList = (content) => {
    return content?.map((item: any, index: number) => {
      return (
        <li key={index} className={styles.li}>
          <Link href={`playbook/${item?.slug.current}`} passHref>
            <a className={styles.text}>
              <h4 className={styles.heading}>{item.title}</h4>
            </a>
          </Link>
        </li>
      );
    });
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.ul}>{renderList(content)}</ul>
    </div>
  );
};

export default ArticleList;

import Resource from './Resource';
import styles from './ResourceSection.module.css';

const ResourceSection = ({ data }: any) => {
  const { title, resources, backgroundColor } = data;

  const renderResources = (content) => {
    return content.map((item, index) => (
      <Resource
        key={index}
        data={item}
        index={index}
        backgroundColor={backgroundColor}
      />
    ));
  };
  return (
    <div data-theme={backgroundColor} className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {renderResources(resources)}
    </div>
  );
};

export default ResourceSection;

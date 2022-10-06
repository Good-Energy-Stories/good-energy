import { motion } from 'framer-motion';
import Resource from './Resource';

import { Card } from './ResourceCard';
import styles from './ResourceSection.module.css';

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ResourceSection = ({ data }: { data: any }) => {
  const { title, resources } = data;

  const renderResources = (content) => {
    return content.map((item, index) => (
      <Resource key={index} data={item} index={index} />
    ));
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {renderResources(resources)}
    </div>
  );
};

export default ResourceSection;

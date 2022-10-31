import Footnote from './Footnote';
import styles from './MobileFootnotes.module.css';

const MobileFootnotes = ({ footnotes }: { footnotes: any }) => {
  if (!footnotes) return null;

  return (
    <div className={styles.container}>
      {footnotes
        .filter((f) => f?._type === 'footnote')
        .map((f, i) => {
          return (
            <Footnote key={f?.text + i} text={f?.text} number={f?.number} />
          );
        })}
    </div>
  );
};

export default MobileFootnotes;

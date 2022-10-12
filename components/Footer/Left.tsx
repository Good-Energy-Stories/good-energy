import { Search } from '../';

const Left = () => {
  return (
    <div>
      <Search />
      <style jsx>{`
        div {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      `}</style>
    </div>
  );
};

export default Left;

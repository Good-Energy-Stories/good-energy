import { sanity } from '../lib/sanity';
import { Meta, StickyNavBar } from '../components';

const Team = (props) => {
  return (
    <>
      <Meta />
      <StickyNavBar />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Team;

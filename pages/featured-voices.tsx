import { sanity } from '../lib/sanity';
import { Meta, StickyNavBar } from '../components';

const FeaturedVoices = (props) => {
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

export default FeaturedVoices;

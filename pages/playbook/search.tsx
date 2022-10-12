import { sanity } from '../../lib/sanity';
import { queries } from '../../data';
import { Meta } from '../../components';
import SearchPage from '../../components/SearchPage/SearchPage';

const Root = () => {
  return (
    <>
      <Meta />
      <SearchPage />
    </>
  );
};

export async function getStaticProps() {
  const pageData = await sanity.fetch(queries.characterProfilePageQuery);
  return { props: { pageData } };
}

export default Root;

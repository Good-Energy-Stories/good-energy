import PageNotFound from '@/components/PageNoteFound/PageNotFound';
import { getClient } from '@/lib/sanity/sanity.server';
import { queries } from '@/data/index';

export default PageNotFound;

export const getStaticProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(queries.errorPageQuery);

  return {
    props: {
      data,
    },
  };
};

import { sanity } from '../../../lib/sanity';

import { queries } from '../../../data';

import CharacterProfilesPage from '../../../components/CharacterProfilesPage/CharacterProfilesPage';

export default CharacterProfilesPage;

export async function getStaticProps() {
  const pageData = await sanity.fetch(queries.characterProfilesPageQuery);
  return { props: { pageData } };
}

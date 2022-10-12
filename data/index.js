import * as mainQueries from './queries';
import * as offeringsQueries from './queries/offerings';
import * as pressQueries from './queries/press';
import * as landingPageQueries from './queries/landingPage';
import * as expertProfilesQueries from './queries/expertProfiles';

const queries = {
  ...mainQueries,
  ...offeringsQueries,
  ...landingPageQueries,
  ...expertProfilesQueries,
};
export { queries };
